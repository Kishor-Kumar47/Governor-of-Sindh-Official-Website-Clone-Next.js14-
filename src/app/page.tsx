import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
   <div>
    <nav>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Footer />
      </div>
    </nav>
   </div>
  );
}
