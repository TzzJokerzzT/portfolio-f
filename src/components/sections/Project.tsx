import style from "./Project.module.css";
import data from "@services/proyects";

const Project = () => {
  return (
    <section className={style.project}>
      <div>
        <h1>PROJECTS</h1>
      </div>
      {data.map((items) => (
        <div className={style.card} key={items.id}>
          <img src={items.image} alt={items.name} className={style.card_img} />
          <div className={style.card_content}>
            <h2 className={style.card_title}>{items.name}</h2>
            <p className={style.card_text}>{items.technologies}</p>
            <a href={items.link} className={style.card_link} target="_blank">
              Link
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Project;
