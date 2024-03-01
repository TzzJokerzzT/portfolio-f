import styles from "./Introduction.module.css";

function Introduction() {
  return (
    <header className={styles.header}>
      <span>Hi, my name is</span>
      <h1>Alexis Buelvas Madera</h1>
      <h2>I build things for the web.</h2>
      <p>
        I'm Frontend developer specializing in building exceptional digital
        experiences.
      </p>
      <img src="" alt="Profile Photo" />
    </header>
  );
}

export default Introduction;
