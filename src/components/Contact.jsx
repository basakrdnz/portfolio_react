import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend'e POST isteği gönderiliyor
    fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Email başarıyla gönderildi!");
        } else {
          alert("Bir hata oluştu, lütfen tekrar deneyin.");
        }
      })
      .catch((error) => console.error("Hata:", error));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-zinc-800 my-40">
      {/* CSS'leri buradaki div'e uyguladık */}
      <div className="p-8 max-w-screen-xl mx-auto my-12">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Sol Taraf: Başlık ve Açıklama */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-white text-4xl font-extrabold mb-6 md:text-6xl ">Contact</h2>
            <p className="text-gray-400 mb-8">
              I would love to hear about your project and how I could help. Please
              fill in the form, and I’ll get back to you as soon as possible.
            </p>
          </div>

          {/* Sağ Taraf: Form */}
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="NAME"
                className="bg-transparent border-b border-gray-500 p-3 text-white focus:outline-none focus:border-emerald-500 transition duration-300"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="EMAIL"
                className="bg-transparent border-b border-gray-500 p-3 text-white focus:outline-none focus:border-emerald-500 transition duration-300"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="MESSAGE"
                className="bg-transparent border-b border-gray-500 p-3 text-white focus:outline-none focus:border-emerald-500 transition duration-300 h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-emerald-500 text-white font-bold py-3 px-6 rounded-full hover:bg-emerald-600 transition duration-300 focus:ring focus:ring-emerald-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
