import React from "react";
import "./TentangkamiPage.scss"; 
import "./AllPage-style.scss";
import Header from '../components/Header';
import Footer from '../components/Footer';

const TentangKamiPage = () => {
  return (
    <>
      <Header />
      <div className="tentang-kami">
        {/* Section Introduction */}
        <section className="intro">
          <h1 className="title1-style">Tentang Kami</h1>
          <p>
            Kami adalah Ferry dan Fionna, pendiri Pt. ALVIANTOGROUP yang berlokasi di Surabaya. 
            Bersama, kami berkomitmen untuk melestarikan keaslian cita rasa teh tradisional Indonesia.
          </p>
        </section>

        {/* Section Misi dan Visi */}
        <section className="vision-mission">
          <h2>Misi Kami</h2>
          <p>
            Memberikan pengalaman otentik dalam menikmati teh yang membawa
            kenangan masa lalu dan kehangatan budaya Indonesia.
          </p>
          <h2>Visi Kami</h2>
          <p>
            Menjadi pemimpin dalam menghadirkan teh tradisional Indonesia yang
            otentik dan berkualitas di pasar lokal maupun internasional.
          </p>
        </section>

        {/* Section Tim Kami */}
        <section className="our-team">
          <h2>Tim Kami</h2>
          <p>
            Kami adalah pasangan yang berbagi cinta untuk tradisi dan teh. Bersama tim kami di 
            Pt. ALVIANTOGROUP, kami berusaha untuk menghadirkan teh jadul yang terbaik kepada Anda.
          </p>
        </section>

        {/* Section Perusahaan */}
        <section className="company">
          <h2>Tentang Pt. ALVIANTOGROUP</h2>
          <p>
            Berbasis di Surabaya, Pt. ALVIANTOGROUP didirikan untuk melestarikan dan
            mempromosikan teh tradisional Indonesia. Dengan alamat Surabaya 6018,
            kami dengan bangga mendistribusikan produk teh berkualitas ke seluruh Indonesia dan dunia.
          </p>
        </section>

        {/* Section CTA */}
        <section className="cta">
          <h2>Bergabunglah dengan Perjalanan Kami</h2>
          <p>
            Hubungi kami untuk menjadi bagian dari cerita teh jadul dan dukung
            pelestarian tradisi teh Indonesia.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TentangKamiPage;
