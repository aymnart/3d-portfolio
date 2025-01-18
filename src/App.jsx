import { Suspense, lazy } from 'react';
import Hr from './components/Hr';
import Lamp from './components/ui/lamp';
const Navbar = lazy(() => import('./sections/Navbar'));
const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const Projects = lazy(() => import('./sections/Projects'));
const Clients = lazy(() => import('./sections/Clients'));
const WorkExperience = lazy(() => import('./sections/Experience'));
const Tape = lazy(() => import('./components/Tape'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

const App = () => {
  return (
    <main className="mx-auto gap-16 flex flex-col relative">
      <Suspense>
        <Navbar />
        <Hero className={'max-w-7xl'} />
        <About className={'max-w-7xl'} />
        <Tape />
        <Projects className={'max-w-7xl'} />
        <Hr />
        <Clients className={'max-w-7xl'} />
        <WorkExperience className={'max-w-7xl'} />
        <Hr />
        <Lamp />
        <Contact className={'max-w-7xl'} />
        <Hr />
        <Footer />
      </Suspense>
    </main>
  );
};

export default App;
