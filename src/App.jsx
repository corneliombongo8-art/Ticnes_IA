// src/App.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaArrowRight, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaCalendarAlt, FaUser } from "react-icons/fa";
import { SiJavascript, SiBootstrap, SiPython } from "react-icons/si";



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
    <div className="app-root" style={{ fontFamily: "'Inter', 'Poppins', sans-serif", fontSize: "16px", lineHeight: 1.6 }}>

      {/* NAVBAR */}
      <motion.nav initial="hidden" animate="visible" variants={fadeInUp} className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvInLP1fw7oi7thvFzR-4mh699EzC8QAv2Q&s"
              className="brand-circle"
              style={{ width: "50px", height: "50px" }}
              alt="TICNES Logo"
            />
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
              <li className="nav-item"><a className="nav-link" href="#portfolio">Portfólio</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
              <li className="nav-item"><a className="nav-link" href="#sobre-nos">Sobre nós</a></li>
              <li className="nav-item ms-2">
                <a className="btn btn-outline-primary btn-sm hover-blue d-flex align-items-center gap-2" href="#contacto">
                  Participar <FaArrowRight />
                </a>
              </li>
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
            {["servicos", "stack", "portfolio", "contacto", "sobre-nos"].map((section, idx) => (
              <React.Fragment key={section}>
                <li className="nav-item">
                  <a
                    className="nav-link text-white fw-semibold"
                    href={`#${section}`}
                    onClick={() => scrollToSection(section)}
                    style={{ fontSize: "1.05rem", padding: "0.75rem 1rem" }}
                  >
                    {section === "servicos" ? "Serviços" : 
                     section === "stack" ? "Tecnologias" : 
                     section === "portfolio" ? "Portfólio" :
                     section === "contacto" ? "Contacto" : 
                     "Sobre Nós"}
                  </a>
                </li>
                {idx < 4 && <hr className="my-1 border-secondary" />}
              </React.Fragment>
            ))}

            {/* Botão Participar */}
            <li className="nav-item mt-3">
              <a
                className="btn btn-outline-primary w-100 hover-blue d-flex align-items-center justify-content-center gap-2"
                href="#contacto"
                onClick={() => scrollToSection("contacto")}
                style={{ fontSize: "1rem" }}
              >
                Participar <FaArrowRight />
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
          backgroundImage: `linear-gradient(
            180deg,
            rgba(3,12,20,0.55),
            rgba(3,12,20,0.55)
          ), url(https://ticnes.ai/assets/hero-bg-DvlFGvNV.jpg)`,
          minHeight: "100vh",
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
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Digital Assets Development
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                className="lead lead-lg text-white-50"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.2rem" }}
              >
                Criamos soluções em Inteligência Artificial, Data Science e Segurança da Informação — transformando dados em vantagem competitiva.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.4 } }}
                className="d-flex flex-wrap gap-2 mt-3 justify-content-center justify-content-lg-start"
              >
                <a href="#contacto" className="btn btn-primary btn-sm w-auto hover-blue d-flex align-items-center gap-2">
                  Participar do Estágio <FaArrowRight />
                </a>
                <a href="#servicos" className="btn btn-outline-light btn-sm w-auto p-3 d-flex align-items-center gap-2">
                  Ver Serviços <FaArrowRight />
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
                  src="https://ticnes.ai/assets/hero-bg-DvlFGvNV.jpg"
                  alt="TICNES"
                  className="img-fluid rounded"
                  style={{ maxHeight: 350, objectFit: "cover" }}
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

     {/* PORTFÓLIO */}
<motion.section 
  id="portfolio" 
  className="py-5 bg-light"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={staggerContainer}
>
  <div className="container">
    <motion.h2 className="fw-bold text-center mb-5" variants={fadeInUp}>Meu Portfólio</motion.h2>
    
    <div className="row justify-content-center">
      <motion.div 
        className="col-lg-10"
        variants={fadeInUp}
      >
        <div className="card border-0 shadow-lg overflow-hidden">
          <div className="row g-0">
           {/* Coluna da Foto */}
