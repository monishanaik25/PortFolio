import Image from "next/image";
import { FaLaptopCode, FaReact } from "react-icons/fa";
// import { FcOrganization } from "react-icons/fc";
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql, SiPhp, SiTypescript } from "react-icons/si";

export default function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fade-in">
      {/* Image Section */}
      <div className="flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden shadow-xl border border-gray-200">
          <Image
            src="/PortFolio.png"
            alt="Monisha Naik"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>


      {/* Text Section */}
      <div className="space-y-5 text-gray-800">
        <h2 className="text-3xl font-bold text-black">About Me</h2>

        <p className="text-lg leading-relaxed">
          Hey! I'm a <strong>Frontend Developer
            <FaLaptopCode className="inline ml-2 text-orange-600 text-4xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] hover:drop-shadow-[3px_3px_3px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out" />
          </strong> passionate about creating sleek, scalable, and high-performing web applications that deliver great user experiences.
        </p>

        <p className="text-lg leading-relaxed">
          During my internship at <strong>Technotym Solutions</strong>, I worked on real-world projects, collaborating with design and backend teams to build responsive, user-friendly interfaces.
        </p>

        <p className="text-lg leading-relaxed">
          I specialize in modern frontend technologies like
          <span className="ml-2 text-blue-600 font-semibold">
            <FaReact className="inline text-3xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] hover:drop-shadow-[3px_3px_3px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out" /> React
          </span>,
          <span className="ml-2 text-black font-semibold">
            <RiNextjsFill className="inline text-3xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] hover:drop-shadow-[3px_3px_3px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out" /> Next.js
          </span>, and
          <span className="ml-2 text-purple-600 font-semibold">
            <SiTypescript className="inline text-3xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] hover:drop-shadow-[3px_3px_3px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out" /> TypeScript
          </span>.
          <br />
          I also have knowledge of backend technologies like
          <span className="ml-2 text-indigo-600 font-semibold">
            <SiPhp className="inline text-3xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] hover:drop-shadow-[3px_3px_3px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out" /> PHP
          </span> and
          <span className="ml-2 text-teal-600 font-semibold">
            <SiMysql className="inline text-3xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] hover:drop-shadow-[3px_3px_3px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out" /> MySQL
          </span>.
          I write clean, maintainable code by following <strong>SOLID</strong>, <strong>DRY</strong>, and <strong>KISS</strong> principles.
        </p>

        <p className="text-lg leading-relaxed">
          I’m always learning and evolving, and I enjoy transforming ideas into intuitive, accessible digital experiences. Whether it's building pixel-perfect UIs or integrating APIs, I care deeply about performance and usability.
        </p>
      </div>




    </section>
  );
}
