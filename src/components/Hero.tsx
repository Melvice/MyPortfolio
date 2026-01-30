import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Greeting */}
          <div className="inline-block">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Melvice Guimfack
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Building Clean, Scalable
            </span>
            <br />
            User-Focused Applications
          </h1>

          {/* Value Proposition */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Software Engineering graduate at Polytechnique Montreal passionate
            about crafting real-world solutions with clean code, strong
            performance, and exceptional user experiences.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://github.com/melvice"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-110 transition-all text-gray-700 dark:text-gray-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BwZHBMSkOSvu7TYuaASSO3g%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-110 transition-all text-gray-700 dark:text-gray-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:mguimfack@hotmail.com"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-110 transition-all text-gray-700 dark:text-gray-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => scrollToSection("#projects")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              View Projects
            </button>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "cv.pdf";
                link.download = "Melvice_Guimfack_CV.pdf";
                link.click();
              }}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-teal-600 hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-teal-600 hover:shadow-xl hover:scale-105 transition-all"
            >
              Contact Me
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <button
              onClick={() => scrollToSection("#about")}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
