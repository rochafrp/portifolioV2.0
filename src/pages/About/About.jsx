/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "O design moderno e de alta qualidade feito a nível profissional."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "Desenvolvimento de sites de alta qualidade a nível profissional."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Mobile apps",
    description: "Desenvolvimento profissional de aplicativos para iOS e Android."
  },
  /*{
    icon: "/images/icon-photo.svg",
    title: "Outros",
    description: "I make high-quality photos of any category at a professional level."
  }*/
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">Sobre mim</h2>
    </header>

    <section className="about-text">
      
      <p>
        Sou um apaixonado por programação full stack que iniciou sua jornada em 2022 e desde então tem se dedicado ao aprimoramento de habilidades em novas tecnologias. Com uma mentalidade focada no aprendizado contínuo, estou sempre em busca de desafios estimulantes e oportunidades de crescimento. Convido você a explorar meu portfólio e conhecer alguns dos projetos nos quais tenho trabalhado.
      </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">Habilidades em:</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - testimonials
    --> */}

    {/*<section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section>*/}


    {/* <!--
      - clients
    --> */}

    {/*<section className="clients">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-1-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-2-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-3-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-4-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-5-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-6-color.png"alt="client logo"/>
          </a>
        </li>

      </ul>

    </section>*/}

  </article>
  )
}

export default About