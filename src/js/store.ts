import {defineStore} from "pinia"

// Originals
import papilloteBotImg from '@/assets/original/papillotebot.jpg'
import paintingModImg from '@/assets/original/paintingmod.png'
import fdlinkImg from '@/assets/original/fdlink.png'
import serverTranslationsImg from '@/assets/original/translate.png'
import rustyCraftImg from '@/assets/original/rust.png'
import legacyFabricImg from '@/assets/original/legacyfabric.png'
import nucleoidImg from '@/assets/original/nucleoid.png'
import multiteamImg from '@/assets/original/multiteam.png'
import gardenArsenalImg from '@/assets/original/gardenarsenal.png'

// Avifs
import papilloteBotAvif from '@/assets/avif/papillotebot.avif'
import paintingModAvif from '@/assets/avif/paintingmod.avif'
import fdlinkAvif from '@/assets/avif/fdlink.avif'
import serverTranslationsAvif from '@/assets/avif/translate.avif'
import rustyCraftAvif from '@/assets/avif/rust.avif'
import legacyFabricAvif from '@/assets/avif/legacyfabric.avif'
import nucleoidAvif from '@/assets/avif/nucleoid.avif'
import multiteamAvif from '@/assets/avif/multiteam.avif'
import gardenArsenalAvif from '@/assets/avif/gardenarsenal.avif'

// Jxl
import papilloteBotJxl from '@/assets/jxl/papillotebot.jxl'
import paintingModJxl from '@/assets/jxl/paintingmod.jxl'
import fdlinkJxl from '@/assets/jxl/fdlink.jxl'
import serverTranslationsJxl from '@/assets/jxl/translate.jxl'
import rustyCraftJxl from '@/assets/jxl/rust.jxl'
import legacyFabricJxl from '@/assets/jxl/legacyfabric.jxl'
import nucleoidJxl from '@/assets/jxl/nucleoid.jxl'
import multiteamJxl from '@/assets/jxl/multiteam.jxl'
import gardenArsenalJxl from '@/assets/jxl/gardenarsenal.jxl'

const projectsList = [
    {
        name: "PapilloteBot",
        id: "papillote-bot",
        desc: "Bot multifonction pour Discord.",
        techs: ["JavaScript", "NodeJS", "Firebase"],
        images: {
            original: papilloteBotImg,
            avif: papilloteBotAvif,
            jxl: papilloteBotJxl
        },
        link: "https://github.com/arthurbambou/PapilloteBot",
        dates: {
            start: 2017,
            end: 2018
        },
        role: "role-main-dev"
    },
    {
        name: "Painting Mod",
        id: "painting-mod",
        desc: "Mod pour Minecraft permettant de colorer des blocs pour lesquels ce n'est pas possible à la base.",
        techs: ["Java"],
        images: {
            original: paintingModImg,
            avif: paintingModAvif,
            jxl: paintingModJxl
        },
        link: "https://github.com/arthurbambou/Painting-Mod",
        dates: {
            start: 2018,
            end: 2019
        },
        role: "role-main-dev"
    },
    {
        name: "Fabric <-> Discord Link",
        id: "fdlink",
        desc: "Mod pour Minecraft permettant de connecter le service de messagerie instantanée d'un\
        serveur Minecraft à un salon d'un serveur Discord, hautement configurable.",
        techs: ["Java"],
        images: {
            original: fdlinkImg,
            avif: fdlinkAvif,
            jxl: fdlinkJxl
        },
        link: "https://github.com/arthurbambou/Fabric---Discord-Link",
        dates: {
            start: 2019,
            end: -1
        },
        role: "role-main-dev"
    },
    {
        name: "Server Translations API",
        id: "server-translations-api",
        desc: "Mod et API pour Minecraft permettant de gérer la traduction de texte côté serveur à la\
        place du client.",
        techs: ["Java"],
        images: {
            original: serverTranslationsImg,
            avif: serverTranslationsAvif,
            jxl: serverTranslationsJxl
        },
        link: "https://github.com/NucleoidMC/Server-Translations",
        dates: {
            start: 2021,
            end: -1
        },
        role: "role-original-dev-maitainer"
    },
    {
        name: "rusty-craft",
        id: "rusty-craft",
        desc: "Lanceur pour le jeu Minecraft, écrit complètement en Rust, avec interface utilisateur dans\
        le terminal.",
        techs: ["Rust"],
        images: {
            original: rustyCraftImg,
            avif: rustyCraftAvif,
            jxl: rustyCraftJxl
        },
        link: "https://github.com/arthurbambou/rusty-craft",
        dates: {
            start: 2021,
            end: 2021
        },
        role: "role-main-dev"
    },
    {
        name: "Legacy Fabric",
        id: "legacy-fabric",
        desc: "Projet visant à faire fonctionner le ModLoader FabricLoader sur des versions du jeu\
        Minecraft non supportées par celui-ci.",
        techs: ["Java", "Python", "Gradle", "Groovy", "Javalin", "Swing"],
        images: {
            original: legacyFabricImg,
            avif: legacyFabricAvif,
            jxl: legacyFabricJxl
        },
        link: "https://github.com/Legacy-Fabric/",
        dates: {
            start: 2021,
            end: -1
        },
        role: "role-contributor-dev-maintainer"
    },
    {
        name: "Nucleoid",
        id: "nucleoid",
        desc: "API et Serveur Open Sources pour créer des mini-jeux pour les versions les plus récentes de Minecraft.",
        techs: ["Java", "Rust"],
        images: {
            original: nucleoidImg,
            avif: nucleoidAvif,
            jxl: nucleoidJxl
        },
        link: "https://github.com/NucleoidMC",
        dates: {
            start: 2021,
            end: -1
        },
        role: "role-contributor-dev"
    },
    {
        name: "MultiTeamLauncher",
        id: "multiteam-launcher",
        desc: "À écrire...",
        techs: ["HTML/CSS", "JavaScript", "TypeScript", "ElectronJS", "VueJS"],
        images: {
            original: multiteamImg,
            avif: multiteamAvif,
            jxl: multiteamJxl
        },
        link: "https://github.com/Laz-The-Artist/MultiTeamLauncher",
        dates: {
            start: 2020,
            end: 2022
        },
        role: "role-dev"
    },
    {
        name: "GardenArsenal",
        id: "garden-arsenal",
        desc: "À écrire...",
        techs: ["Java"],
        images: {
            original: gardenArsenalImg,
            avif: gardenArsenalAvif,
            jxl: gardenArsenalJxl
        },
        link: "https://github.com/MultiTeamDevGroup/GardenArsenal",
        dates: {
            start: 2021,
            end: -1
        },
        role: "role-contributor-dev"
    }
]

