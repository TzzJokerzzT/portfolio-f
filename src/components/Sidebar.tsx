import style from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside>
      <section className={style.sidebar_container}>
        <a href="https://github.com/TzzJokerzzT" target="_blank">
          <img src="github_Icon.svg" alt="Github Logo" />
        </a>
        <a href="https://www.instagram.com/alex_buelvas/" target="_blank">
          <img src="instagram_Icon.svg" alt="Instagram Logo" />
        </a>
        <a href="https://twitter.com/Alex_Buelvas92" target="_blank">
          <img src="twitter_Icon.svg" alt="Twitter Logo" />
        </a>
        <a href="https://www.linkedin.com/in/alexis-buelvas/" target="_blank">
          <img src="linkedIn_Icon.svg" alt="LinkedIn Logo" />
        </a>
      </section>
    </aside>
  );
}

export default Sidebar;
