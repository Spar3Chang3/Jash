export const SiteLinks = {
    home: '/home',
    products: '/products',
    policy: '/policy',
    help: '/help',
    updates: '/updates',
}

export const Backgrounds = {
    wallBackground: "/backgrounds/studio-creations-3d-with-wall.png",
    openWallBackground: "/backgrounds/studio-creations-3d-open-wall.png"
}

export const Products = {
    bookmarkBackground: "/products/bookmark-lineup.jpg"
}

export const Titles = {
    home: 'Home - JCS',
    products: 'Products - JCS',
    policy: 'Policies - JCS',
    help: 'Help - JCS',
    updates: 'Updates - JCS',
}

export const Icons = {
    jsc: '/icons/jsc-logo.png',
}

export function GetFormattedDate() {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}