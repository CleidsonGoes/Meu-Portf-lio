import Footer from './components/Footer';
import Header from './components/Header';
import { About } from './components/Sections/About';
import { Contact } from './components/Sections/Contact';
import { Experience } from './components/Sections/Experience';
import { ProjectList } from './components/Sections/Projects';

function App() {
  return (
    <>
      <Header />
      <About />
      <ProjectList />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
