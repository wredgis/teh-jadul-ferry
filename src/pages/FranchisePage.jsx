import React from "react";
import { Link } from "react-router-dom"; // Import du composant Link
import "./FranchisePage.scss";
import "./AllPage-style.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FranchisePage = () => {
  return (
    <>
      <Header />
      <div className="franchise-page">
        {/* Section Titre */}
        <section className="intro">
          <h1 className="title1-style">Franchise Kami</h1>
          <p>
            Bergabunglah dengan keluarga besar Teh Jadul dan bawa keaslian teh tradisional
            Indonesia ke komunitas Anda. Jadilah bagian dari perjalanan kami untuk
            melestarikan tradisi!
          </p>
        </section>

        {/* Section Tentang Franchise */}
        <section className="about-franchise">
          <h2>Apa itu Franchise Teh Jadul?</h2>
          <p>
            Franchise Teh Jadul adalah peluang bisnis untuk berbagi cinta akan
            teh tradisional Indonesia. Dengan konsep yang sederhana dan
            teruji, Anda bisa menjalankan bisnis yang berakar pada tradisi
            namun relevan dengan tren modern.
          </p>
        </section>

        {/* Section Keuntungan Bergabung */}
        <section className="benefits">
          <h2>Keuntungan Bergabung</h2>
          <ul>
            <li>Hak eksklusif untuk menggunakan merek Teh Jadul di area Anda.</li>
            <li>Bimbingan penuh dari tim kami dalam memulai bisnis Anda.</li>
            <li>Akses ke bahan berkualitas tinggi dan produk siap jual.</li>
            <li>Dukungan pemasaran dan promosi.</li>
          </ul>
        </section>

        {/* Section Cara Bergabung */}
        <section className="how-to-join">
          <h2>Cara Bergabung</h2>
          <ol>
            <li>Isi formulir pendaftaran yang tersedia di situs kami.</li>
            <li>Tim kami akan menghubungi Anda untuk diskusi lebih lanjut.</li>
            <li>Mulai perjalanan Anda sebagai mitra franchise Teh Jadul!</li>
          </ol>
        </section>

        {/* Section CTA */}
        <section className="cta">
          <h2>Berminat Menjadi Mitra Franchise?</h2>
          <p>
            Hubungi kami sekarang untuk mempelajari lebih lanjut tentang peluang
            bisnis ini. Bersama, kita bisa menghadirkan teh tradisional Indonesia ke seluruh dunia.
          </p>
          <Link to="/kontak" className="cta-link">Hubungi Kami</Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FranchisePage;

