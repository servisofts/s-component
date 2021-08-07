import Introduccion from "./1_introduccion";
import Install from "./2_install";
import { SPageListProps } from 'servisofts-component'
export const Documentation: SPageListProps = {
    "docs": { url: "docs/", component: Introduccion },
    "docs/install": { url: "docs/install", component: Install },
}