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
            <h1 className="title">Hello, I'm Dhanis Al Ghifari</h1>
            <p className="description">
            I really love in the world of web development, especially the front end web development. Because the Front-End is the face of a web. The work of the Front-End is a look that will be seen by people. When can be seen and satisfy people, there I have pride. Therefore, I select Front-End web .
            </p>

            <Link href="/contact">
              <a className="cta">Contact Me</a>
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
