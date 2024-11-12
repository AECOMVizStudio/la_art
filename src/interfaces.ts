// used in MaterialsExpandable.tsx
export default interface MeetingMaterials {
    key: number;
    document: string;
    label: string;
    ref: string;
    }
export interface MaterialsExpandableProps {
    props: MeetingMaterials[];
}

// used in Expandable.tsx
export interface DiagramLanguage {
    language: string;
    abbreviation: string;
    text: string;
    href?: string;
  }
export interface ExpandableProps {
    props: DiagramLanguage[];
}