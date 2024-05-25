import dev from "../assets/dev.svg"
import backend from "../assets/backend.svg";
import plus from "../assets/add-plus-icon.svg"

const SkillsSection = () => {
  return (
    <section
      id="#about"
      className="container-lg flex flex-col gap-y-8 w-full py-12 px-6 bg-blue-800 bg-fixed"
      style={{ backgroundImage: 'linear-gradient(rgba(23, 37, 84, 0.9), rgba(30, 64, 175, 0.9)), url("src/assets/background-code.jpg")' }}
    >
      <h2 className="text-4xl font-bold mx-auto">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center bg-white text-black rounded-lg divide-y md:divide-x md:divide-y-0">
        <div className="w-full flex flex-col items-center gap-y-6 p-4">
          <img src={dev} alt="" className="h-28" />
          <h3 className="text-lg text-blue-600 font-semibold">Front-End</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Angular</li>
            <li>TailwindCSS</li>
            <li>Bootstrap</li>
            <li>MaterialUI</li>
            <li>Redux</li>
            <li>Redux Toolkit</li>
          </ul>
        </div>
        <div className="w-full flex flex-col items-center gap-y-6 p-4">
          <img src={backend} alt="" className="h-28" />
          <h3 className="text-lg text-blue-600 font-semibold">Back-End</h3>
          <ul>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>NestJS</li>
            <li>.Net Core API</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="w-full flex flex-col items-center gap-y-6 p-4">
          <img src={plus} alt="" className="h-28" />
          <h3 className="text-lg text-blue-600 font-semibold">Other Skills</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Figma</li>
            <li>AdobeXd</li>
            <li>Inkscape</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
