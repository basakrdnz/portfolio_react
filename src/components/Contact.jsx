import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Form gönderim durumu

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
          setStatus("Email başarıyla gönderildi!"); // Başarılı mesajı
          setFormData({ name: "", email: "", message: "" }); // Formu sıfırla
        } else {
          setStatus("Bir hata oluştu, lütfen tekrar deneyin."); // Hata mesajı
        }
      })
      .catch((error) => {
        setStatus("Sunucu hatası: " + error.message); // Hata mesajı
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-zinc-800 my-20 rounded-xl">
      <div className="p-8 max-w-screen-xl mx-auto my-12 bg-transparent">
        <div className="flex flex-col lg:flex-row justify-between gap-8 bg-transparent">
          {/* Sol Taraf: Başlık ve Açıklama */}
          <div className="lg:w-1/2 text-center lg:text-left bg-transparent">
            <h2 className="text-white text-4xl font-extrabold mb-6 md:text-6xl bg-transparent ">Contact</h2>
            <p className="text-gray-400 mb-8 bg-transparent">
              I would love to hear about your project and how I could help. Please
              fill in the form, and I’ll get back to you as soon as possible.
            </p>
          </div>

          {/* Sağ Taraf: Form */}
          <div className="lg:w-1/2 bg-transparent">
            <form onSubmit={handleSubmit} className="flex bg-transparent flex-col gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="NAME"
                className="bg-transparent rounded-md border-b-2 border-emerald-500 p-3 text-white focus:outline-none focus:border-emerald-500 transition duration-300"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="EMAIL"
                className="bg-transparent rounded-md border-b-2 border-emerald-500 p-3 text-white focus:outline-none focus:border-emerald-500 transition duration-300"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="MESSAGE"
                className="bg-transparent rounded-md border-b-2 border-emerald-500 p-3 text-white focus:outline-none focus:border-emerald-500 transition duration-300 h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-emerald-500 text-white font-bold py-3 px-6 rounded-full hover:bg-emerald-600 transition duration-300 focus:ring focus:ring-emerald-300"
              >
                Send Message
              </button>
            </form>
            {/* Form gönderim durumu */}
            {status && (
            <p
              className="mt-6 rounded-xl w-1/2 m-auto text-gray-900"
              style={{
                animation: "expandAndShrink 1s ease-in-out forwards, rainbow 3s linear infinite",  // Hem genişleme hem renk animasyonu
                background: "linear-gradient(270deg, #ff7eb9, #ff758c, #c8a2c8, #79c8ff, #ffcc70)",  // Gökkuşağı renkleri
                backgroundSize: "400% 400%",  // Animasyon için büyük arka plan boyutu
                transformOrigin: "center",  // Ortadan genişleme
                color: "#fff",  // Yazı rengini beyaz yap
                padding: "10px",  // Daha belirgin olması için padding
                textAlign: "center",  // Ortaya hizalama
              }}
            >
              {status}
            </p>
          )}
    
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
