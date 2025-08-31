import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/keeper2317",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/keeperjhoi-floresca-164858313/",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-xl" />,
      url: "https://www.facebook.com/keeper231",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-xl" />,
      url: "mailto:keeperfloresca@gmail.com",
    },
  ];

  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                // target="_blank"
                target={link.name === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-white transition-colors duration-300 mb-4"
          >
            Back to Top ↑
          </button>
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {currentYear} Keeperjhoi L. Floresca. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};