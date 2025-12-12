// src/App.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { SiJavascript, SiBootstrap, SiPython } from "react-icons/si";

// Imagens
const LOGO_IMAGE = "../public/logo_ticnes2.png";
const HERO_IMAGE = "../public/logo_ticnes.jpg";

export default function App() {

 function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;

  // Ajuste de offset para navbar sticky
  const navbarHeight = document.querySelector(".navbar").offsetHeight;
  const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

  window.scrollTo({ top: y, behavior: "smooth" });

  // Fechar offcanvas se aberto
  const offcanvasEl = document.getElementById("offcanvasMenu");
  const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
  if (offcanvas) offcanvas.hide();
}


  // Variants para animação
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="app-root">

      {/* NAVBAR */}
      <motion.nav initial="hidden" animate="visible" variants={fadeInUp} className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <img src={LOGO_IMAGE} className="brand-circle" style={{ width: "50px", height: "50px" }} />
            <div>
              <div className="fw-bold">TICNES<sup>®</sup></div>
              <small className="text-muted">Augmented Ingenuity</small>
            </div>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse d-none d-lg-flex" id="navMain">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item"><a className="nav-link" href="#servicos">Serviços</a></li>
              <li className="nav-item"><a className="nav-link" href="#stack">Tecnologias</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
              <li className="nav-item"><a className="nav-link" href="#sobre-nos">Sobre nós</a></li>
              <li className="nav-item ms-2"><a className="btn btn-outline-primary btn-sm hover-blue" href="#contacto">Participar</a></li>
            </ul>
          </div>
        </div>
      </motion.nav>

   {/* OFFCANVAS MOBILE */}
<div
  className="offcanvas offcanvas-start bg-dark text-white"
  tabIndex="-1"
  id="offcanvasMenu"
  aria-labelledby="offcanvasMenuLabel"
  style={{ width: "250px" }}
>
  <div className="offcanvas-header border-bottom border-secondary">
    <h5 className="offcanvas-title fw-bold" id="offcanvasMenuLabel">Menu</h5>
    <button
      type="button"
      className="btn-close btn-close-white"
      data-bs-dismiss="offcanvas"
      aria-label="Fechar"
    ></button>
  </div>
  <div className="offcanvas-body">
    <ul className="navbar-nav">
    {["servicos", "stack", "contacto", "sobre-nos"].map((section, idx) => (
  <React.Fragment key={section}>
    <li className="nav-item">
      <a
        className="nav-link text-white fw-semibold"
        href={`#${section}`}
        onClick={() => {
          scrollToSection(section);
          // Remove o overlay escuro manualmente
          const offcanvasEl = document.getElementById("offcanvasMenu");
          const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl);
          if (offcanvasInstance) offcanvasInstance.hide();
          document.body.classList.remove("offcanvas-backdrop", "offcanvas-backdrop-show");
        }}
        style={{ fontSize: "1.05rem", padding: "0.75rem 1rem" }}
      >
        {section === "servicos" ? "Serviços" : section === "stack" ? "Tecnologias" : section === "contacto" ? "Contacto" : "Sobre Nós"}
      </a>
    </li>
    {idx < 3 && <hr className="my-1 border-secondary" />}
  </React.Fragment>
))}


      {/* Botão Participar */}
      <li className="nav-item mt-3">
        <a
          className="btn btn-outline-primary w-100 hover-blue"
          href="#contacto"
          onClick={() => {
            scrollToSection("contacto");
            const offcanvasEl = document.getElementById("offcanvasMenu");
            const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl);
            if (offcanvasInstance) offcanvasInstance.hide();
            document.body.classList.remove("offcanvas-backdrop", "offcanvas-backdrop-show");
          }}
          style={{ fontSize: "1rem" }}
        >
          Participar
        </a>
      </li>
    </ul>
  </div>
</div>


    {/* HERO */}
