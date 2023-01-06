import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const data = {
    tit: {
      welcome: "Welcome to component and props corner",
      title: "React",
      subtitle: "Javascript Library",
    },
    welcome: "Welcome to component and props corner",
    title: "React",
    subtitle: "Javascript Library",
    user: {
      firstname: "John",
      lastname: "Sedrick",
    },
    techskill: ["HTML", "JS", "CSS", "React"],
    date: new Date(),

    text: "Greet people",
    text1: "Show Date",
  };

  return (
    <div className="container">
      <Header {...data} />
      <Main
        user={data.user}
        techskill={data.techskill}
        text={data.text}
        text1={data.text1}
        date={data.date}
      />
      <Footer date={data.date} />
    </div>
  );
}

export default App;
