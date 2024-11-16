import React from "react";
import "./KontakPage.scss";
import "./AllPage-style.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

const KontakPage = () => {
  return (
    <>
      <Header />
      <div className="kontak-page">
        {/* Section Titre */}
        <section className="intro">
          <h1 className="title1-style">Kontak Kami</h1>
          <p>
            Kami senang mendengar dari Anda! Silakan hubungi kami melalui
            informasi di bawah ini atau kunjungi kantor kami di Surabaya.
          </p>
        </section>

        {/* Section Informasi Kontak */}
        <section className="contact-info">
          <h2>Informasi Kontak</h2>
          <p><strong>Alamat:</strong> Jalan Teh Tradisional No. 10, Surabaya 6018, Indonesia</p>
          <p><strong>Email:</strong> info@tehjadul.com</p>
          <p><strong>Telepon:</strong> +62 31 123 4567</p>
        </section>

        {/* Section Peta */}
        <section className="map-section">
          <h2>Lokasi Kami</h2>
          <div className="map-container">
            <iframe
              title="Lokasi Teh Jadul"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126914.79052996168!2d112.6250919!3d-7.2756128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f91c7e6e3d6b%3A0x8b7421c7890010e3!2sSurabaya%2C%20East%20Java%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* Section CTA */}
        <section className="cta">
          <h2>Hubungi Kami</h2>
          <p>
            Jangan ragu untuk mengirimkan pesan kepada kami atau mampir untuk
            menikmati teh bersama.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default KontakPage;
