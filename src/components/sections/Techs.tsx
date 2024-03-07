import style from "./Techs.module.css";
const Techs = () => {
  return (
    <section className={style.techs}>
      <div className={style.tech_tittle}>
        <h1>Technologies</h1>
      </div>
      <section>
        <h2>Languages:</h2>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </section>
      <section>
        <h2>Frameworks:</h2>
        <li>Astro</li>
        <li>React</li>
        <li>Next.js</li>
        <li>TailwindCSS</li>
      </section>
      <section>
        <h2>Dev Tools:</h2>
        <li>Git</li>
        <li>Bootsrap</li>
        <li>Next UI</li>
        <li>Netlify</li>
        <li>Typescript</li>
        <li>Mamba UI</li>
        <li>Vite</li>
      </section>
    </section>
  );
};

export default Techs;