const skillsList = {
    languages: [
        {
            name: "HTML",
            side: "front"
        },
        {
            name: "CSS/SCSS",
            side: "front"
        },
        {
            name: "JavaScript/TypeScript",
            side: "fullstack",
            frameworks: [
                "NodeJS",
                "DenoJS",
                "ElectronJS",
                "VueJS"
            ]
        },
        {
            name: "WordPress",
            side: "front",
            frameworks: [
                "Divi"
            ]
        },
        {
            name: "Rust",
            side: "back"
        },
        {
            name: "Python",
            side: "back"
        },
        {
            name: "Java",
            side: "fullstack",
            frameworks: [
                "Gradle",
                "Maven",
                "ASM",
                "Minecraft Modding",
                "Mixin",
                "FabricLoader",
                "ForgeModLoader",
                "Javalin",
                "Swing",
            ]
        }
    ],
    tools: [
        "Visual Studio Code",
        "IntelliJ IDEA",
        "Git",
        "Github et Github Actions (CI/CD)",
        "Pack Office"
    ],
    operatingSystems: {
        used: {
            "Windows": [
                "XP",
                "Vista",
                "7",
                "10"
            ],
            "MacOSX": [
                "Lion (10.7)",
                "Mountain Lion (10.8)",
                "Mavericks (10.9)",
                "Yosemite (10.10)",
                "El Capitan (10.11)"
            ],
            "Pop_Os! (Linux)": [
                "20.04",
                "20.10",
                "21.04",
                "21.10",
                "22.04"
            ]
        },
        using: {
            "Windows": ["10"],
            "Pop_Os! (Linux)": ["22.04"]
        },
        main: "Pop_Os! 22.04 (Linux)"
    }
}

export const data = defineStore("data", {
    state: (): Data => {
        return {
            projects: projectsList,
            skills: skillsList
        }
    }
})

export interface Data {
    projects: ProjectData[],
    skills: Skills
}

export interface Skills {
    languages: LanguageSkill[]
    tools: string[],
    operatingSystems: OsSkills
}

export interface LanguageSkill {
    name: string,
    side: string,
    frameworks?: string[]
}

export interface OsSkills {
    main: string,
    used: Record<string, string[]>,
    using: Record<string, string[]>
}

export interface ProjectData {
    name: string,
    id: string,
    techs: string[],
    desc: string,
    images: {
        original: string,
        avif: string,
        jxl: string
    },
    link: string,
    dates: {
        start: number,
        end: number
    },
    role: string
}