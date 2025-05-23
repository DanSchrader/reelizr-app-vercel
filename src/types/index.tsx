// Next image

export interface TImage {
    src: string;
    alt: string;
    width: number;
    height: number;
}

// MUI button

export interface TButton {
    text: string;
    href: string;
    icon?: string;
}

// Hero section

export interface THeroSection {
    title: string;
    subtitle: string;
    heading: string;
    description: string;
    button: TButton;
    image: TImage;
}

export interface TTabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

// Service section

export interface TServiceCardProps {
    id: string;
    name: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
    imgHeight: number;
  }

export interface TCardSectionProps {
    services: TServiceCardProps[];
  }