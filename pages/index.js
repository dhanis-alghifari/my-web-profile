import Link from "next/link";
import Navbar from "../components/navbar";
import ManWork from "../public/ManWork";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Halo, Saya Dhanis Al Ghifari</h1>
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              voluptatibus non earum sequi nam, dicta fuga molestias eos alias,
              adipisci ex voluptatem explicabo, repudiandae laudantium ipsum.
              Accusamus quibusdam ut blanditiis?
            </p>

            <Link href="/contact">
              <a className="cta">Kontak Saya</a>
            </Link>
          </div>

          <div className="image-wrapper">
            <ManWork />
          </div>
        </div>
      </section>
    </div>
  );
}
