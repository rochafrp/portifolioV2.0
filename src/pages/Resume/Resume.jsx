import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resumo</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Formação</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Anhanguera Educacional"
            date="2022 — 2024"
            description="Superior de Tecnologia em Análise e Desenvolvimento de Sistemas."
          />
          <TimelineItem
            title="JavaScript - Alura"
            date="2023 — 2024"
            description="Introdução ao JavaScript(História, sintaxe básica, variáveis e operadores), Fundamentos de Programação(Estruturas de controle, funções, arrays e objetos), Manipulação do DOM(Seleção e modificação de elementos HTML, eventos), Programação Assíncrona(Callbacks, Promises, Async/Await, Fetch API), Trabalhando com APIs(Consumo de APIs RESTful, manipulação de JSON), JavaScript Avançado(Closures, prototipagem, ES6+ features), Frameworks e Bibliotecas(React: Componentes, estado, hooks e Node.js: Módulos, Express, bancos de dados), Projetos Práticos(Desenvolvimento de sites dinâmicos e aplicações CRUD)."
          />
          <TimelineItem
            title="UX Design - Alura"
            date="2023 — 2023"
            description="Elaborando projetos estratégicos, entendendo a área da user experience e como construir uma persona."
          />
          <TimelineItem
            title="Html e CSS - Alura"
            date="2022 — 2023"
            description="Posicionamento, Listas, Navegação, Ambientes de Desenvolvimento, Estrutura de Arquivos, Tags, Cabeçalho, Footer e Variáveis CSS, Classes, Posicionamento de Flexbox, Trabalhando com Responsividade e Publicação de Projetos."
          />
          
        </ol>
      </div>

      {/*<div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Creative director"
            date="2015 — Present"
            description="Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur."
          />
          <TimelineItem
            title="Art director"
            date="2013 — 2015"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
          <TimelineItem
            title="Web designer"
            date="2010 — 2013"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
        </ol>
      </div>*/}

      <div className="skill">
        <h3 className="h3 skills-title">Minhas Habilidades</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Figma" value={80} />
          <SkillItem title="HTML e CSS" value={80} />
          <SkillItem title="JavaScript" value={70} />
          <SkillItem title="React" value={60} />
          <SkillItem title="React Native" value={50} />
          
        </ul>
      </div>
    </section>
  );
};

export default Resume;
