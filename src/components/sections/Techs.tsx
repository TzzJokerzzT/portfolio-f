import style from "./Techs.module.css";
const Techs = () => {
  return (
    <section className={style.techs}>
      <div className={style.tech_tittle}>
        <h1>TECHNOLOGIES</h1>
      </div>
      <section>
        <h2>LENGUAGES:</h2>
        <div>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
        </div>
      </section>
      <section>
        <h2>FRAMEWORKS:</h2>
        <div>
          <li>Astro</li>
          <li>React</li>
          <li>Next.js</li>
          <li>TailwindCSS</li>
        </div>
      </section>
      <section>
        <h2>DEVS TOOLS:</h2>
        <div>
          <li>Git</li>
          <li>Bootsrap</li>
          <li>Next UI</li>
          <li>Netlify</li>
          <li>Typescript</li>
          <li>Mamba UI</li>
          <li>Vite</li>
        </div>
      </section>
    </section>
  );
};

export default Techs;
