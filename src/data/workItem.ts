import Project4 from "../assets/img/projects/Cards.jpg";
import Project2 from "../assets/img/projects/project2.webp";
import Project1 from "../assets/img/projects/project1.webp";
import Project3 from "../assets/img/projects/Umneyka.webp";
import {FilterType} from "../layout/section/works/Works";

export type WorkItem = {
    title: string;
    text: string;
    img: string;
    hrefDemo: string;
    hrefCode?: string;
    category: FilterType;
};
export const workItems: WorkItem[] = [
    {
        title: "Quizlet",
        text: "Technology stack: TypeScript, React, RTK Query, React Router, React Hook Form, Storybook, Radix UI, SASS, Zod.",
        img: Project4,
        hrefDemo: "https://cards-project-rouge.vercel.app/",
        hrefCode: "https://github.com/Troan89/CardsProject",
        category: "SPA",
    },
    {
        title: "Todo-list",
        text: "Technology stack: ",
        img: Project4,
        hrefDemo: "https://halina2610.github.io/1-todolist/",
        hrefCode: "https://github.com/Halina2610/1-todolist",
        category: "SPA",
    },
    {
        title: "Information page",
        text: "The page was created using CSS and HTML.",
        img: Project2,
        hrefDemo: "https://codepen.io/abmthzns-the-flexboxer/pen/oNaOJQX",
        category: "All",
    },
    {
        title: "Clothing store",
        text: "An application for an online clothing store. Created using the Tilda online builder.",
        img: Project1,
        hrefDemo: "https://pollystokk.by/",
        category: "Landing",
    },
    {
        title: "A toy store",
        text: "An application for an online toy store. Created using the Tilda online builder.",
        img: Project3,
        hrefDemo: "http://umneyka.by.tilda.ws/",
        category: "Landing",
    },
];
