import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Get In Touch
        </h2>

        <p className="text-gray-600 mb-6">
          Feel free to reach out for collaborations or opportunities.
        </p>

        <div className="space-y-4 text-lg">
          <p>
            📧 Email: 
            <span className="text-blue-600 ml-2">
              deweducation890@gmail.com
            </span>
          </p>

          <p>
            💻 GitHub:
            <a
              href="https://github.com/dew-02"
              className="text-blue-600 ml-2 hover:underline"
              target="_blank"
            >
              github.com/dew-02
            </a>
          </p>

          <p>
            🔗 LinkedIn:
            <a
              href="https://www.linkedin.com/in/dewmini-jayasinghe-b9308b31a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-blue-600 ml-2 hover:underline"
              target="_blank"
            >
              linkedin.com/in/dewmini-jayasinghe
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
