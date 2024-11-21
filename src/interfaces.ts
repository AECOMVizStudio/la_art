// used in MaterialsExpandable.tsx and Meetings.tsx
export interface MeetingMaterials {
    key: number;
    document: string;
    label: string;
    ref: string;
    }
export interface MaterialsExpandableProps {
    props: MeetingMaterials[];
}

// used in Expandable.tsx and GeneralPlan.tsx
export interface DiagramLanguage {
    language: string;
    abbreviation: string;
    text: string;
    href?: string;
  }
export interface ExpandableProps {
    props: DiagramLanguage[];
}

// used in VideosExpandable.tsx
export interface VideoData {
    title: string;
    href: string;
    thumbnailImg: string;
    language: string;
}
export interface VideosExpandableProps {
    props: VideoData[];
}
