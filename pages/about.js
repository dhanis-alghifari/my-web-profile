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
            I really love in the world of web development, especially the front end web development. Because the Front-End is the face of a web. The work of the Front-End is a look that will be seen by people. When can be seen and satisfy people, there I have pride. Therefore, I select Front-End web .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
