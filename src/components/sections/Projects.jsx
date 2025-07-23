import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> SYNCORE: Patient Management System </h3>
                            <p className="text-gray-400 mb-4">
                                Developed RESTful APIs for patient records and workflows with PHP Laravel. Configured GitHub Actions for automated CI/CD deployment to Hostinger.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["PHP", "Laravel", "MySQL", "GitHub Actions", "Hostinger"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {/* <i className={`icon-${tech.toLowerCase()} mr-2`}></i> */}
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <a 
                                    href="#" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                > 
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> CORE: Coffee Recommendation System </h3>
                            <p className="text-gray-400 mb-4">
                                Created recommendation logic using cosine similarity algorithm with Node.js backend and MySQL database integration, focusing on personalized coffee suggestions.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Node.js", "MySQL", "JavaScript"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {/* <i className={`icon-${tech.toLowerCase()} mr-2`}></i> */}
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <a 
                                    href="#" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                > 
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Project C.A.P </h3>
                            <p className="text-gray-400 mb-4">
                                Developed backend functionalities and frontend interfaces using Python Django for efficient patient management and record modules.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Python", "Django", "JavaScript"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {/* <i className={`icon-${tech.toLowerCase()} mr-2`}></i> */}
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <a 
                                    href="#" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                > 
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> MHHAI Collections and Disbursements System </h3>
                            <p className="text-gray-400 mb-4">
                                Developed backend APIs and integrated dynamic frontend interfaces using Python Django to ensure accurate database transactions across system components.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Python", "Django", "JavaScript", "MySQL"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {/* <i className={`icon-${tech.toLowerCase()} mr-2`}></i> */}
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <a 
                                    href="#" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                > 
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Collection Report Generating System </h3>
                            <p className="text-gray-400 mb-4">
                                Developed automated report generation features using native PHP and integrated Composer packages for Excel file generation, enabling structured report outputs.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["PHP", "JavaScript", "MySQL"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {/* <i className={`icon-${tech.toLowerCase()} mr-2`}></i> */}
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <a 
                                    href="#" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                > 
                                    View Project →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};