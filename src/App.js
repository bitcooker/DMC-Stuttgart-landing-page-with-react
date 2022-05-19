import Header from "./components/header/Header";
import About from "./components/about/About";
import Profile from "./components/profile/Profile";
import Details from "./components/details/Details";
import Clients from "./components/clients/Clients";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
   <article>
     <Header />
     <About />
     <Profile />
     <Details />
     <Clients />
     <Contact />
     <Footer />
   </article>
  );
}

export default App;
