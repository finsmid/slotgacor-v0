import "../styles/SlotBox.css";

export default function SlotBox({ values }) {
  const isGacor = (values[0] === values[1]) & (values[0] === values[2]);

  return (
    <section>
      <h2>
        {values[0]} {values[1]} {values[2]}
      </h2>
      <h3 style={{ color: isGacor ? "green" : "red" }}>
        {isGacor ? "GACORR!!" : "gas ulang!"}
      </h3>
      {isGacor && <h4>mantul</h4>}
    </section>
  );
}
