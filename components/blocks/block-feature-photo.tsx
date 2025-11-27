"use client";

import { FeaturephotoblockRecord } from "@/gql/graphql";
import { Image as ReactDatocmsImage } from "react-datocms";
// TODO: Ideally count the photos and display as grid with columns based on count
export const BlockFeaturePhoto = ({
  block,
}: {
  block: FeaturephotoblockRecord;
}) => {
  if (!block) return null;
  const { title, description, image, span, images } = block;
  const howManyImages = images?.length || 0;
  return (
    <section className="page-section">
      <div className="container mx-auto outline">
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="space-y-2 md:w-1/3">
            <h4>{title}</h4>
            <p className="text-foreground/75">{description}</p>
          </div>
          <div className="md:w-2/3">
            {image?.responsiveImage && (
              <div className="bg-secondary">
                <ReactDatocmsImage
                  data={image.responsiveImage}
                  className="bg-secondary p-8"
                />
              </div>
            )}
            {images && (
              <div className="flex flex-row gap-4">
                {images.map((image, index) => (
                  <div
                    key={image.id + "_" + index}
                    className="bg-secondary p-8"
                  >
                    {image.responsiveImage && (
                      <ReactDatocmsImage data={image.responsiveImage} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
