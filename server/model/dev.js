const getAge = (birthDate) => (
    Math.floor((new Date() - new Date(birthDate).getTime()) / 31557600000)
);

const DEFAULT_TECHNOLOGY_BG = "black";
const DEFAULT_TECHNOLOGY_FG = "white";

const developer = {
    name: "Shivam Gupta",
    gender: "Male",
    age: getAge('1998-07-08'),
    mail: "shivambmgupta@gmail.com",
    about: {
        title: "About the Developer",
        body: "I'm a curious developer who is an enthusiast of Technologies, Programming, the Universe and Physics. I read widely. Love studying Design Patterns. Develops in Javascript (sometimes in Java) but would love to write code in C/C++. I'm always inspired by Ryan Dahl, Guillermo Rauch, Ben Noordhuis. Professionally, I'm a Software Engineer at Signzy."
    },
    aboutProject: {
        title: "About this Application",
        body: "In this application you can manage (add/update/delete) your thought of the day, notes, quotes, favorite lyrics, basically whatever you want."
    },
    technologies: [
        {
            title: "Javascript",
            background: DEFAULT_TECHNOLOGY_BG,
            foreground: DEFAULT_TECHNOLOGY_FG
        },
        {
            title: "NodeJS",
            background: DEFAULT_TECHNOLOGY_BG,
            foreground: DEFAULT_TECHNOLOGY_FG
        },
        {
            title: "C++",
            background: DEFAULT_TECHNOLOGY_BG,
            foreground: DEFAULT_TECHNOLOGY_FG
        },
        {
            title: "Java",
            background: DEFAULT_TECHNOLOGY_BG,
            foreground: DEFAULT_TECHNOLOGY_FG
        },
        {
            title: "C",
            background: DEFAULT_TECHNOLOGY_BG,
            foreground: DEFAULT_TECHNOLOGY_FG
        },
        {
            title: "Python",
            background: DEFAULT_TECHNOLOGY_BG,
            foreground: DEFAULT_TECHNOLOGY_FG
        },
        {
            title: "Desing Patterns",
            background: DEFAULT_TECHNOLOGY_BG,
            foreground: DEFAULT_TECHNOLOGY_FG
        },
        {
            title: "React/React Native",
            background: DEFAULT_TECHNOLOGY_BG,
            foreground: DEFAULT_TECHNOLOGY_FG
        },
        {
            title: "MERN",
            background: DEFAULT_TECHNOLOGY_BG,
            foreground: DEFAULT_TECHNOLOGY_FG
        }
    ],
    contact: "+91 8770496870",
    social_media: [
        {
            title: "Facebook",
            link:  "https://www.facebook.com/shivambmgupta",
            color: "#3b5998",
            icon: "facebook"
        },
        {
            title: "Twitter",
            link: "https://www.twitter.com/shivambmgupta",
            color: "#00acee",
            icon: "twitter"
        },
        {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/shivambmgupta",
            color: '#0e76a8',
            icon: "linkedin"
        },
        {
            title: "Github",
            link: "https://www.github.com/shivambmgupta",
            color: "black",
            icon:  "github"
        },
        {
            title: "Website",
            link: "https://shivambmgupta.netlify.app/",
            color: "black",
            icon:  "web"
        }
    ],    
};

export default developer;
