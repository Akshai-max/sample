import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to Eco-Friendly Living 🌱</h1>
        <p>
          Discover tips, take pledges, and learn how you can make a positive impact on the environment. Start your journey to a greener lifestyle!
        </p>
      </main>
    </div>
  );
}
