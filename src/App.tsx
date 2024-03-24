import Navbar from "@components/sections/Navbar";
import Introduction from "@components/sections/Introduction";
import Techs from "@components/sections/Techs";
import Project from "@components/sections/Project";

import Header from "@components/Header";
import Main_Content from "@components/Main_Content";
import Sidebar from "@components/Sidebar";
import Footer from "@components/Footer";
import About from "@components/sections/About";

function App() {
  return (
    <>
      <Header>
        <Navbar />
        <Introduction />
        <Sidebar />
        <About />
      </Header>
      <Main_Content>
        <Techs />
        <Project />
      </Main_Content>
      <Footer />
    </>
  );
}

export default App;
