import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Spotlight } from '../components/Spotlight.jsx';
import { cn } from '../lib/utils.js';

const projectCount = myProjects.length;

const Projects = ({ className }) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];
  return (
    <section className={cn('c-space mx-auto my-20', className)} id="projects">
      <p className="head-text">My Selected Work</p>

      <div className="grid lg:grid-cols-2  grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 bg-card rounded-xl relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <div className="relative">
              <Spotlight fill="white" className="top-0 left-0" />
            </div>
          </div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-foreground text-2xl font-semibold animatedText">{currentProject.title}</p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p>Check Live Site</p>
              <ArrowUpRight />
            </a>
          </div>

          <div className="flex justify-between  items-center mt-auto">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <ArrowLeft color="white" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <ArrowRight color="white" />
            </button>
          </div>
        </div>

        <div className="border border-border bg-card rounded-xl h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2.2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
