import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import LatestNews from "./LatestNews";
import LeftNavbar from "./Layout-component/LeftNavbar";
import MainSection from "./Layout-component/MainSection";
import RightNavbar from "./Layout-component/RightNavbar";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
      </header>
      <section className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
      </section>
      <nav className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid grid-cols-12">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">
          <MainSection></MainSection>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
