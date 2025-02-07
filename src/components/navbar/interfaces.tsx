interface NavbarItemProps {
    translationKey: string;
    path: string;
}

interface NavbarProps {
    pages: NavbarItemProps[];
}

export type { NavbarItemProps, NavbarProps };