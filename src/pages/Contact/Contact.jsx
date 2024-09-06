

const Contact = () => {
  return (
    <section className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contatos</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58781.12791158867!2d-43.00406756569641!3d-22.95683709469427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x998ecaf7c58bcb%3A0x6926d535b5175469!2zSXRhaXB1YcOndSwgTWFyaWPDoSAtIFJK!5e0!3m2!1spt-BR!2sbr!4v1719427197922!5m2!1spt-BR!2sbr"
            width="400" height="300" loading="lazy" title="Google Map"></iframe>
        </figure>
      </section>

      <section className="contact-form">

        <h3 className="h3 form-title">Contato Formulário</h3>

        <form action="#" className="form" data-form>

          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Nome completo" required data-form-input />

            <input type="email" name="email" className="form-input" placeholder="Endereço de Email" required data-form-input />
          </div>

          <textarea name="message" className="form-input" placeholder="Escreva sua mensagem aqui" required data-form-input></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Enviar Mensagem</span>
          </button>

        </form>

      </section>

    </section>
  );
};

export default Contact;
