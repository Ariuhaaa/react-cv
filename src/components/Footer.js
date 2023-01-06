export default function Footer({ date }) {
  return (
    <footer>
      <p>Copyright {date.getFullYear()}</p>
    </footer>
  );
}
