import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Portfolio from "./components/Portfolio";
import Contact_Me from "./components/Contact_Me";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <Header />
      <main>
        <Introduce />
        <Portfolio />
        <Contact_Me />
      </main>
      <Footer />
    </div>
  );
}

export default App;
