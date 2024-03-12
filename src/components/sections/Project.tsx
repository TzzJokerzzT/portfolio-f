import style from "./Project.module.css";

const datos = [
  {
    id: 1,
    name: "Rick and Morty Wiki",
    link: "https://rick-and-morty-wi.netlify.app",
    image: "",
  },
  {
    id: 2,
    name: "ToDo App",
    link: "https://todo-apps-react.netlify.appp",
    image: "",
  },
  {
    id: 2,
    name: "ToDo App",
    link: "https://todo-apps-react.netlify.appp",
    image: "",
  },
];

const Project = () => {
  return (
    <section className={style.project}>
      <div>
        <h1>My personal projects</h1>
      </div>
      <div className={style.card}>
        <img
          src="/img/Fiora_Portrait.jpg"
          alt="Project Image"
          className={style.card_img}
        />
        <div className={style.card_content}>
          <h2 className={style.card_title}>Card Title</h2>
          <p className={style.card_text}>Content</p>
          <a href="#" className={style.card_link}>
            Enlace
          </a>
        </div>
        {/* <li>Rick & Morty App</li>
        <li>Weather App</li>
        <li>Bankist</li>
        <li>Guess the Number</li>
        <li>Chuck Norris Phrases</li> */}
      </div>
    </section>
  );
};

export default Project;
