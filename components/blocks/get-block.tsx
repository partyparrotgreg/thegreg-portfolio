import {
    AboutBlockRecord, ClientRecord,
    ExperienceListBlockRecord, FeaturephotoblockRecord,
    FlowBlockRecord,
    GalleryRecord,
    ProcessListBlockRecord,
    ProjectListBlockRecord,
    ProjectOverviewBlockRecord,
    SectionBlockRecord,
    SliderShowcaseBlockRecord,
    StatListRecord,
    ThemedImageBlockRecord
} from "@/gql/graphql";
import { Image as ReactDatocmsImage, ResponsiveImageType } from "react-datocms";
import { BlockThemedImage } from "./block-themed-image";
import { BlockFeaturePhoto } from "./block-feature-photo";
import { SectionSlice } from "../shared/section-slices";

export const getBlock = (record: any) => {
    switch (record.__typename) {
        case "GalleryRecord":
            const gallery = record as GalleryRecord;
            return <div>Gallery</div>;
        case "AboutBlockRecord":
            const about = record as AboutBlockRecord;
            return <div>About</div>;
        case "ThemedImageBlockRecord":
            const themedImage = record as ThemedImageBlockRecord;
            return <BlockThemedImage block={themedImage} />;
        case "ProjectListBlockRecord":
            const projectList = record as ProjectListBlockRecord;
            return <div>Project List</div>;
        case "StatListRecord": {
            const statsBlock = record as StatListRecord;
            return <div>Stats</div>;
        }
        case "ExperienceListBlockRecord":
            const block = record as ExperienceListBlockRecord;
            return <div>Experience List</div>;
        case "ClientsBlockRecord":
            const clients = record.clients as ClientRecord[];
            return <SectionSlice>Clients</SectionSlice>;
        case "FeaturephotoblockRecord":
            const featuredPhoto = record as FeaturephotoblockRecord;
            return <BlockFeaturePhoto block={featuredPhoto} />;
        case "ProjectOverviewBlockRecord":
            const projectOverview = record as ProjectOverviewBlockRecord;
            return <SectionSlice>{projectOverview.projectDescription}</SectionSlice>;
        case "ProcessListBlockRecord":
            const processList = record as ProcessListBlockRecord;
            return <div>Process List</div>;
        case "SliderShowcaseBlockRecord":
            const slider = record as SliderShowcaseBlockRecord;
            return <div>Slider</div>;
        case "SectionBlockRecord":
            const entry = record as SectionBlockRecord;
            return <div><h2>{entry.sectionTitle}</h2><p>{entry.subtitle}</p></div>;
        case "BeforeAfterBlockRecord":
            return <div>Before After</div>;
        case "FlowBlockRecord":
            const description = record.description as FlowBlockRecord["description"];
            const images = record.images as FlowBlockRecord["images"];

            return (
                <div className="flex flex-col overflow-hidden">
                    <div className="p-8">{description}</div>
                    <div className="grid md:grid-cols-3">
                        {images.map((image, index) => (
                            <div key={image.id + "_" + index} className="flex flex-col">
                                <div>{image.title}</div>
                                <ReactDatocmsImage
                                    data={image.responsiveImage as ResponsiveImageType}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            );
        default:
            return <div>Something went wrong.</div>;
    }
};
