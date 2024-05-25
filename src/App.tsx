import SkillsSection from "./components/SkillsSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Main from "./components/Main";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
      </Main>
      <Footer />
    </>
  );
}

export default App;
