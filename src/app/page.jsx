import styles from "./page.module.css";
import About from "@/pages/About/About";
import Interests from "@/pages/Interests/Interests";
import Contact from "@/pages/Contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <About />
      <Interests />
      <Contact />
    </main>
  );
}