<div className="col-md-4 bg-primary bg-opacity-10 d-flex align-items-center justify-content-center p-4">
  <div className="text-center w-100">
    {/* Contêiner da imagem */}
    <div className="position-relative mb-4" style={{ width: "200px", height: "200px", margin: "0 auto" }}>
      {/* Anel decorativo */}
      <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle border border-3 border-primary border-opacity-25"></div>
      
      {/* Imagem do Google - LINK CORRETO */}
      <img 
        src=""
        alt="Cornélio Avelino Mbongo"
        className="rounded-circle w-100 h-100 object-fit-cover"
        style={{
          objectFit: 'cover',
          border: '4px solid white',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f8f9fa' // cor de fundo enquanto carrega
        }}
        onError={(e) => {
          // Fallback se a imagem não carregar
          e.target.onerror = null;
          e.target.style.display = 'none';
          e.target.parentNode.innerHTML += `
            <div class="rounded-circle w-100 h-100 d-flex align-items-center justify-content-center"
                 style="background-color: #0D8ABC; color: white; font-size: 3rem; font-weight: bold;">
              CM
            </div>
          `;
        }}
      />
      
      {/* Indicador de status online */}
      <div className="position-absolute bottom-0 end-0 bg-success rounded-circle border border-3 border-white" 
           style={{ width: "20px", height: "20px" }}></div>
    </div>
    
    <h4 className="fw-bold mb-1">Cornélio Avelino Mbongo</h4>
    <p className="text-muted mb-3">Desenvolvedor de Software</p>
    
    <a 
      href="https://drive.google.com/drive/folders/1bwNUEe5OeynFYJVLfvtUW53miEKFP2Ik" 
      target="_blank" 
      rel="noopener noreferrer"
      className="btn btn-primary btn-lg w-100 hover-blue d-flex align-items-center justify-content-center gap-2 mb-3"
    >
      <FaGithub /> Meus Projetos
    </a>
    
    <a 
      href="https://drive.google.com/drive/folders/1bwNUEe5OeynFYJVLfvtUW53miEKFP2Ik" 
      target="_blank" 
      rel="noopener noreferrer"
      className="btn btn-outline-primary btn-lg w-100 d-flex align-items-center justify-content-center gap-2"
    >
      <FaArrowRight /> Download CV
    </a>
  </div>
