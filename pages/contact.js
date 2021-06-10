import Navbar from "../components/navbar";
import Head from "next/head";

function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Contact Me</h1>
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              voluptatibus non earum sequi nam.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: dhanisalghifari@gmail.com</li>
              <li className="contact-item">Instagram: @dhanisalghifari</li>
              <li className="contact-item">Whatsapp: +6283812557911</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
