import { Briefcase, GraduationCap, Award } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      icon: Briefcase,
      title: "Front End Developer and Mobile Developer",
      company: "Esmart",
      period: "May 2025 - Present",
      description:
        "Developing mobile and web applications with focus on performance optimization and user experience.",
      achievements: [
        "Developed and deployed Android application from scratch using Java and AWS (AppSync, Cognito)",
        "Integrated Datadog to monitor application health and performance in production",
        "Improved authentication efficiency, reducing AWS Cognito costs by 20% through optimized caching and retry logic",
        "Collaborated with senior developers to enhance UI/UX of internal and client-facing web applications",
      ],
    },
    {
      icon: Briefcase,
      title: "Full Stack Software Developer Intern",
      company: "Stingray",
      period: "January 2024 - April 2024",
      description:
        "Built scalable and performant SaaS application features using modern full-stack technologies.",
      achievements: [
        "Built a scalable and performant SaaS application with Ruby on Rails, React/Redux, jQuery, Python, PostgreSQL, and AWS",
        "Worked with developers to design, plan, prioritize, and implement new features to the platform",
        "Gained hands-on experience with enterprise-level architecture and cloud infrastructure",
      ],
    },
    {
      icon: Briefcase,
      title: "Software Developer & Team Lead",
      company: "PolyStar - Polytechnique Montreal",
      period: "September 2022 - September 2024",
      description:
        "Leading software development for competitive robotics team in RoboMaster competitions.",
      achievements: [
        "Implemented functionalities for robots using C++, resulting in increased performance during competition",
        "Performed software tests, allowing team to pass verification tests and participate in competition",
        "Worked in collaboration with different teams to construct and test the robots",
        "Reported progress during meetings and coordinated development efforts",
      ],
    },
  ];

  const education = [
    {
      icon: GraduationCap,
      title: "Bachelor in Software Engineering",
      institution: "Polytechnique Montreal",
      period: "January 2021 - December 2025",
      description:
        "Comprehensive software engineering program with strong focus on algorithms, data structures, software architecture, and hands-on project experience.",
      highlights: [
        "Coursework: Algorithms & Data Structures, Computer Architecture, Discrete Mathematics, Software Architecture, UI & UX Design, Computer Networks, Database",
        "Lab Assistant for INF2010 (Algorithms & Data Structures)",
        "Active member of PolyStar robotics team",
        "Participated in RoboMaster competitions at Seattle (2023) and Colorado (2024)",
      ],
    },
  ];

  const certifications = [
    {
      icon: Award,
      title: "Professional Achievements & Activities",
      items: [
        "RoboMaster Competition Participant - Seattle 2023 & Colorado 2024",
        "Lab Assistant for INF2010 (Algorithms & Data Structures) at Polytechnique Montreal",
        "Team Lead for PolyStar Software Development Team",
        "Full-stack development across multiple production applications",
        "Experience with cloud platforms (AWS) and monitoring tools (Datadog)",
        "Strong foundation in algorithms, data structures, and software architecture",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <exp.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <span className="text-sm font-medium text-blue-600 dark:text-teal-400">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                      {exp.company}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-blue-600 dark:text-teal-400 mt-1">
                            •
                          </span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Education
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <edu.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {edu.title}
                      </h4>
                      <span className="text-sm font-medium text-blue-600 dark:text-teal-400">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                      {edu.institution}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {edu.description}
                    </p>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, hlIndex) => (
                        <li
                          key={hlIndex}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-blue-600 dark:text-teal-400 mt-1">
                            •
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Certifications & Achievements
          </h3>
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <cert.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {cert.title}
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {cert.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-blue-600 dark:text-teal-400 mt-1">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
