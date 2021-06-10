import Navbar from "../components/navbar";
import Head from "next/head";

function Portofolio() {
  return (
    <div>
      <Head>
        <title>Portofolio</title>
      </Head>

      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portofolio</h1>
            <p className="description">Lorem ipsum dolor sit.</p>
            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/portal-kmk-pen.png" className="portfolio-image" />
                <h4 className="portfolio-name">Portal KMK PEN </h4>
                <div className="portfolio-category">Web Dev</div>
              </div>
              <div className="portfolio-item">
                <img src="/agree.png" className="portfolio-image" />
                <h4 className="portfolio-name">Agree Dashboard</h4>
                <div className="portfolio-category">Web Dev</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portofolio;
