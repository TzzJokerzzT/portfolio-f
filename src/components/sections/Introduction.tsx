import styles from "./Introduction.module.css";

function Introduction() {
  return (
    <header className={styles.header}>
      <div>
        <span>Hi, my name is</span>
        <h1>Alexis Buelvas Madera</h1>
        <h2>I build experiences for the web.</h2>
        <p>
          I'm Frontend developer specializing in building exceptional digital
          experiences.
        </p>
      </div>
      {/* <div className={styles.img_profile}>
        <img src="/img/profile_photo.jpg" alt="Profile Photo" />
      </div> */}
    </header>
  );
}

export default Introduction;
