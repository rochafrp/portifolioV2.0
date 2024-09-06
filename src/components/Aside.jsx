import { GiClawSlashes, GiPhone } from "react-icons/gi";
import { FaInstagram, FaRegCalendarAlt, FaHome, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

const Aside = () => {
  return (
    <aside className="sidebar">
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src={"/images/main-img.png"}
              alt="Felipe Rocha"
              width="80"
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Felipe Rocha">
            <strong>F</strong>elipe <strong>R</strong>ocha
            </h1>
            <p className="title">Dev. Full Stack, Mobile & Designer</p>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Mostrar contatos</span>

            <GiClawSlashes />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
                <div className="icon-box">
                  <FaGithub/>
                  
                </div>

                <div className="contact-info">
                  <p className="contact-title">Instagram</p>

                  <a href="https://github.com/rochafrp" className="contact-link">
                    github.com/rochafrp
                  </a>
                </div>
            </li>

            <li className="contact-item">
                <div className="icon-box">
                  <FaLinkedin/>
                  
                </div>

                <div className="contact-info">
                  <p className="contact-title">Linkedin</p>

                  <a href="https://www.linkedin.com/in/felipe-rocha-652459162/" className="contact-link">
                    Felipe Rocha
                  </a>
                </div>
            </li>
            
            <li className="contact-item">
              <div className="icon-box">
                <FaInstagram/>
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Instagram</p>

                <a href="https://www.instagram.com/feliperochafrp/" className="contact-link">
                  @feliperochafrp
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <HiOutlineMailOpen/>
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:rochafrp@gmail.com" className="contact-link">
                  rochafrp@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiPhone/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Telefone</p>

                <a href="tel:21970144385" className="contact-link">
                  (21) 97014-4385
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <FaRegCalendarAlt />
               
              </div>

              <div className="contact-info">
                <p className="contact-title">Aniversário</p>

                <time dateTime="1982-06-23">Dezembro 03, 1993</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <FaHome/>
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Local</p>

                <address>Maricá, Rio de Janeiro, Basil</address>
              </div>
            </li>
            
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
  )
}

export default Aside