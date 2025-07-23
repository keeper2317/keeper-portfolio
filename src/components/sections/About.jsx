import { RevealOnScroll } from "../RevealOnScroll";
// Frontend Icons
import { FaReact, FaVuejs, FaAngular, FaHtml5, FaCss3Alt, FaSass, FaJs } from "react-icons/fa";
// Backend Icons
import { FaPhp, FaPython, FaNodeJs, FaDatabase } from "react-icons/fa";
// Other Icons
import { 
  SiTailwindcss, 
  SiBootstrap, 
  SiJquery, 
  SiLaravel, 
  SiDjango, 
  SiMysql, 
  SiPostgresql 
} from "react-icons/si";

export const About = () => {

    const frontendSkills = [
        { name: 'React', icon: <FaReact className="inline mr-1" /> },
        { name: 'Vue', icon: <FaVuejs className="inline mr-1" /> },
        { name: 'Angular', icon: <FaAngular className="inline mr-1" /> },
        { name: 'Tailwindcss', icon: <SiTailwindcss className="inline mr-1" /> },
        { name: 'Bootstrap', icon: <SiBootstrap className="inline mr-1" /> },
        { name: 'HTML', icon: <FaHtml5 className="inline mr-1" /> },
        { name: 'CSS', icon: <FaCss3Alt className="inline mr-1" /> },
        { name: 'Sass', icon: <FaSass className="inline mr-1" /> },
        { name: 'JavaScript', icon: <FaJs className="inline mr-1" /> },
        { name: 'jQuery', icon: <SiJquery className="inline mr-1" /> }
    ];

    const backendSkills = [
        { name: 'PHP', icon: <FaPhp className="inline mr-1" /> },
        { name: 'Laravel', icon: <SiLaravel className="inline mr-1" /> },
        { name: 'Python', icon: <FaPython className="inline mr-1" /> },
        { name: 'Django', icon: <SiDjango className="inline mr-1" /> },
        { name: 'Node.js', icon: <FaNodeJs className="inline mr-1" /> },
        { name: 'SQL', icon: <FaDatabase className="inline mr-1" /> },
        { name: 'MySQL', icon: <SiMysql className="inline mr-1" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="inline mr-1" /> }
    ];

    return (
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        About Me
                    </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                        I am a passionate developer with experience in building scalable web 
                        applications and creating innovative solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                        "
                                    >
                                        {tech.icon}
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                        "
                                    >
                                        {tech.icon}
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 🎓 Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Bachelor of Science in Information Technology</strong> - Polytechnic University of the Philippines, 
                                Quezon City Campus (2021 - Present)
                            </li>
                            <li>
                                Relevant Course Work: Web Development, Database Management, Software Engineering, RESTful API Development, 
                                CI/CD Integration
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold"> 
                                    {" "}
                                    Full-Stack Developer & Intern at Software Research Group – PUPQC (Oct 2024 – Present)
                                    {" "}
                                </h4>
                                <p> 
                                    Joined in October 2024 and also served as an intern starting February 2025. 
                                    Developed backend APIs, managed database structures for data consistency, 
                                    and designed responsive frontend layouts within Agile sprints.
                                </p>
                            </div>

                            {/* <div>
                                <h4 className="font-semibold"> 
                                    {" "}
                                    Backend Developer / DevOps for Capstone Project – SYNCORE Patient Management System (Aug 2024 – Feb 2025)
                                    {" "}
                                </h4>
                                <p> 
                                    Developed RESTful APIs using PHP Laravel, configured CI/CD pipelines with GitHub Actions, and ensured system scalability and security.
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};