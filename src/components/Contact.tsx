import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mguimfack@hotmail.com",
      href: "mailto:mguimfack@hotmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Montreal, Canada",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/melvice-guimfack",
      href: "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BwZHBMSkOSvu7TYuaASSO3g%3D%3D",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/melvice",
      href: "https://github.com/melvice",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Feel
            free to reach out if you'd like to work together!
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={
                        info.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-teal-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-900 dark:text-white">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Additional CTA */}
            <div className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Let's Build Something Great Together
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Whether you have a project in mind, want to collaborate, or just
                want to chat about tech, I'd love to hear from you.
              </p>
              <a
                href="mailto:mguimfack@hotmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                <Mail className="w-4 h-4" />
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
