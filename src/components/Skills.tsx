import { Code, Server, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        'React',
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Redux',
        'jQuery',
      ],
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: [
        'Python',
        'Ruby on Rails',
        'Java',
        'C/C++',
        'Node.js',
        'NestJs',
        'PostgreSQL',
        'MongoDB',
        'MySQL',
        'REST APIs',
        'AWS',
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: [
        'Git',
        'GitHub',
        'GitLab',
        'VSCode',
        'Jira',
        'Datadog',
        'Socket.IO',
        'Jest',
        'Figma',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, full-stack applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-teal-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
