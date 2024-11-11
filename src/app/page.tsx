import Footer from "@/sections/footer/Footer";
import styles from "./page.module.css";
import OurTeam from "@/sections/ourTeam/OurTeam";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <OurTeam/>

        <Footer/>
      </main>
    </div>
  );
}
