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