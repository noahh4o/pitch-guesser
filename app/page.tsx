import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <h2>Pitch Guesser</h2>
        <a href="/">Home</a>
      </nav>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Baseball Pitch Guesser</h1>
          <p>
            Predict the next pitch. Test your baseball knowledge.
          </p>
        </div>
      </main>
    </div>
  );
}