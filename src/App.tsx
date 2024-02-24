import Introduction from "@components/sections/Introduction";
import Main_Content from "@components/Main_Content";
import Sidebar from "@components/Sidebar";
import Footer from "@components/Footer";
import Techs from "@components/sections/Techs";
import Project from "@components/sections/Project";

function App() {
  return (
    <>
      <Introduction />
      <Main_Content>
        <Techs />
        <Project />
      </Main_Content>
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
