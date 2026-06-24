import React from "react";
import bgImage from "../assets/contat.webp";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "dewminichalakshana456@gmail.com",
    href: "mailto:dewminichalakshana456@gmail.com",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+94 70 185 6794",
    href: "tel:+94701856794",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Sri Lanka",
    href: null,
  },
];

const socials = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "@dew-02",
    href: "https://github.com/dew-02",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "Dewmini Jayasinghe",
    href: "https://www.linkedin.com/in/dewmini-jayasinghe-b9308b31a",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    value: "@dew0._2",
    href: "https://www.instagram.com/dew0._2?igsh=eWM4N3VmODBnYXZn",
  },
  {
    icon: <FaFacebook />,
    label: "Facebook",
    value: "Dewmini Chalakshana",
    href: "https://www.facebook.com/share/1Pc6MJx58s/",
  },
];

export default function Contact() {
  return (
    <main>
      <section
        className="page-hero"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="page-shell max-w-4xl text-center">
          <span className="eyebrow mx-auto">Contact</span>
          <h1 className="section-title mt-6">Let us build something useful.</h1>
          <p className="section-copy mx-auto mt-6 max-w-3xl">
            I am open to internship opportunities, collaboration, and projects
            where I can contribute, learn, and grow as a developer.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-3xl p-8">
            <span className="eyebrow">Reach Me</span>
            <h2 className="mt-5 text-4xl font-black text-white">
              Ready for the next opportunity.
            </h2>
            <p className="section-copy mt-5">
              Send a message for internships, project ideas, or developer
              collaborations. I usually respond through email or LinkedIn.
            </p>

            <div className="mt-8 grid gap-4">
              {contactItems.map((item) => {
                const content = (
                  <>
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-300/12 text-cyan-200">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.12em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-1 break-words font-bold text-white">
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-4 transition hover:border-cyan-200/35"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-4"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <a
              href="mailto:dewminichalakshana456@gmail.com"
              className="primary-button mt-8"
            >
              Start Conversation
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel rounded-3xl p-6 transition hover:-translate-y-1 hover:border-cyan-200/35"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.07] text-2xl text-cyan-100">
                  {social.icon}
                </div>
                <h3 className="mt-6 text-2xl font-black text-white">
                  {social.label}
                </h3>
                <p className="mt-2 text-sm font-semibold text-slate-300">
                  {social.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
