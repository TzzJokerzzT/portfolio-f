import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <section className={styles.navbar}>
        <li>About</li>
        <li>Technologies</li>
        <li>Project</li>
        <li>Contact</li>
    </section>
  );
};

export default Navbar;
