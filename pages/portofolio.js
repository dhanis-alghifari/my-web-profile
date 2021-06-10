import Navbar from "../components/navbar";
import Head from "next/head";
import Image from 'next/image'

function Portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portfolio</h1>
            <p className="description">Some of the projects I've done built with React JS</p>
            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <Image src="/portal-kmk-pen.png" className="portfolio-image" />
                <h4 className="portfolio-name">Portal KMK PEN </h4>
                <div className="portfolio-category">Web Dev</div>
              </div>
              <div className="portfolio-item">
                <Image src="/agree.png" className="portfolio-image" />
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

export default Portfolio;
