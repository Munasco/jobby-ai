import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Job App Helper</h1>
      <p>Improve your resume and apply to jobs with AI</p>
      <nav>
        <Link href="/improve-resume">
          <a>Improve Resume</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </nav>
    </div>
  );
}
