import "./style.css";
import { shopUrl } from "./site.ts";

document.querySelector<HTMLAnchorElement>(".product-link")?.setAttribute("href", shopUrl);
