// components/FarewellMessage.jsx
export default function FarewellMessage({
  isFareWell,
  fareWellColor,
  fareWellMsg,
}) {
  if (!isFareWell) return null;

  return (
    <section
      className="fareWell-status"
      style={{ backgroundColor: fareWellColor }}
    >
      <p>{fareWellMsg}</p>
    </section>
  );
}
