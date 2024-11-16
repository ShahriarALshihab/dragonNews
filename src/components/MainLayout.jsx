
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import LatestNews from "./LatestNews";

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
              <aside className="left col-span-3">left side</aside>  
              <section className="col-span-6">main content</section>
              <aside className="col-span-3">right side</aside>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
