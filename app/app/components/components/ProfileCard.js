import Image from "next/image";

export default function ProfileCard() {
  return (
    <div style={styles.card}>
      <div style={styles.photo}>
        <Image
          src="/profile.jpg"
          alt="Founder"
          width={140}
          height={140}
          style={{ borderRadius: "50%" }}
        />
      </div>

      <h2>Santanu Konwar</h2>
      <p style={styles.role}>Founder & Product Builder</p>
      <span style={styles.meta}>HamaraMarket • India</span>
    </div>
  );
}

const styles = {
  card: {
    background: "#111827",
    border: "1px solid #1f2937",
    padding: "32px",
    borderRadius: "18px",
    textAlign: "center"
  },
  photo: {
    marginBottom: "16px"
  },
  role: {
    color: "#9ca3af",
    marginTop: "6px"
  },
  meta: {
    fontSize: "13px",
    color: "#cbd5f5"
  }
};
