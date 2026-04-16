import React from "react";

export default function App() {
  const projetos = [
    {
      titulo: "Limpeza Profissional",
      texto:
        "Experiência em limpeza completa de ambientes, garantindo higiene, organização e bem-estar dos espaços de trabalho."
    },
    {
      titulo: "Organização de Ambientes",
      texto:
        "Manutenção de ambientes limpos, organizados e funcionais para melhor produtividade."
    },
    {
      titulo: "Uso de Produtos de Limpeza",
      texto:
        "Aplicação correta e segura de produtos de limpeza em diferentes tipos de ambientes."
    },
    {
      titulo: "Compromisso e Pontualidade",
      texto:
        "Responsabilidade com horários, tarefas e entrega de serviços com qualidade."
    }
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1>PORTFÓLIO PROFISSIONAL</h1>
        <p>Raimunda Maria Ribeiro dos Santos</p>
        <span>Auxiliar de Serviços Gerais</span>
      </header>

      <section style={styles.sobre}>
        <h2>Sobre Mim</h2>
        <p>
          Profissional dedicada, responsável e comprometida com a organização,
          limpeza e conservação de ambientes. Atua com disciplina, respeito e
          qualidade em todas as atividades realizadas.
        </p>
      </section>

      <section style={styles.projetos}>
        <h2>Experiências Profissionais</h2>

        <div style={styles.grid}>
          {projetos.map((item, i) => (
            <div key={i} style={styles.card} className="card">
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© 2026 - Portfólio Profissional</p>
      </footer>

      <style>{`
        .card {
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 18px 30px rgba(0,0,0,0.4);
        }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial",
    background: "linear-gradient(135deg, #0f172a, #1e3c72)",
    color: "white",
    minHeight: "100vh",
    margin: 0
  },
  header: {
    textAlign: "center",
    padding: "50px 20px",
    borderBottom: "1px solid rgba(255,255,255,0.2)"
  },
  sobre: {
    padding: "30px",
    maxWidth: "800px",
    margin: "auto",
    textAlign: "center"
  },
  projetos: {
    padding: "30px",
    textAlign: "center"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px"
  },
  card: {
    background: "white",
    color: "#111",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.3)"
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    marginTop: "30px",
    borderTop: "1px solid rgba(255,255,255,0.2)"
  }
};
