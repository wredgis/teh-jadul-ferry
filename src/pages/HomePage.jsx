import React from "react";
import "./HomePage.scss"; 
import "./AllPage-style.scss";
import Header from '../components/Header';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';


const HomePage = () => {
  return (
    <>
    <Header />
    <div className="homepage">
      {/* Section d'introduction */}
      <section className="intro">
        <h1 className="title1-style">Selamat Datang di Situs Teh Jadul</h1>
        <p>
          Nikmati keaslian dan cita rasa otentik dari teh jadul Indonesia. Teh
          jadul membawa nuansa klasik dan rasa nostalgia dalam setiap
          tegukannya.
        </p>
      </section>

      {/* Section histoire */}
      <section className="history">
        <h2>Sejarah Teh Jadul</h2>
        <p>
          Teh jadul telah menjadi bagian dari budaya Indonesia selama
          bertahun-tahun. Dari teknik pembuatan tradisional hingga penyajian
          klasik, teh ini membawa kenangan masa lalu.
        </p>
      </section>
      
      <section className="types">
        <h2>Jenis-Jenis Teh Jadul</h2>
        <p>
          Jelajahi berbagai jenis teh jadul yang tersedia, dari teh hitam yang
          pekat hingga teh dengan sentuhan rasa khas Indonesia.
        </p>       
        <ul>
          <li>Teh Hitam</li>
          <li>Teh Hijau</li>
          <li>Teh dengan Gula Aren</li>
        </ul>
      </section>
      
      <section className="cta">
        <h2>Temukan Teh Jadul</h2>
        <p>
          Pesan sekarang dan rasakan pengalaman minum teh dengan cita rasa yang
          otentik.
        </p>
        <Link to="/produk" className="cta-button">Beli Sekarang</Link>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default HomePage;
