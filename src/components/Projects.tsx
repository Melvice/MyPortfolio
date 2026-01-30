// import { ExternalLink, Github } from "lucide-react";
import robot from "../assets/robot.jpg";
import esmart from "../assets/esmartcontrol.jpg";
import stingray from "../assets/stingray.png";
import vq from "../assets/VQ.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Find 7 Differences Game",
      description:
        "A full-stack web application featuring real-time multiplayer gameplay where users compete to find differences between images.",
      problem:
        "Creating an engaging multiplayer game with real-time synchronization and responsive UI across devices.",
      tech: ["Angular", "TypeScript", "NestJS", "MongoDB", "Socket.IO"],
      learned:
        "Built and maintained WebSocket connections for real-time gameplay. Designed responsive UI with Figma improving development speed. Developed comprehensive unit tests with Jest achieving 100% coverage.",
      github: "https://github.com/melvice",
      demo: null,
      image: vq,
    },
    {
      title: "Android Driver Alert Application",
      description:
        "Mobile application providing truck drivers with voice and visual alerts for road events, improving driver safety and awareness.",
      problem:
        "Truck drivers need real-time road event notifications without constantly checking their phones while driving.",
      tech: ["Java", "AWS AppSync", "AWS Cognito", "Datadog", "Android SDK"],
      learned:
        "Developed and deployed Android app from scratch. Integrated application monitoring with Datadog. Optimized authentication flow reducing AWS Cognito costs by 20% through caching and retry logic.",
      github: "https://github.com/melvice",
      demo: null,
      image: esmart,
    },
    {
      title: "SaaS Platform at Stingray",
      description:
        "Contributed to a scalable and performant enterprise SaaS application with modern tech stack and cloud infrastructure.",
      problem:
        "Building scalable features for a production SaaS platform serving multiple clients with high performance requirements.",
      tech: [
        "Ruby on Rails",
        "React",
        "Redux",
        "jQuery",
        "Python",
        "PostgreSQL",
        "AWS",
      ],
      learned:
        "Worked with senior developers on feature design, planning, and prioritization. Gained experience with enterprise-level architecture patterns and cloud infrastructure best practices.",
      github: null,
      demo: null,
      image: stingray,
    },
    {
      title: "Robotics Competition Software",
      description:
        "Developed embedded software for competitive robots participating in RoboMaster competitions at Seattle and Colorado.",
      problem:
        "Creating high-performance robot control software with reliable testing procedures for competition environments.",
      tech: ["C++", "Embedded Systems", "Testing", "Team Collaboration"],
      learned:
        "Implemented robot functionalities in C++ improving competition performance. Performed comprehensive software tests enabling team to pass verification. Collaborated across teams for robot construction and testing.",
      github: "https://github.com/melvice",
      demo: null,
      image: robot,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world applications showcasing problem-solving skills and
            technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-blue-600 dark:text-teal-400">
                    Problem:
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.problem}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-blue-600 dark:text-teal-400">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-300 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-blue-600 dark:text-teal-400">
                    What I Learned:
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.learned}
                  </p>
                </div>

                {/* Links */}
                {/* <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
