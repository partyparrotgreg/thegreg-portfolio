import { cache } from 'react';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print } from 'graphql';

export type PerformRequestParams<TResult = unknown, TVariables = Record<string, unknown>> = {
  query: TypedDocumentNode<TResult, TVariables> | string;
  variables?: TVariables;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
  visualEditingBaseUrl?: string;
  revalidate?: number;
};

export const performRequest = cache(async <TResult = unknown, TVariables = Record<string, unknown>>({
  query,
  variables,
  includeDrafts = false,
  excludeInvalid = false,
  visualEditingBaseUrl,
  revalidate,
}: PerformRequestParams<TResult, TVariables>): Promise<TResult> => {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    ...(includeDrafts ? { 'X-Include-Drafts': 'true' } : {}),
    ...(excludeInvalid ? { 'X-Exclude-Invalid': 'true' } : {}),
    ...(visualEditingBaseUrl
      ? {
          'X-Visual-Editing': 'present',
          'X-Base-Editing-Url': visualEditingBaseUrl,
        }
      : {}),
  };

  const queryString = typeof query === 'string' ? query : print(query);

  const response = await fetch('https://graphql.datocms.com/', {
    headers,
    method: 'POST',
    body: JSON.stringify({ query: queryString, variables }),
    next: { revalidate },
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(
        responseBody
      )}`
    );
  }

  if (responseBody.errors) {
    throw new Error(
      `DatoCMS GraphQL Error: ${JSON.stringify(responseBody.errors)}`
    );
  }

  return responseBody.data;
});
