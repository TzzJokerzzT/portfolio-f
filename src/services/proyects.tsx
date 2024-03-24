interface ProjectData {
  id: number;
  name: string;
  link: string;
  image: string;
  technologies: string[];
}

const data: ProjectData[] = [
  {
    id: 1,
    name: "Rick and Morty Wiki",
    link: "https://rick-and-morty-wi.netlify.app",
    image: "/img/rickandmorty.png",
    technologies: ["React, Bootstrap"],
  },
  {
    id: 2,
    name: "Bankist App",
    link: "https://bankist-appl.netlify.app",
    image: "/img/bankist.png",
    technologies: ["Javascript, HTML, CSS"],
  },
  {
    id: 3,
    name: "Chuck Norris Phrases",
    link: "https://chucknorris-app.netlify.app",
    image: "/img/chuck-norris.png",
    technologies: ["React, CSS"],
  },
  {
    id: 4,
    name: "Guess my Number App",
    link: "https://guess-my-name.netlify.app",
    image: "/img/guess-my-number.png",
    technologies: ["Javascript, HTML, CSS"],
  },
  {
    id: 5,
    name: "Pig game",
    link: "https://pig-game-appl.netlify.app",
    image: "/img/pig-game.png",
    technologies: ["Javascript, HTML, CSS"],
  },
  {
    id: 6,
    name: "ToDo APP",
    link: "https://todo-apps-react.netlify.app",
    image: "/img/ToDo.png",
    technologies: ["React, CSS"],
  },
  {
    id: 7,
    name: "Brooklyn Fast Food Restaurant",
    link: "https://brooklyn-fast-food.netlify.app",
    image: "/img/brooklyn.png",
    technologies: ["React, Tailwind, NextUI"],
  },
];

export default data;
