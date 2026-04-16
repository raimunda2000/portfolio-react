import React from "react";

// Header
function Header() {
  return (
    <header style={{background:"#111",color:"#fff",padding:"20px",textAlign:"center"}}>
      <h1>Portfólio Profissional</h1>
      <p>Auxiliar de Serviços Gerais</p>
    </header>
  );
}

// Sobre
function Sobre() {
  return (
    <section style={{padding:"20px"}}>
      <h2>Sobre a Profissional</h2>
      <p>
        Profissional com experiência em limpeza, organização e conservação de ambientes.
        Atua com responsabilidade, pontualidade e dedicação, garantindo qualidade no serviço.
      </p>
    </section>
  );
}

// Projetos / Experiências
function Projetos() {
  const projetos = [
    {
      nome: "Limpeza Profissional",
      descricao: "Execução completa de limpeza e conservação de ambientes."
    },
    {
      nome: "Organização de Espaços",
      descricao: "Manutenção de ambientes limpos e organizados."
    },
    {
      nome: "Uso de Produtos",
      descricao: "Aplicação correta de produtos de limpeza."
    },
    {
      nome: "Trabalho em Equipe",
      descricao: "Boa comunicação e colaboração com colegas."
    }
  ];

  return (
    <section style={{padding:"20px"}}>
      <h2>Experiências</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px,1fr))",gap:"15px"}}>
        {projetos.map((p, index) => (
          <div key={index} style={{background:"#fff",padding:"15px",borderRadius:"10px",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>
            <h3>{p.nome}</h3>
            <p>{p.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer style={{background:"#111",color:"#fff",textAlign:"center",padding:"15px"}}>
      <p>© 2026 - Portfólio Profissional</p>
    </footer>
  );
}

// App principal
export default function App() {
  return (
    <div style={{background:"#f4f6f9"}}>
      <Header />
      <Sobre />
      <Projetos />
      <Footer />
    </div>
  );
}
