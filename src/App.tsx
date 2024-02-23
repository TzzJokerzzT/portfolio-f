import Footer from "@components/Footer";
import Header from "@components/Header";
import Main_Content from "@components/Main_Content";
import Sidebar from "@components/Sidebar";

function App() {
  return (
    <>
      <Header />
      {/* <header className="header">Header</header> */}
      <Main_Content />
      {/* <main className="main_content">Content</main> */}
      <Sidebar />
      {/* <aside className="sidebar">Sidebar</aside> */}
      <Footer />
      {/* <footer className="footer">Footer</footer> */}
    </>
  );
}

export default App;
