import TechStack from "./MainComponents/TechStack";
// import Title from "./MainComponents/Title";
import UserCard from "./MainComponents/UserCard";
import Button from "./MainComponents/Button";

function Main(props) {
  console.log(props);

  return (
    <>
      <div className="container">
        <p></p>
        <TechStack kk={props.techskill} />
        {/* <Title /> */}
        <UserCard user={props.user} />
        <Button txt={props.text} text={props.text1} />
      </div>
    </>
  );
}

export default Main;
