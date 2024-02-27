import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <section className={styles.navbar}>
      <ol>
        <li>About</li>
        <li>Technologies</li>
        <li>Project</li>
        <li>Contact</li>
      </ol>
    </section>
  );
};

export default Navbar;
