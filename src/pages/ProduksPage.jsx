import React, { useState } from "react";
import "./ProduksPage.scss";
import "./AllPage-style.scss";
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProduksPage = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <>
        <Header />
        <div className="produks-page">
            {/* Bagian Pengantar */}
            <section className="intro">
                <h1 className="title1-style">Produk Kami</h1>
                <p>
                    Temukan berbagai pilihan teh jadul berkualitas dan produk turunan lainnya yang 
                    dibuat dengan sentuhan tradisional Indonesia.
                </p>
            </section>

            {/* Daftar Produk */}
            <section className="products">
                <h2>Daftar Produk</h2>
                <div className="product-list">
                    {/* Contoh produit 1 */}
                    <div className="product-item">
                        <div className="product-image">
                            <img src="/pics/teh-hitam.jpg" alt="Teh Hitam Jadul" />
                        </div>
                        <div className="product-info">
                            <h3>Teh Hitam Jadul</h3>
                            <p>Teh hitam dengan rasa otentik, cocok untuk menikmati suasana klasik.</p>
                            <span className="price">Rp 30,000</span>
                            <button className="add-to-cart" onClick={() => handleAddToCart("Teh Hitam Jadul")}>Tambah ke Keranjang</button>
                        </div>
                    </div>
                    {/* Contoh produit 2 */}
                    <div className="product-item">
                        <div className="product-image">
                            <img src="/pics/teh-energi.jpg" alt="Teh Djadoel bumbu jeruk yang memberi energi" />
                        </div>
                        <div className="product-info">
                            <h3>Teh Djadoel Bumbu Jeruk</h3>
                            <p>Aroma kayu manis dan lemon memberikan aroma yang menenangkan dan membangkitkan semangat.</p>
                            <span className="price">Rp 35,000</span>
                            <button className="add-to-cart" onClick={() => handleAddToCart("Teh Djadoel Bumbu Jeruk")}>Tambah ke Keranjang</button>
                        </div>
                    </div>
                    {/* Contoh produit 3 */}
                    <div className="product-item">
                        <div className="product-image">
                            <img src="/pics/teh-gula-aren.jpg" alt="Teh dengan Gula Aren" />
                        </div>
                        <div className="product-info">
                            <h3>Teh dengan Gula Aren</h3>
                            <p>Kombinasi sempurna antara teh jadul dan manisnya gula aren tradisional.</p>
                            <span className="price">Rp 25,000</span>
                            <button className="add-to-cart" onClick={() => handleAddToCart("Teh dengan Gula Aren")}>Tambah ke Keranjang</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
        </>
    );
};

export default ProduksPage;
