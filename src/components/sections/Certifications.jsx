import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

export const Certifications = () => {
    const certificates = [
        {
            title: "Fortinet Certified Fundamentals in Cybersecurity",
            credentialId: "7256505831KF",
            credentialUrl: "https://training.fortinet.com/admin/tool/certificate/index.php?code=7256505831KF",
            issuer: "Fortinet",
            date: "June 2024"
        },
        {
            title: "C# Intermediate",
            credentialId: "CC-Y2DN5NNU",
            credentialUrl: "https://www.sololearn.com/certificates/CC-F7ELHWRB",
            issuer: "SoloLearn",
            date: "June 2024"
        },
        {
            title: "mabl Skills Certification Advanced",
            credentialId: "",
            credentialUrl: "http://verify.skilljar.com/c/gp5gvb7rf9i9",
            issuer: "mabl",
            date: "June 2024"
        },
        {
            title: "mabl Skills Certification Foundation",
            credentialId: "",
            credentialUrl: "https://verify.skilljar.com/c/w6t3x9nvffvd?fbclid=IwZXh0bgNhZW0CMTAAAR0K358ABqdxH4Bq70eIyB39bLyZicUxXkZGii7XBFCb3ekgbxXYlcQNfs8_aem_AUZLLaXaejVFdgy1Gi9Ogt1LAX1ivqIy4ewtk7DPh6HEKF12o0nwjHKDtoG65KfLcgdIniaDT77M42e4F2nvgCb_",
            issuer: "mabl",
            date: "June 2024"
        },
        {
            title: "Introduction to C#",
            credentialId: "CC-F7ELHWRB",
            credentialUrl: "https://www.sololearn.com/en/certificates/CT-NROQNQBV",
            issuer: "SoloLearn",
            date: "March 2024"
        },
        {
            title: "Introduction to Python",
            credentialId: "CC-ZYKYDARP",
            credentialUrl: "https://www.sololearn.com/certificates/CC-ZYKYDARP",
            issuer: "SoloLearn",
            date: "March 2024"
        },
        {
            title: "CSS",
            credentialId: "CT-NROQNQBV",
            credentialUrl: "https://www.sololearn.com/certificates/CT-NROQNQBV",
            issuer: "SoloLearn",
            date: "October 2022"
        },
        {
            title: "HTML",
            credentialId: "CT-RRPCXIJK",
            credentialUrl: "https://www.sololearn.com/certificates/CT-RRPCXIJK",
            issuer: "SoloLearn",
            date: "October 2022"
        },
        {
            title: "JavaScript",
            credentialId: "CT-4MHY0EVE",
            credentialUrl: "https://www.sololearn.com/certificates/CT-4MHY0EVE",
            issuer: "SoloLearn",
            date: "October 2022"
        },
        {
            title: "SQL",
            credentialId: "CT-XDYLGXFC",
            credentialUrl: "https://www.sololearn.com/certificates/CT-XDYLGXFC",
            issuer: "SoloLearn",
            date: "October 2022"
        },
        {
            title: "jQuery",
            credentialId: "CT-1K7M0CSX",
            credentialUrl: "https://www.sololearn.com/certificates/CT-1K7M0CSX",
            issuer: "SoloLearn",
            date: "October 2022"
        },
        {
            title: "PHP",
            credentialId: "CT-VJOMLWD8",
            credentialUrl: "https://www.sololearn.com/certificates/CT-VJOMLWD8",
            issuer: "SoloLearn",
            date: "September 2022"
        },
        {
            title: "Web Development Fundamentals",
            credentialId: "CT-0FA6DAGG",
            credentialUrl: "https://www.sololearn.com/certificates/CT-0FA6DAGG",
            issuer: "SoloLearn",
            date: "September 2022"
        },
        {
            title: "Analyze Data with Python",
            credentialId: "5e818a89-d170-46c2-8f57-c8ba4293767a",
            credentialUrl: "https://courses.buri.io/view/user/certificate/5e818a89-d170-46c2-8f57-c8ba4293767a/pdf",
            issuer: "Department of Information and Communications Technology - Philippines",
            date: "September 2022"
        },
        {
            title: "Build Python Web Apps with Flask",
            credentialId: "b21d907b-31c3-44fc-a5b8-a6117bbf7d8e",
            credentialUrl: "https://courses.buri.io/view/user/certificate/b21d907b-31c3-44fc-a5b8-a6117bbf7d8e/pdf",
            issuer: "Department of Information and Communications Technology - Philippines",
            date: "September 2022"
        },
        {
            title: "Visualize Data with Python",
            credentialId: "d6a7944b-167a-4f80-a89d-e80be9855513",
            credentialUrl: "https://courses.buri.io/view/user/certificate/d6a7944b-167a-4f80-a89d-e80be9855513/pdf",
            issuer: "Department of Information and Communications Technology - Philippines",
            date: "September 2022"
        },
        {
            title: "Learn Basic Statistics with Python",
            credentialId: "2258a30a-2334-474e-98c2-1944ac9fb132",
            credentialUrl: "https://courses.buri.io/view/user/certificate/2258a30a-2334-474e-98c2-1944ac9fb132/pdf",
            issuer: "Department of Information and Communications Technology - Philippines",
            date: "August 2022"
        },
        {
            title: "Learn Basic Statistics with Python",
            credentialId: "2258a30a-2334-474e-98c2-1944ac9fb132",
            credentialUrl: "https://courses.buri.io/view/user/certificate/2258a30a-2334-474e-98c2-1944ac9fb132/pdf",
            issuer: "Department of Information and Communications Technology - Philippines",
            date: "August 2022"
        },
        {
            title: "Programming for Beginners Using Python",
            credentialId: "8bfa17ef-600f-415b-b83c-3aeaf8192a43",
            credentialUrl: "https://courses.buri.io/view/user/certificate/8bfa17ef-600f-415b-b83c-3aeaf8192a43/pdf",
            issuer: "Department of Information and Communications Technology - Philippines",
            date: "August 2022"
        },
        {
            title: "Programming for Intermediate Users Using Python",
            credentialId: "9c836371-729b-4400-9ad9-2e6e2621664c",
            credentialUrl: "https://courses.buri.io/view/user/certificate/9c836371-729b-4400-9ad9-2e6e2621664c/pdf",
            issuer: "Department of Information and Communications Technology - Philippines",
            date: "August 2022"
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const certsPerPage = 4;
    const totalPages = Math.ceil(certificates.length / certsPerPage);

    const currentCerts = certificates.slice(
        (currentPage - 1) * certsPerPage,
        currentPage * certsPerPage
    );

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const goToNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const goToPrev = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    return (
        <section id="certifications" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Certifications
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {currentCerts.map((cert, index) => (
                            <div 
                                key={index}
                                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                                <div className="text-gray-400 mb-4 space-y-2">
                                    <p className="flex items-center">
                                        <span className="text-white/70 mr-2">Issuer:</span> 
                                        {cert.issuer}
                                    </p>
                                    {cert.credentialId && (
                                        <p className="flex items-center">
                                            <span className="text-white/70 mr-2">Credential ID:</span> 
                                            {cert.credentialId}
                                        </p>
                                    )}
                                    <p className="flex items-center">
                                        <span className="text-white/70 mr-2">Date Earned:</span> 
                                        {cert.date}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <a 
                                        href={cert.credentialUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 transition-colors my-4 inline-flex items-center"
                                    >
                                        Show Credential →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-center items-center gap-4 mt-8">
                        <button
                            onClick={goToPrev}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'}`}
                        >
                            Previous
                        </button>
                        
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => goToPage(page)}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'}`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                        
                        <button
                            onClick={goToNext}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'}`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};