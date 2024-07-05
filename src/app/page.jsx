import styles from "./page.module.css";
import About from "@/pages/About/About";
import Interests from "@/pages/Interests/Interests";
import Contact from "@/pages/Contact/Contact";
import Header from "@/pages/Header/Header";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <About />
      <Interests />
      <Contact />
    </main>
  );
}
