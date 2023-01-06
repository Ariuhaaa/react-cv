export default function TechStack({ kk }) {
  // console.log(p.techskill);
  return (
    <div>
      <p></p>
      <h3>Teck stack:</h3>
      <ul>
        {kk.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>
    </div>
  );
}
