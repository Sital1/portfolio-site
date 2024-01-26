import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import DailyRhythms from "@/public/DailyRhythms.png";
import Nafa from "@/public/Nafa.png";
import GameOfLife from "@/public/GameOfLife.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    location: "Blue Cross And Blue Shield of Louisiana , Monroe, LA",

    description:
      "I worked as a Software Developer in the EDI team. My job was to use C#, .Net, SQL and Angular to create apis and tools for data interchange according to EDI standards.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2022 - Present",
  },
  {
    title: "Emerging Scholar",
    location: "University of Louisiana Monroe, Monroe, LA",
    description:
      "I worked as an emerging scholar with a mathematics professor to investigate collatz conjecture. My job was to create a fast algorithm to find collatz conjecture pairs and visualize them.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2018 - Dec 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Daily Rhythms",
    description:
      "DailyRhythms helps keep log of important tasks the user want to do daily. I built it for a friend who used to keep such records in paper.",
    source: "https://dailyrhythmstracker.com/",
    code: "https://github.com/Sital1/DailyRhythms",
    tags: ["C#", "ASP.NETCORE", "SqlServer", "Angular", "Typescript"],
    imageUrl: DailyRhythms,
  },
  {
    title: "Alumni Website",
    description:
      "Worked in a team of 6 to build an Alumni Website for Neville High School as part of Capstone Project for Software Development class. Selected as the winner among 4 other similar sites.",
    source: "#",
    code: "#",
    tags: ["React", "Javascript", "Django", "Python", "Postgres"],
    imageUrl: Nafa,
  },
  {
    title: "Game of Life",
    description:
      "Uses React to Visualize Conway's Game of Life.",
    source: "https://game-of-life-lsines.vercel.app/",
    code: "https://github.com/Sital1/Game-of-Life",
    tags: ["React", "HTML", "CSS", "Javascript"],
    imageUrl: GameOfLife,
  },
] as const;

export const skillsData = [
  "C#",
  ".NET",
  "ASP.NETCORE",
  "SQLServer",
  "SQL/TSQL",
  "SSMS",
  "IIS",
  "Angular",
  "React",
  "Git",
  "RestApi",
  "RabbitMQ",
  "Docker",
  "Typescript",
  "Multithreading",
  "Java",
  "Python",
  "Spring/Springboot",
  "HTML",
  "CSS",
  "Debbuging",
  "ProblemS olving"
] as const;
