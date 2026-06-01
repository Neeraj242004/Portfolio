import { FaPaintBrush, FaTools } from "react-icons/fa";
import { FaCode, FaDatabase, FaLightbulb, FaReact, FaServer } from "react-icons/fa6";
import project1 from "./project1.png";
import project2 from "./project2.png";
import project3 from "./project3.png";
import project4 from "./project4.png";

export const aboutInfo = [
    {
        icon: FaLightbulb,
        title:`Innovative`,
        description: `I love creating uniqe solution to complex problems with cutting-edge technologies.`,
        color: `text-purple`
    },
    {
        icon: FaPaintBrush,
        title:`Design Oriented`,
        description: `Beautiful design and user experience are at the heart of everything I create.`,
        color: `text-pink`
    },
    {
        icon: FaCode,
        title:`Clean Code`,
        description: `I write maintainable, efficient code following best practices and modern patterns.`,
        color: `text-blue`
    }
]

export const skills =[
    {
        title:`Frontend Development`,
        icon: FaReact,
        description: `Building responses responsive and interactive user interface with modern framework.`,
        tags: [`HTML`, `CSS`, `React`,`TypeScript`],
    },
     {
        title:`Backend Development`,
        icon: FaServer,
        description: `Creating robust server-side application and RESTful APIs.`,
        tags: [`Node.js`, `Express`],
    },
     {
        title:`Database Management`,
        icon: FaDatabase,
        description: `Designing and optimizing database for performance and scalability.`,
        tags: [`MongoDB`, `MySql`],
    },
     {
        title:`Tools & technologies`,
        icon: FaTools,
        description: `Essential tools and technologies I use in my development workflow .`,
        tags: [`Netify`, `Git & GitHub`, ]
    },
]

export const projects =[
{
title: "Admin Dashboard UI",
description: "Designed and developed a responsive admin dashboard with interactive charts, statistics cards, user management tables, and a modern navigation system. Focused on clean UI/UX, reusable React components, and mobile responsiveness.",
image: project3,
tech: ["React", "Tailwind CSS", "JavaScript", "Chart.js"],
icons: [FaCode, FaLightbulb, FaReact],
demo: "https://dashboard-ui-taupe-three.vercel.app/",
code: "https://github.com/Neeraj242004/Dashboard-UI",
},
{
title: "Foodi – Restaurant Website",
description: "A modern and responsive restaurant website featuring a dynamic menu, smooth animations, and a clean UI. Users can explore dishes, view sections, and enjoy a fast, mobile-friendly experience.",
image: project1,
tech: ["React", "Tailwind CSS", "Framer Motion, Node.js,MongoDB,Express"],
icons: [ FaCode, FaDatabase, FaLightbulb, FaReact, FaServer ],
demo: "https://foodi-orcin-two.vercel.app/",
code: "https://github.com/Neeraj242004/Foodi",
},
{
title: "ShopEase – E-Commerce Website",
description: "A clean and responsive e-commerce web application with a modern product listing UI, smooth navigation, and user-friendly design. Users can browse products, view prices, and interact with cart actions in a fast, mobile-friendly experience.",
image: project2, 
tech: ["React", "Tailwind CSS", "Bootstrap"],
icons: [FaCode, FaReact, FaServer],
demo: "https://flipkart-rho-one.vercel.app",
code: "https://github.com/Neeraj242004/Flipkart"
},
{
  title: "Personal Portfolio Website",
  description: "A modern and minimal personal portfolio website built to showcase my frontend skills and projects. Designed with a clean UI, smooth animations, and fully responsive layout to provide an engaging user experience across all devices.",
  image: project4,
  tech: ["React", "Tailwind CSS",  "Framer Motion"],
  icons: [ FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaDatabase, FaTools,],
  demo: "https://neeraj-portfolio-three.vercel.app",
  code: "https://github.com/Neeraj242004/Portfolio",
}


]