</div>
            
            {/* Coluna das Informações */}
            <div className="col-md-8">
              <div className="card-body p-5">
                <div className="row g-4">
                  {/* Informações Pessoais */}
                  <div className="col-12">
                    <h5 className="fw-bold text-primary mb-3 d-flex align-items-center gap-2">
                      <FaUser /> Informações Pessoais
                    </h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <FaUser className="text-primary" />
                          <span className="fw-semibold">Nome Completo:</span>
                        </div>
                        <p className="ms-4">Cornélio Avelino Mbongo</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <FaCalendarAlt className="text-primary" />
                          <span className="fw-semibold">Idade:</span>
                        </div>
                        <p className="ms-4">19 anos</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <FaMapMarkerAlt className="text-primary" />
                          <span className="fw-semibold">Nacionalidade:</span>
                        </div>
                        <p className="ms-4">Angolana</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <FaGraduationCap className="text-primary" />
                          <span className="fw-semibold">Formação:</span>
                        </div>
                        <p className="ms-4">Estudante Universitário</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Formação Académica */}
                  <div className="col-12">
                    <h5 className="fw-bold text-primary mb-3 d-flex align-items-center gap-2">
                      <FaGraduationCap /> Formação Académica
                    </h5>
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <div className="bg-primary bg-opacity-10 p-2 rounded">
                        <FaGraduationCap className="text-primary mt-1" size={20} />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Instituto Politécnico Industrial de Angola</h6>
                        <p className="text-muted mb-1">Curso: Informática de Gestão</p>
                        <p className="text-muted mb-1">Classe: 13</p>
                        <p className="text-muted mb-0">Período: 2021 - Presente</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Experiência Profissional */}
                  <div className="col-12">
                    <h5 className="fw-bold text-primary mb-3 d-flex align-items-center gap-2">
                      <FaBriefcase /> Experiência Profissional
                    </h5>
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <div className="bg-primary bg-opacity-10 p-2 rounded">
                        <FaBriefcase className="text-primary mt-1" size={20} />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">TICNES IA</h6>
                        <p className="text-muted mb-1">Cargo: Estagiário em Desenvolvimento de Software</p>
                        <p className="text-muted mb-0">Período: 2023 - Presente</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-start gap-3">
                      <div className="bg-primary bg-opacity-10 p-2 rounded">
                        <FaBriefcase className="text-primary mt-1" size={20} />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Desenvolvedor de Software Freelancer</h6>
                        <p className="text-muted mb-1">Especialização: Desenvolvimento Web Full Stack</p>
                        <p className="text-muted mb-0">Período: 2022 - Presente</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Habilidades Técnicas */}
                  <div className="col-12">
                    <h5 className="fw-bold text-primary mb-3">Habilidades Técnicas</h5>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-primary bg-opacity-25 text-primary py-2 px-3">React</span>
                      <span className="badge bg-primary bg-opacity-25 text-primary py-2 px-3">JavaScript</span>
                      <span className="badge bg-primary bg-opacity-25 text-primary py-2 px-3">HTML/CSS</span>
                      <span className="badge bg-primary bg-opacity-25 text-primary py-2 px-3">Bootstrap</span>
                      <span className="badge bg-primary bg-opacity-25 text-primary py-2 px-3">Node.js</span>
                      <span className="badge bg-primary bg-opacity-25 text-primary py-2 px-3">Python</span>
                      <span className="badge bg-primary bg-opacity-25 text-primary py-2 px-3">Git/GitHub</span>
                      <span className="badge bg-primary bg-opacity-25 text-primary py-2 px-3">MySQL</span>
                      <span className="badge bg-primary bg-opacity-25 text-primary py-2 px-3">Framer Motion</span>
                      <span className="badge bg-primary bg-opacity-25 text-primary py-2 px-3">Vite</span>
                    </div>
                  </div>
                  
                  {/* Contacto Pessoal */}
                  <div className="col-12">
                    <h5 className="fw-bold text-primary mb-3">Contacto Pessoal</h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <FaEnvelope className="text-primary" />
                          <span className="fw-semibold">Email:</span>
                        </div>
                        <a href="mailto:cornelio.mbongo@gmail.com" className="ms-4 text-decoration-none">
                          corneliombongo8@gmail.com
                        </a>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <FaPhone className="text-primary" />
                          <span className="fw-semibold">Telefone:</span>
                        </div>
                        <a href="tel:+244953186182" className="ms-4 text-decoration-none">
                          +244 951 984 134
                        </a>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <FaMapMarkerAlt className="text-primary" />
                          <span className="fw-semibold">Localização:</span>
                        </div>
                        <p className="ms-4">Luanda, Angola</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <FaLinkedin className="text-primary" />
                          <span className="fw-semibold">LinkedIn:</span>
                        </div>
                        <a href="https://linkedin.com/in/cornelio-mbongo" target="_blank" rel="noopener noreferrer" className="ms-4 text-decoration-none">
                          linkedin.com/in/cornelio-mbongo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
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
                src="https://static.scriptorserver.com/apdc/share/2024-08/2024-08-02113539_a8367704-2df5-4c69-916d-9766cbb5d3f0$$3d51dda4-e809-4a80-a7a9-bae6ef7feab4$$1be79718-0476-4cf5-848b-406244820b33$$BigImage$$pt$$1.jpg"
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

              <motion.p><strong>Visão:</strong> Tornarmo-nos uma empresa de nível mundial, na área de ciber-segurança/segurança da informação, em Angola</motion.p>

              <motion.p><strong>Missão:</strong> Desenvolvimento e implementação de serviços avançados de segurança para as TICs, permitindo aos nossos clientes serem resilientes face as ameaças e riscos que enfrentam, de maneira que o seu negócio não seja afectado por elas.</motion.p>

              <motion.p><strong>Valores:</strong> Os nossos valores são principalmente os da Integridade, excelência operacional, a perseverança, a paixão para fazer a diferença, e o desenvolvimento pessoal e profissional dos nossos colaboradores.</motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.footer className="py-4 footer bg-black text-center text-light" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <div className="container">
          <div className="mb-2">TICNES® Augmented Ingenuity</div>
          <div className="mb-3 mt-3 d-flex justify-content-center gap-3">
            <a href="https://www.facebook.com/ticnes" target="_blank" rel="noopener noreferrer" style={{ color: "#aaa" }}><FaFacebook size={22} /></a>
            <a href="https://www.instagram.com/ticnes_cyber_security/" target="_blank" rel="noopener noreferrer" style={{ color: "#aaa" }}><FaInstagram size={22} /></a>
            <a href="https://wa.me/953186182" target="_blank" rel="noopener noreferrer" style={{ color: "#aaa" }}><FaWhatsapp size={22} /></a>
            <a href="https://www.linkedin.com/company/ticnes-lda/posts/" target="_blank" rel="noopener noreferrer" style={{ color: "#aaa" }}><FaLinkedin size={22} /></a>
          </div>
          <small style={{ color: "#555" }}>© {new Date().getFullYear()} — Todos os direitos reservados</small>
        </div>
      </motion.footer>
    </div>
  );
}

// Componentes internos (ServiceCard e TechBadge)
function ServiceCard({ title, items }) {
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
  return (
    <motion.div className="col-md-6 col-lg-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
      <div className="card h-100 service-card p-3 border-0">
        <div className="card-body">
          <h5
            className="mb-3"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "1.15rem",
              color: "#0d6efd",
              letterSpacing: "0.3px"
            }}
          >
            {title}
          </h5>
          <ul className="text-muted small" style={{ fontFamily: "'Inter', sans-serif" }}>
            {items.map((it, idx) => <li key={idx}>{it}</li>)}
          </ul>
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
        <div className="card-body d-flex align-items-center">
          {icons[name]}
          <h6 className="mb-0 fw-bold text-white fs-6" style={{ fontFamily: "'Poppins', sans-serif" }}>{name}</h6>
        </div>
      </div>
    </motion.div>
  );
}