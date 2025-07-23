import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        { name: 'React', icon: 'react-icon' },
        { name: 'Vue', icon: 'vue-icon' },
        { name: 'Angular', icon: 'angular-icon' },
        { name: 'Tailwindcss', icon: 'tailwind-icon' },
        { name: 'Bootstrap', icon: 'bootstrap-icon' },
        { name: 'HTML', icon: 'html-icon' },
        { name: 'CSS', icon: 'css-icon' },
        { name: 'Sass', icon: 'sass-icon' },
        { name: 'JavaScript', icon: 'javascript-icon' },
        { name: 'jQuery', icon: 'jquery-icon' }
    ];

    const backendSkills = [
        { name: 'PHP', icon: 'php-icon' },
        { name: 'Laravel', icon: 'laravel-icon' },
        { name: 'Python', icon: 'python-icon' },
        { name: 'Django', icon: 'django-icon' },
        { name: 'Node.js', icon: 'nodejs-icon' },
        { name: 'SQL', icon: 'sql-icon' },
        { name: 'MySQL', icon: 'mysql-icon' },
        { name: 'PostgreSQL', icon: 'postgresql-icon' }
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
                                        {/* <i className={`icon-${tech.icon} mr-2`}></i> */}
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                        "
                                    >
                                        {/* <i className={`icon-${tech.icon} mr-2`}></i> */}
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