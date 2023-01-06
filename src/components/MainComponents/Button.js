export default function Button({ txt, text }) {
  return (
    <div>
      <button className="btn">{txt}</button>
      <button className="btn">{text}</button>
    </div>
  );
}