<motion.header
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
  className="hero d-flex align-items-center"
  style={{
    backgroundImage: `linear-gradient(180deg, rgba(3,12,20,0.55), rgba(3,12,20,0.55)), url(${HERO_IMAGE})`,
    minHeight: "80vh", // aumenta a altura do header
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-7 text-white text-center text-lg-start">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          className="display-6 display-lg-5 fw-bold"
        >
          Digital Assets Development
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          className="lead lead-lg text-white-50"
        >
          Criamos soluções em Inteligência Artificial, Data Science e Segurança da Informação — transformando dados em vantagem competitiva.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4 } }}
          className="d-flex flex-wrap gap-2 mt-3 justify-content-center justify-content-lg-start"
        >
          <a href="#contacto" className="btn btn-primary btn-sm w-auto hover-blue">
            Participar do Estágio
          </a>
          <a href="#servicos" className="btn btn-outline-light btn-sm w-auto">
            Ver Serviços
          </a>
        </motion.div>
      </div>
      <div className="col-lg-5 d-none d-lg-block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          className="card preview-card p-3 border-0"
        >
          <img
            src={HERO_IMAGE}
            alt="TICNES"
            className="img-fluid rounded"
            style={{ maxHeight: 350, objectFit: "cover" }} // aumenta também a imagem
          />
        </motion.div>
      </div>
    </div>
  </div>
</motion.header>


      {/* SERVIÇOS */}
      <motion.section id="servicos" className="py-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
        <div className="container">
          <motion.h2 className="fw-bold text-center mb-4" variants={fadeInUp}>Nossos Serviços</motion.h2>
          <motion.p className="text-center text-muted mb-5" variants={fadeInUp}>Entrega de valor com foco em segurança e eficiência operacional.</motion.p>
          <div className="row g-4">
            <ServiceCard title="Artificial Intelligence" items={["AI Agents & Automation", "Prompt Engineering Training", "Model Deployment & Monitoring"]} />
            <ServiceCard title="Data Science Systems" items={["Data-driven Decisions", "Recommendation Systems", "ETL & Pipelines"]} />
            <ServiceCard title="Information Security" items={["Data Privacy", "App & AI Security", "Cyber-Security Awareness"]} />
            <ServiceCard title="Consultoria & Treinamento" items={["Workshops práticos", "Arquitetura de soluções", "Mentoria de estágio"]} />
          </div>
        </div>
      </motion.section>

      {/* STACK / TECNOLOGIAS */}
      <motion.section id="stack" className="py-5 bg-dark text-light" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <motion.h3 className="fw-bold text-white" variants={fadeInUp}>Tecnologias Recomendadas</motion.h3>
              <motion.p className="text-light" variants={fadeInUp}>Front-end: React + JavaScript + Bootstrap. Backend: Node/Python. Infra: Docker + AWS/Azure/GCP.</motion.p>
              <motion.ul className="list-unstyled small text-light" variants={fadeInUp}>
                <li>• React: Componentização, SPA e performance</li>
                <li>• JavaScript: Dev server rápido e builds leves</li>
                <li>• Bootstrap: Grid responsivo e componentes prontos</li>
                <li>• Python: Contêineres portáteis para ambientes consistentes</li>
              </motion.ul>
            </div>
            <div className="col-lg-6 row g-3">
              <TechBadge name="React" />
              <TechBadge name="JavaScript" />
              <TechBadge name="Bootstrap" />
              <TechBadge name="Python" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* CONTACTO */}
      <motion.section id="contacto" className="py-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <div className="container">
          <motion.h3 className="fw-bold text-center mb-4 text-white" variants={fadeInUp}>Contacto</motion.h3>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <motion.form className="contact-form p-4 rounded shadow-sm" variants={staggerContainer}>
                <div className="row g-3">
                  <motion.div className="col-md-6" variants={fadeInUp}>
                   
                    <input className="form-control border border-secondary bg-transparent text-white" type="text" placeholder="Seu nome" style={{ opacity: 0.8 }} />
                  </motion.div>
                  <motion.div className="col-md-6" variants={fadeInUp}>
                   
                    <input className="form-control border border-secondary bg-transparent text-white" type="email" placeholder="seu@exemplo.com" style={{ opacity: 0.8 }} />
                  </motion.div>
                  <motion.div className="col-12" variants={fadeInUp}>
                  
                    <textarea className="form-control border border-secondary bg-transparent text-white" rows="5" placeholder="Escreva a sua mensagem..." style={{ opacity: 0.8 }}></textarea>
                  </motion.div>
                  <motion.div className="col-12 d-grid" variants={fadeInUp}>
                    <button type="submit" className="btn btn-primary btn-lg hover-blue">Enviar</button>
                  </motion.div>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </motion.section>


     {/* SOBRE NÓS */}
