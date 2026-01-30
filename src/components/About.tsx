import { Code, Zap, Users, Target } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, readable code that follows best practices and industry standards.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed, efficiency, and scalability from the ground up.",
    },
    {
      icon: Users,
      title: "User Experience",
      description:
        "Creating intuitive, accessible interfaces that users love to interact with.",
    },
    {
      icon: Target,
      title: "Problem Solving",
      description:
        "Tackling complex challenges with creative, practical, and effective solutions.",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm Melvice, a recent Software Engineering graduate from
              Polytechnique Montréal, passionate about building real-world
              applications that solve meaningful problems. My journey spans
              full-stack web development, mobile applications, and embedded
              systems for competitive robotics.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I have hands-on experience with modern technologies such as React,
              Angular, Java, and an introduction to cloud platforms like AWS
              through academic and personal projects. I enjoy designing clean,
              scalable solutions and pay close attention to code quality,
              maintainability, and user experience.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As a junior Front-End and Mobile Developer at Esmart, I’m gaining
              practical industry experience while continuing to grow my
              technical skills. I’m highly motivated to learn, adapt quickly,
              and contribute to collaborative teams working on challenging and
              impactful software projects.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
