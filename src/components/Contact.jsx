import { useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";

const Contact = () => {
  document.title = "CineVerse | Contact Us";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Sidenav />
      <div className="h-full w-[80%] overflow-auto overflow-x-hidden">
        <Topnav />
        <div className="p-[5%]">
          <div className="mb-10">
            <h1 className="mb-5 text-5xl font-black text-white">Contact Us</h1>
            <div className="h-1 w-20 bg-yellow-500"></div>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-semibold text-white">
                Get in Touch
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-zinc-300">
                Have a question, suggestion, or feedback? We&apos;d love to hear
                from you! Fill out the form below or reach out to us through the
                contact information provided.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-zinc-600 bg-zinc-900/50">
                    <i className="ri-mail-fill text-xl text-yellow-500"></i>
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-semibold text-white">
                      Email
                    </h3>
                    <p className="text-zinc-400">contact@cineverse.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-lg font-semibold text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-2 border-zinc-600 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-600 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-lg font-semibold text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-2 border-zinc-600 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-600 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-lg font-semibold text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-2 border-zinc-600 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-600 focus:outline-none"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-lg font-semibold text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border-2 border-zinc-600 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-600 focus:outline-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-lg border-2 border-zinc-600 bg-zinc-900/50 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-800/70 hover:shadow-lg hover:shadow-zinc-900/50"
                >
                  <i className="ri-send-plane-fill text-xl text-yellow-500 transition-transform duration-300 group-hover:translate-x-1"></i>
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
