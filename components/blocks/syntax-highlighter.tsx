import { Code } from "bright";

Code.theme = {
  dark: "github-dark",
  light: "github-light",
  // using a different CSS selector:
  lightSelector: "html.light",
};

Code.lineNumbers = true;

export const SyntaxHighlighter = ({
  code,
  language,
}: {
  code: string;
  language: string;
}) => {
  return (
    <div className="max-w-4xl w-full mx-auto">
      <Code lang={language}>{code}</Code>
    </div>
  );
};
