import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  document.title = "CineVerse | Contact Us";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [hoveredField, setHoveredField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen w-screen overflow-auto overflow-x-hidden bg-[#1F1E24]">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="group fixed top-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 text-white transition-all duration-300 hover:scale-105 hover:border-zinc-500 hover:bg-zinc-800"
        aria-label="Go back"
      >
        <i className="ri-arrow-left-line text-xl transition-transform duration-300 group-hover:-translate-x-1"></i>
      </button>

      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Hero Section */}
        <div className="mb-24 text-center">
          <h1 className="mb-6 text-6xl font-bold text-white">Contact Us</h1>
          <div className="mx-auto mb-8 h-1 w-20 bg-yellow-500"></div>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-zinc-400">
            Have a question, suggestion, or feedback? We&apos;d love to hear
            from you! Fill out the form below or reach out to us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Contact Info Section */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
            <h2 className="mb-6 text-3xl font-semibold text-white">
              Get in Touch
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-zinc-300">
              Feel free to reach out to us through the contact information
              provided below. We&apos;re here to help!
            </p>

            <div className="group flex items-start gap-4 rounded-lg border border-zinc-800 bg-zinc-900/30 p-6 transition-all duration-300 hover:border-red-600/50 hover:bg-zinc-900/50 hover:shadow-lg hover:shadow-red-600/20">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/50 transition-all duration-300 group-hover:border-red-600/50 group-hover:bg-red-600/10">
                <i className="ri-mail-fill text-xl text-yellow-500 transition-all duration-300 group-hover:text-red-500"></i>
              </div>
              <div>
                <h3 className="mb-1 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-red-500">
                  Email
                </h3>
                <p className="text-zinc-400">contact@cineverse.com</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
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
                  onFocus={() => setHoveredField("name")}
                  onBlur={() => setHoveredField(null)}
                  required
                  className={`w-full rounded-lg border-2 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 transition-all duration-300 focus:ring-2 focus:outline-none ${
                    hoveredField === "name"
                      ? "border-red-600/50 bg-zinc-900/70 focus:border-red-600 focus:ring-red-600/20"
                      : "border-zinc-600 focus:border-zinc-400 focus:ring-zinc-600"
                  }`}
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
                  onFocus={() => setHoveredField("email")}
                  onBlur={() => setHoveredField(null)}
                  required
                  className={`w-full rounded-lg border-2 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 transition-all duration-300 focus:ring-2 focus:outline-none ${
                    hoveredField === "email"
                      ? "border-red-600/50 bg-zinc-900/70 focus:border-red-600 focus:ring-red-600/20"
                      : "border-zinc-600 focus:border-zinc-400 focus:ring-zinc-600"
                  }`}
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
                  onFocus={() => setHoveredField("subject")}
                  onBlur={() => setHoveredField(null)}
                  required
                  className={`w-full rounded-lg border-2 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 transition-all duration-300 focus:ring-2 focus:outline-none ${
                    hoveredField === "subject"
                      ? "border-red-600/50 bg-zinc-900/70 focus:border-red-600 focus:ring-red-600/20"
                      : "border-zinc-600 focus:border-zinc-400 focus:ring-zinc-600"
                  }`}
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
                  onFocus={() => setHoveredField("message")}
                  onBlur={() => setHoveredField(null)}
                  required
                  rows={6}
                  className={`w-full rounded-lg border-2 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 transition-all duration-300 focus:ring-2 focus:outline-none ${
                    hoveredField === "message"
                      ? "border-red-600/50 bg-zinc-900/70 focus:border-red-600 focus:ring-red-600/20"
                      : "border-zinc-600 focus:border-zinc-400 focus:ring-zinc-600"
                  }`}
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-lg border-2 border-zinc-600 bg-zinc-900/50 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-red-600/50 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-red-600/20"
              >
                <i className="ri-send-plane-fill text-xl text-yellow-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-500"></i>
                <span className="transition-colors duration-300 group-hover:text-red-500">
                  Send Message
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
