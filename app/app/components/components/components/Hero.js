import Reveal from "./Reveal";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section style={styles.hero}>
      <Reveal direction="left">
        <ProfileCard />
      </Reveal>

      <Reveal direction="right">
        <div>
          <span style={styles.tag}>Founder of HamaraMarket</span>
          <h1 style={styles.title}>
            Building digital platforms<br />with clarity & purpose
          </h1>
          <p style={styles.text}>
            I’m building HamaraMarket to connect people, skills, and
            opportunities through simple, scalable technology.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    padding: "120px 60px",
    alignItems: "center"
  },
  tag: {
    fontSize: "12px",
    padding: "6px 12px",
    border: "1px solid #1f2937",
    borderRadius: "999px",
    display: "inline-block",
    marginBottom: "16px"
  },
  title: {
    fontSize: "42px",
    marginBottom: "16px"
  },
  text: {
    maxWidth: "520px",
    color: "#cbd5f5"
  }
};
