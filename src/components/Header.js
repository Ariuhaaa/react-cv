export default function Header({ tit, user }) {
  return (
    <div>
      <h1>{tit.welcome}</h1>
      <h3>{tit.title}</h3>
      <h3>{tit.subtitle}</h3>
      <p>
        {user.firstname}
        {user.lastname}
      </p>
    </div>
  );
}
