"use client";
import { Image as ReactDatocmsImage, ResponsiveImageType } from "react-datocms";

import { ThemedImageBlockRecord } from "@/gql/graphql";
import { useIsDark } from "@/hooks/useIsDark";
import { cn } from "@/lib/utils";

export const BlockThemedImage = ({
  block,
}: {
  block: ThemedImageBlockRecord;
}) => {
  const isDark = useIsDark();
  const images = block.images;
  if (!images || images.length === 0 || !images[0].responsiveImage) return null;
  if (images.length === 1 && images[0].responsiveImage) {
    return (
      <div className={cn(block.contentPadding && "content-padding")}>
        <ReactDatocmsImage
          data={images[0].responsiveImage as ResponsiveImageType}
          layout="responsive"
        />
      </div>
    );
  }
  const lightImage = images[0].responsiveImage as ResponsiveImageType;
  const darkImage = images[1].responsiveImage as ResponsiveImageType;
  return (
    <div className={cn(block.contentPadding && "content-padding")}>
      <div className="group relative">
        <ReactDatocmsImage
          data={isDark ? darkImage : lightImage}
          layout="responsive"
        />
      </div>
    </div>
  );
};
