export interface Props {
    text: string;
    href: string;
}

export interface PropsChildren {
    children: JSX.Element | JSX.Element[];
    title?: string;
}