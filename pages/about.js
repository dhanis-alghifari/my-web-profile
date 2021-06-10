import Navbar from "../components/navbar";
import Head from "next/head";

function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Profile</h1>
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              voluptatibus non earum sequi nam, dicta fuga molestias eos alias,
              adipisci ex voluptatem explicabo, repudiandae laudantium ipsum.
              Accusamus quibusdam ut blanditiis?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
