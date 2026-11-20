import { useLenis } from "./hooks/useLenis";
import { TopBar, Header } from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import { Businesses, Connect } from "./sections/Businesses";
import { Marketplace, Categories } from "./sections/Marketplace";
import { ExportSection, Reach, Process } from "./sections/Export";
import { Facts, About, Verify, Leadership, Bridge } from "./sections/Company";
import { Enquiry, Faq } from "./sections/Enquiry";

export default function App() {
  useLenis();
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Businesses />
        <Connect />
        <Marketplace />
        <Categories />
        <ExportSection />
        <Reach />
        <Process />
        <Facts />
        <About />
        <Verify />
        <Leadership />
        <Bridge />
        <Enquiry />
        <Faq />
      </main>
      <Footer />
    </>
  );
}