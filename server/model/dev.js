const getAge = (birthDate) => {
    return Math.floor((new Date() - new Date(birthDate).getTime()) / 31557600000)
}

const DEFAULT_TECHNOLOGY_BG = "black"
const DEFAULT_TECHNOLOGY_FG = "white"

const developer = {
    name: "Shivam Gupta",
    gender: "Male",
    age: getAge('1998-07-08'),
    mail: "shivambmgupta@gmail.com",
    about: {
        title: "About the Developer",
        body: "Curious Computer Science & Technologies Student, currently, in 7th semester working in React-Native. Full Stack Developer. Web, Mobile Application, Software Developer. Studying about Design Patterns, and Functional Programming. Have advance proficiency in Java, intermediate in Python, C++, C, NodeJS, React, React-Native, SpringBoot, Hibernate."
    },
    aboutProject: {
        title: "About this Application",
        body: "In this application you can manage (add/update/delete) your thought of the day, notes, quotes, favorite lyrics, basically whatever you want."
    },
    technologies: [
        {
            title: "Java",
            background: DEFAULT_TECHNOLOGY_BG,
            foreground: DEFAULT_TECHNOLOGY_FG
        },
        {
            title: "C++",
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
        },
        {
            title: "Angular9",
            background: DEFAULT_TECHNOLOGY_BG,
            foreground: DEFAULT_TECHNOLOGY_FG
        },
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
        }
    ],    
}

export default developer;