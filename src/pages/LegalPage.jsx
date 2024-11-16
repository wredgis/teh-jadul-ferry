import React from "react";
import "./LegalPage.scss";
import Header from '../components/Header';
import Footer from '../components/Footer';

const LegalPage = () => {
    return (
        <>
        <Header />
        <div className="legalpage">
            {/* Bagian Pengantar */}
            <section className="intro">
                <h1 className="title1-style">Informasi Hukum</h1>
                <p>
                    Selamat datang di halaman informasi hukum kami. Di sini, Anda akan menemukan semua informasi penting 
                    terkait kebijakan cookie, hak cipta, dan kebijakan privasi kami.
                </p>
            </section>

            {/* Bagian Kebijakan Cookie */}
            <section className="cookies">
                <h2>Kebijakan Cookie</h2>
                <p>
                    Situs ini menggunakan cookie untuk meningkatkan pengalaman pengguna dan menganalisis lalu lintas situs. 
                    Dengan melanjutkan menggunakan situs ini, Anda setuju dengan penggunaan cookie sesuai dengan kebijakan kami.
                </p>
            </section>

            {/* Bagian Hak Cipta */}
            <section className="copyright">
                <h2>Hak Cipta</h2>
                <p>
                    Semua konten di situs ini, termasuk teks, gambar, dan grafik, adalah milik pemilik situs dan dilindungi 
                    oleh undang-undang hak cipta. Penggunaan konten ini tanpa izin terlebih dahulu dilarang.
                </p>
            </section>

            {/* Bagian Kebijakan Privasi */}
            <section className="privacy">
                <h2>Kebijakan Privasi</h2>
                <p>
                    Privasi Anda penting bagi kami. Kami berkomitmen untuk melindungi informasi pribadi yang Anda bagikan 
                    dengan kami. Untuk informasi lebih lanjut, silakan merujuk pada kebijakan privasi lengkap kami.
                </p>
            </section>
        </div>
        <Footer />
        </>
    );
};

export default LegalPage;

