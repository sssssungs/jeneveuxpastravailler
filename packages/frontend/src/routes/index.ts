import planetIcon from "../../public/static/images/icons/Planet.png";
import videoIcon from "../../public/static/images/icons/Video.png";
import backpackIcon from "../../public/static/images/icons/Backpack.png";

export const route: { icon: string; link: string; as?: string }[] = [
	{ icon: planetIcon, link: "/", as: "/" },
	{ icon: videoIcon, link: "/project", as: "/project" },
	{ icon: backpackIcon, link: "/mySetting", as: "/mySetting" },
];