<motion.section
  id="sobre-nos"
  className="py-5 bg-light text-dark"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="container">

    {/* 1ª Linha: Sobre a TICNES */}
    <motion.div 
      className="row g-5 align-items-center mb-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="col-md-5">
        <img
          src="../public/Imagem WhatsApp 2025-12-06 às 12.21.30_c7e79ff0.jpg" 
          alt="Sobre TICNES"
          className="img-fluid rounded shadow-sm"
        />
      </div>
      <motion.div className="col-md-7">
        <motion.h2 className="fw-bold mb-3">Sobre a TICNES IA</motion.h2>
        <motion.p>
          A <motion.strong>TICNES IA</motion.strong> é uma organização dedicada à transformação digital, desenvolvimento em Inteligência Artificial e soluções tecnológicas inovadoras.
        </motion.p>
        <motion.p>
          Nossa missão é liderar a criação de soluções digitais que combinem tecnologia avançada com foco humano, fornecendo frameworks de IA seguros, escaláveis e sustentáveis.
        </motion.p>
        <motion.p>
          Valorizamos ética, inovação com propósito, excelência e colaboração, promovendo capacitação digital em todos os níveis.
        </motion.p>

        <motion.p><strong>Visão:</strong>Tornarmo-nos uma empresa de nível mundial, na área de ciber-segurança/segurança da informação, em Angola</motion.p>

        <motion.p><strong>Missao</strong>Desenvolvimento e implementação de serviços avançados de segurança para as TICs, permitindo aos nossos clientes serem resilientes face as ameaças e riscos que enfrentam, de maneira que o seu negócio não seja afectado por elas.</motion.p>

        <motion.p><strong>Valores:</strong>Os nossos valores são principalmente os da Integridade, excelência operacional, a perseverança, a paixão para fazer a diferença, e o desenvolvimento pessoal e profissional dos nossos colaboradores.</motion.p>

      </motion.div>
    </motion.div>

  </div>
</motion.section>



      {/* FOOTER */}
      <motion.footer className="py-4 footer bg-black text-center text-light" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <div className="container">
          <div className="mb-2">TICNES® Augmented Ingenuity</div>
          <div className="mb-3 mt-3 d-flex justify-content-center gap-3">
            <a href="https://www.facebook.com/ticnes" target="_blank" style={{ color: "#aaa" }}><FaFacebook size={22} /></a>
            <a href="https://www.instagram.com/ticnes_cyber_security/" target="_blank" style={{ color: "#aaa" }}><FaInstagram size={22} /></a>
            <a href="https://wa.me/953186182" target="_blank" style={{ color: "#aaa" }}><FaWhatsapp size={22} /></a>
            <a href="https://www.linkedin.com/company/ticnes-lda/posts/" target="_blank" style={{ color: "#aaa" }}><FaLinkedin size={22} /></a>
          </div>
          <small style={{ color: "#555" }}>© {new Date().getFullYear()} — Todos os direitos reservados</small>
        </div>
      </motion.footer>

    </div>
  );
}

// Componentes internos com animação
function ServiceCard({ title, items }) {
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
  return (
    <motion.div className="col-md-6 col-lg-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
      <div className="card h-100 service-card p-3 border-0">
        <div className="card-body">
          <h5 className="fw-bold">{title}</h5>
          <ul className="text-muted small">{items.map((it, idx) => <li key={idx}>{it}</li>)}</ul>
        </div>
      </div>
    </motion.div>
  );
}

function TechBadge({ name }) {
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  const icons = {
    React: <FaReact size={28} className="me-2 text-info" />,
    JavaScript: <SiJavascript size={28} className="me-2 text-primary" />,
    Bootstrap: <SiBootstrap size={28} className="me-2 text-primary" />,
    Python: <SiPython size={28} className="me-2 text-info" />,
  };
  return (
    <motion.div className="col-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
      <div className="card h-100 p-3 border-0 bg-secondary bg-opacity-10">
        <div className="card-body d-flex align-items-center">{icons[name]}<h6 className="mb-0 fw-bold text-white fs-6">{name}</h6></div>
      </div>
    </motion.div>
  );
}
