import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Jornada Mandala em Movimento | 12 Encontros para Mulheres 40+</title>
  <meta name="description" content="Rito de Reconstrução Feminina 40+. Jornada terapêutica de 12 semanas para mulheres que desejam recuperar sua voz, limites e autonomia relacional. Turma Fundadora com vagas limitadas." />
  <meta name="keywords" content="Mandala em Movimento, Jornada terapêutica mulheres, Mulheres 40+, Focalização, Psicologia Junguiana, Contoterapia Humanista, Mulheres que Correm com os Lobos" />
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Montserrat:wght@300;400;600;700&family=Great+Vibes&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <style>
    /* ===== RESET & BASE ===== */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --vermelho: #961E1E;
      --vermelho-medio: #B02828;
      --preto: #2C0A0A;
      --ouro: #C9956A;
      --ouro-claro: #C08050;
      --prata: #9A8070;
      --verde: #5C7A5A;
      --azul: #4A6B7C;
      --branco: #FAF3EE;
      --cinza-escuro: #5A2020;
      --cinza: #8A5050;
      --cinza-medio: #9A6060;
      --creme: #F5EDE5;
      --creme-escuro: #E8D8CC;
      --bordô: #961E1E;
      --rose-gold: #B07848;
      --rosa-suave: #E8C4B8;
      /* Backgrounds clean */
      --bg-base:    #F2E8DF;
      --bg-alt:     #EDE0D5;
      --bg-deep:    #E5D5C8;
      --bg-card:    #EFE5DA;
      --bg-dark:    #961E1E;
    }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Montserrat', sans-serif;
      background: var(--bg-base) !important;
      color: #2C1A1E !important;
      overflow-x: hidden;
    }
    h1, h2, h3, h4 { font-family: 'Playfair Display', serif; }
    .section-headline {
      font-size: clamp(2rem, 5vw, 3.2rem);
      color: var(--bordô);
      text-align: center;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    #contos .section-headline { color: #E0B899; }
    #contos .section-subline { color: rgba(255,255,255,0.80); }
    .section-subline {
      text-align: center;
      color: #7A6055;
      font-size: clamp(0.95rem, 2vw, 1.15rem);
      margin-bottom: 3rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
    .btn {
      display: inline-block;
      padding: 14px 32px;
      border-radius: 50px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 1px;
      text-decoration: none;
      cursor: pointer;
      border: none;
      transition: all 0.3s ease;
      text-transform: uppercase;
    }
    .btn-primary { background: var(--rose-gold); color: #2C1A1E; box-shadow: 0 4px 20px rgba(201,149,106,0.4); }
    .btn-primary:hover { background: var(--ouro-claro); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(201,149,106,0.5); }
    .btn-secondary { background: var(--bordô); color: var(--creme); border: 2px solid var(--vermelho); }
    .btn-secondary:hover { background: #8B2540; transform: translateY(-2px); }
    .btn-outline { background: transparent; color: var(--rose-gold); border: 2px solid var(--rose-gold); }
    .btn-outline:hover { background: var(--rose-gold); color: #2C1A1E; }
    .btn-whatsapp { background: #25D366; color: var(--branco); }
    .btn-whatsapp:hover { background: #1ebe5a; transform: translateY(-2px); }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    section { padding: 90px 0; }
    .fade-in { opacity: 0; transform: translateY(40px); transition: opacity 0.8s ease, transform 0.8s ease; }
    .fade-in.visible { opacity: 1; transform: translateY(0); }
    .scroll-bar { position: fixed; top: 0; left: 0; height: 3px; background: var(--ouro); z-index: 9999; transition: width 0.1s; }

    /* ===== MANDALA SVG animada ===== */
    .mandala-bg {
      position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
      width: min(750px, 95vw); height: min(750px, 95vw);
      opacity: 0.28; pointer-events: none;
      animation: rotateSlow 90s linear infinite;
    }
    .mandala-deco {
      position: absolute; opacity: 0.08; pointer-events: none;
      animation: rotateSlow 80s linear infinite;
    }
    @keyframes rotateSlow { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
    @keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.05); } }

    /* ===== NAVBAR ===== */
    #navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      background: rgba(242,232,223,0.97);
      border-bottom: 1px solid rgba(176,120,72,0.25);
      padding: 12px 0;
      backdrop-filter: blur(10px);
      transition: padding 0.3s;
    }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; }
    .nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
    .nav-logo-icon { width: 50px; height: 50px; }
    .nav-logo-text { font-family: 'Playfair Display', serif; color: var(--bordô); font-size: 1rem; line-height: 1.2; }
    .nav-logo-text span { display: block; font-size: 0.7rem; color: var(--cinza); font-family: 'Montserrat', sans-serif; font-weight: 400; }
    .nav-menu { display: flex; list-style: none; gap: 28px; align-items: center; }
    .nav-menu a { color: #3A0808; text-decoration: none; font-size: 0.85rem; font-weight: 600; letter-spacing: 0.5px; transition: color 0.2s; text-transform: uppercase; }
    .nav-menu a:hover { color: var(--rose-gold); }
    .nav-cta { display: flex; align-items: center; gap: 10px; }
    .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 5px; }
    .hamburger span { width: 26px; height: 2px; background: var(--rose-gold); transition: all 0.3s; display: block; }
    .mobile-menu { display: none; position: fixed; top: 74px; left: 0; right: 0; background: rgba(242,232,223,0.98); z-index: 999; padding: 20px 24px 30px; border-bottom: 1px solid rgba(176,120,72,0.2); }
    .mobile-menu.open { display: block; }
    .mobile-menu ul { list-style: none; display: flex; flex-direction: column; gap: 16px; }
    .mobile-menu ul a { color: #3A0808; text-decoration: none; font-size: 1rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
    .mobile-menu ul a:hover { color: var(--rose-gold); }
    .mobile-menu .btn { width: 100%; text-align: center; margin-top: 16px; }

    /* ===== SEÇÃO 1: HERO ===== */
    #hero {
      min-height: 100vh; position: relative; display: flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, #6B0E0E 0%, #961E1E 40%, #7A1212 100%);
      overflow: hidden; padding: 100px 0 60px;
    }
    .hero-overlay {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at center, rgba(150,30,30,0.40) 0%, rgba(44,10,10,0.75) 70%);
    }
    .hero-content { position: relative; z-index: 2; text-align: center; padding: 0 24px; max-width: 900px; margin: 0 auto; }
    .hero-badge {
      display: inline-block; background: rgba(201,149,106,0.15); border: 1px solid rgba(201,149,106,0.6);
      color: var(--rose-gold); padding: 6px 20px; border-radius: 50px; font-size: 0.8rem;
      font-weight: 600; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 24px;
    }
    .hero-title {
      font-size: clamp(2.8rem, 8vw, 6rem); font-weight: 900; color: var(--creme);
      line-height: 1.05; margin-bottom: 20px;
      text-shadow: 0 2px 40px rgba(44,26,30,0.6);
    }
    .hero-title span { color: var(--rose-gold); }
    .hero-sub {
      font-size: clamp(1.1rem, 3vw, 1.6rem); color: var(--ouro-claro);
      font-weight: 600; margin-bottom: 20px; letter-spacing: 1px;
    }
    .hero-desc {
      font-family: 'Great Vibes', cursive; font-size: clamp(1.4rem, 3vw, 2rem);
      color: rgba(245,230,218,0.9); line-height: 1.6; margin-bottom: 40px;
    }
    .hero-btns { display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; margin-bottom: 50px; }
    .hero-scroll {
      animation: bounce 2s infinite;
      color: var(--rose-gold); font-size: 1.5rem; cursor: pointer;
      display: block; margin: 0 auto;
    }
    @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }
    .hero-particles { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
    .particle {
      position: absolute; width: 2px; height: 2px; background: var(--rosa-suave);
      border-radius: 50%; opacity: 0.4;
      animation: floatUp linear infinite;
    }
    @keyframes floatUp { 0%{transform:translateY(100vh) scale(0);opacity:0} 10%{opacity:0.4} 90%{opacity:0.2} 100%{transform:translateY(-20px) scale(1);opacity:0} }

    /* ===== SEÇÃO 2: SOBRE ===== */
    #sobre { background: linear-gradient(180deg, var(--bg-base) 0%, var(--bg-alt) 100%); position: relative; overflow: hidden; }
    /* Layout principal: todo o conteúdo centralizado em coluna única */
    .sobre-grid { display: flex; flex-direction: column; align-items: center; gap: 0; }
    .sobre-headline-wrap { text-align: center; margin-bottom: 16px; width: 100%; }
    .sobre-headline-wrap .section-headline { margin-bottom: 12px; }
    .sobre-headline-wrap .section-subline { margin-bottom: 0; }
    /* Facilitadora foto-citação */
    .sobre-facilitadora {
      display: flex; align-items: center; gap: 48px;
      margin: 0 auto 48px; max-width: 860px;
      background: rgba(255,255,255,0.60);
      border: 1px solid rgba(176,120,72,0.25);
      border-radius: 24px; padding: 36px 40px;
      box-shadow: 0 8px 40px rgba(150,30,30,0.08);
    }
    .sobre-foto-wrap {
      flex-shrink: 0; width: 220px;
      display: flex; flex-direction: column; align-items: center; justify-content: flex-end; gap: 10px;
    }
    .sobre-foto-wrap img {
      width: 220px; height: auto;
      border-radius: 16px;
      filter: drop-shadow(0 8px 24px rgba(150,30,30,0.20));
    }
    .sobre-foto-nome {
      display: flex; flex-direction: column; align-items: center; gap: 2px;
      background: linear-gradient(135deg, var(--vermelho), #7A1212);
      border-radius: 10px; padding: 8px 18px;
      width: 100%; text-align: center;
      box-shadow: 0 4px 16px rgba(150,30,30,0.25);
    }
    .sobre-foto-nome-titulo {
      font-size: 0.68rem; font-weight: 700; letter-spacing: 2.5px;
      text-transform: uppercase; color: rgba(255,255,255,0.75);
    }
    .sobre-foto-nome-nome {
      font-family: 'Playfair Display', serif;
      font-size: 1.05rem; font-weight: 700;
      color: #E0B899; letter-spacing: 0.5px;
    }
    .sobre-citacao {
      flex: 1;
    }
    .sobre-citacao-quote {
      font-family: 'Great Vibes', cursive;
      font-size: clamp(1.4rem, 2.5vw, 1.9rem);
      color: var(--vermelho); line-height: 1.55;
      margin-bottom: 16px;
    }
    .sobre-citacao-autor {
      font-size: 0.78rem; font-weight: 700; letter-spacing: 2px;
      text-transform: uppercase; color: var(--rose-gold); margin-bottom: 12px;
    }
    .sobre-citacao-desc {
      font-size: 0.92rem; color: #5A3030; line-height: 1.75;
    }
    .sobre-citacao-desc strong { color: var(--vermelho); }
    /* Intro centralizado */
    .sobre-intro { text-align: center; max-width: 720px; margin: 0 auto 40px; }
    .sobre-intro p { color: #3A2820; font-size: 1.05rem; line-height: 1.9; margin-bottom: 14px; }
    .sobre-intro p strong { color: var(--bordô); }
    /* Fundamentos em 3 colunas lado a lado */
    .sobre-badges { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 0; width: 100%; }
    .sobre-badge {
      display: flex; flex-direction: column; align-items: center; text-align: center; gap: 14px;
      background: rgba(255,255,255,0.55); border: 1px solid rgba(176,120,72,0.2);
      border-radius: 16px; padding: 32px 24px;
      transition: border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s;
      position: relative; overflow: hidden;
    }
    .sobre-badge::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
      background: linear-gradient(90deg, var(--rose-gold), var(--bordô));
      border-radius: 16px 16px 0 0;
    }
    .sobre-badge:hover { border-color: var(--rose-gold); background: rgba(255,255,255,0.85); transform: translateY(-6px); box-shadow: 0 12px 36px rgba(176,120,72,0.2); }
    .sobre-badge-icon {
      flex-shrink: 0; width: 72px; height: 72px;
      background: rgba(201,149,106,0.12); border: 1.5px solid rgba(201,149,106,0.35);
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      transition: background 0.3s, transform 0.3s;
    }
    .sobre-badge:hover .sobre-badge-icon { background: rgba(201,149,106,0.25); transform: scale(1.1) rotate(5deg); }
    .sobre-badge-icon svg { width: 36px; height: 36px; }
    .sobre-badge-subtitle { color: var(--ouro-claro); font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; opacity: 0.85; }
    .sobre-badge-title { color: var(--rose-gold); font-weight: 700; font-size: 1rem; line-height: 1.4; }
    .sobre-badge-text { color: #6A5045; font-size: 0.85rem; line-height: 1.65; }

    /* Caixa de estrutura do encontro – largura total */
    .espiral-box {
      background: rgba(255,255,255,0.5);
      border: 1px solid rgba(176,120,72,0.25); border-radius: 16px; padding: 36px 40px;
      width: 100%; box-sizing: border-box;
    }
    .espiral-title {
      color: var(--rose-gold); font-size: 1.3rem; font-weight: 700; margin-bottom: 28px;
      text-align: center; display: flex; align-items: center; justify-content: center; gap: 12px;
    }
    .espiral-title-icon {
      width: 36px; height: 36px; background: rgba(201,149,106,0.15);
      border: 1px solid rgba(201,149,106,0.4); border-radius: 50%;
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .espiral-title-icon svg { width: 20px; height: 20px; }
    /* 4 passos em linha horizontal */
    .espiral-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
    .espiral-step {
      background: rgba(255,255,255,0.6); border-radius: 14px; padding: 20px 16px;
      border: 1px solid rgba(176,120,72,0.18);
      transition: border-color 0.3s, background 0.3s, transform 0.3s;
      display: flex; flex-direction: column; gap: 12px; text-align: center; align-items: center;
    }
    .espiral-step:hover { border-color: rgba(176,120,72,0.5); background: rgba(255,255,255,0.9); transform: translateY(-4px); box-shadow: 0 6px 24px rgba(176,120,72,0.15); }
    .espiral-step-header { display: flex; flex-direction: column; align-items: center; gap: 10px; }
    .espiral-step-icon {
      width: 48px; height: 48px; flex-shrink: 0;
      border-radius: 14px; display: flex; align-items: center; justify-content: center;
      border: 1px solid rgba(201,149,106,0.3);
    }
    .espiral-step-icon svg { width: 26px; height: 26px; }
    .espiral-step-icon-1 { background: rgba(155,58,80,0.2); border-color: rgba(155,58,80,0.5); }
    .espiral-step-icon-2 { background: rgba(201,149,106,0.15); border-color: rgba(201,149,106,0.4); }
    .espiral-step-icon-3 { background: rgba(92,122,90,0.2); border-color: rgba(92,122,90,0.5); }
    .espiral-step-icon-4 { background: rgba(224,184,153,0.15); border-color: rgba(224,184,153,0.4); }
    .espiral-step-num { font-size: 0.65rem; font-weight: 800; color: rgba(201,149,106,0.6); letter-spacing: 1px; }
    .espiral-step-label { color: var(--rose-gold); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; line-height: 1.2; }
    .espiral-step-text { color: #6A5045; font-size: 0.87rem; font-style: italic; line-height: 1.5; }

    /* ===== SEÇÃO 3: FAIXA ETÁRIA ===== */
    #faixa { background: linear-gradient(135deg, #7A1212 0%, #961E1E 50%, #7A1212 100%); position: relative; overflow: hidden; }
    .faixa-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
    .faixa-card {
      border-radius: 16px; padding: 30px 22px; text-align: center;
      position: relative; overflow: hidden; transition: transform 0.3s;
      cursor: default;
    }
    .faixa-card:hover { transform: translateY(-6px); }
    .faixa-card-1 { background: linear-gradient(135deg, #961E1E, #6B0E0E); border: 1px solid rgba(201,149,106,0.5); }
    .faixa-card-2 { background: linear-gradient(135deg, #7A1414, #5C0A0A); border: 1px solid rgba(201,149,106,0.4); }
    .faixa-card-3 { background: linear-gradient(135deg, #861A1A, #650E0E); border: 1px solid rgba(201,149,106,0.4); }
    .faixa-card-4 { background: linear-gradient(135deg, #AC2222, #7A1414); border: 1px solid rgba(201,149,106,0.5); }
    .faixa-card-especial::after {
      content: 'ESPECIAL ATENÇÃO'; position: absolute; top: 14px; right: -28px;
      background: var(--rose-gold); color: #2C1A1E; font-size: 0.6rem; font-weight: 800;
      padding: 4px 36px; transform: rotate(45deg); letter-spacing: 1px;
    }
    .faixa-num { font-family: 'Playfair Display', serif; font-size: 3.5rem; font-weight: 900; color: var(--rose-gold); line-height: 1; }
    .faixa-icon { font-size: 2rem; margin: 12px 0; display: flex; align-items: center; justify-content: center; }
    .faixa-icon svg { width: 48px; height: 48px; }
    .faixa-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; color: rgba(255,255,255,0.85); }
    .faixa-desc { font-size: 0.88rem; color: rgba(255,255,255,0.75); line-height: 1.6; }
    .faixa-msg {
      text-align: center; margin-top: 50px;
      font-family: 'Playfair Display', serif; font-size: clamp(1.2rem, 3vw, 1.7rem);
      color: rgba(255,255,255,0.9); line-height: 1.6;
    }
    .faixa-obs { text-align: center; margin-top: 16px; color: #7A6055; font-size: 0.85rem; }

    /* ===== SEÇÃO 4: CICLOS ===== */
    #ciclos { background: linear-gradient(180deg, var(--bg-alt) 0%, var(--bg-base) 100%); }
    .ciclos-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
    .ciclo-card {
      border-radius: 16px; padding: 28px 22px; text-align: center;
      cursor: pointer; transition: transform 0.3s, box-shadow 0.3s;
      position: relative; overflow: hidden;
    }
    .ciclo-card:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
    .ciclo-card-1 { background: linear-gradient(160deg, #961E1E, #6B0E0E); border: 1px solid #C9956A; }
    .ciclo-card-2 { background: linear-gradient(160deg, #7A1414, #540A0A); border: 1px solid #C9956A; }
    .ciclo-card-3 { background: linear-gradient(160deg, #861A1A, #5C0E0E); border: 1px solid #C9956A; }
    .ciclo-card-4 { background: linear-gradient(160deg, #AC2222, #7A1414); border: 1px solid #C9956A; }
    .ciclo-num { font-size: 4rem; font-weight: 900; opacity: 0.15; position: absolute; top: 10px; right: 20px; font-family: 'Playfair Display', serif; }
    .ciclo-icon { font-size: 2.5rem; margin-bottom: 14px; }
    .ciclo-period { font-size: 0.7rem; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.6); margin-bottom: 8px; }
    .ciclo-name { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 700; color: var(--ouro-claro); margin-bottom: 10px; }
    .ciclo-contos { font-size: 0.8rem; color: var(--vermelho); font-weight: 600; margin-bottom: 12px; line-height: 1.6; }
    .ciclo-desc { font-size: 0.88rem; color: rgba(245,230,218,0.85); font-style: italic; line-height: 1.5; }
    .ciclo-temas { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-top: 14px; }
    .ciclo-tema-tag { background: rgba(201,149,106,0.12); border-radius: 50px; padding: 3px 12px; font-size: 0.72rem; color: var(--creme-escuro); }
    .ciclo-expand { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
    .ciclo-card.expanded .ciclo-expand { max-height: 200px; }
    .ciclo-expand-inner { border-top: 1px solid rgba(255,255,255,0.1); margin-top: 16px; padding-top: 16px; font-size: 0.82rem; color: rgba(255,255,255,0.7); text-align: left; }
    .ciclo-msg { text-align: center; margin-top: 40px; color: #7A6055; font-style: italic; font-size: 1rem; }

    /* ===== SEÇÃO 5: 12 CONTOS (TIMELINE) ===== */
    #contos { background: linear-gradient(180deg, #7A1212 0%, #961E1E 50%, #7A1212 100%); }
    .timeline { position: relative; max-width: 1000px; margin: 0 auto; }
    .timeline::before {
      content: ''; position: absolute; left: 50%; transform: translateX(-50%);
      top: 0; bottom: 0; width: 2px;
      background: linear-gradient(180deg, #9B3A50, #C9956A, #E0B899);
    }
    .tl-item {
      display: flex; align-items: flex-start; margin-bottom: 40px;
      position: relative;
    }
    .tl-item:nth-child(odd) { flex-direction: row; }
    .tl-item:nth-child(even) { flex-direction: row-reverse; }
    .tl-card {
      width: calc(50% - 40px); background: rgba(0,0,0,0.25);
      border-radius: 12px; padding: 20px; border: 1px solid rgba(201,149,106,0.35);
      transition: border-color 0.3s, background 0.3s;
    }
    .tl-card:hover { border-color: var(--rose-gold); background: rgba(0,0,0,0.35); }
    .tl-item:nth-child(odd) .tl-card { margin-right: auto; }
    .tl-item:nth-child(even) .tl-card { margin-left: auto; }
    .tl-dot {
      position: absolute; left: 50%; transform: translateX(-50%);
      width: 40px; height: 40px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-weight: 900; font-size: 0.85rem; z-index: 2;
      border: 2px solid var(--rose-gold); background: #6B0E0E;
      color: var(--rose-gold); flex-shrink: 0;
      top: 50%; margin-top: -20px;
    }
    .tl-ciclo-1 { border-color: var(--vermelho); }
    .tl-ciclo-2 { border-color: var(--verde); }
    .tl-ciclo-3 { border-color: var(--azul); }
    .tl-ciclo-4 { border-color: var(--rose-gold); }
    .tl-num { font-size: 0.7rem; font-weight: 700; letter-spacing: 1px; color: rgba(255,255,255,0.65); text-transform: uppercase; }
    .tl-conto { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; color: #E0B899; margin: 4px 0; }
    .tl-desc { font-size: 0.85rem; color: rgba(255,255,255,0.90); margin-bottom: 6px; }
    .tl-tema { font-size: 0.8rem; color: rgba(255,255,255,0.70); font-style: italic; }
    .tl-data { font-size: 0.75rem; color: rgba(255,255,255,0.60); margin-top: 8px; }
    .tl-special { background: rgba(201,149,106,0.15); border-radius: 6px; padding: 3px 8px; font-size: 0.7rem; font-weight: 700; color: var(--rose-gold); display: inline-block; margin-top: 6px; }

    /* CONTOS MOBILE GRID */
    .contos-grid { display: none; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .conto-mini {
      background: rgba(0,0,0,0.25); border-radius: 10px; padding: 16px;
      border: 1px solid rgba(201,149,106,0.30); transition: all 0.3s;
    }
    .conto-mini:hover { border-color: var(--rose-gold); background: rgba(0,0,0,0.35); }
    .conto-mini-num { color: var(--rose-gold); font-weight: 700; font-size: 0.75rem; }
    .conto-mini-name { font-family: 'Playfair Display', serif; color: #E0B899; font-size: 0.95rem; margin: 4px 0; }
    .conto-mini-desc { color: rgba(255,255,255,0.75); font-size: 0.8rem; }

    /* ===== SEÇÃO 6: DATAS ===== */
    #datas { background: linear-gradient(180deg, var(--bg-base) 0%, var(--bg-alt) 100%); }
    .datas-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
    .datas-card {
      border-radius: 20px; padding: 40px 36px;
      position: relative; overflow: hidden;
    }
    .datas-card-vivencia {
      background: linear-gradient(135deg, rgba(107,31,50,0.12), rgba(242,232,223,0.95));
      border: 2px solid rgba(155,58,80,0.4);
    }
    .datas-card-jornada {
      background: linear-gradient(135deg, rgba(176,120,72,0.12), rgba(242,232,223,0.95));
      border: 2px solid rgba(176,120,72,0.4);
    }
    .datas-card-title { font-family: 'Playfair Display', serif; font-size: 1.8rem; color: var(--rose-gold); margin-bottom: 24px; }
    .datas-item { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
    .datas-item-icon { font-size: 1.2rem; width: 30px; text-align: center; }
    .datas-item-text { color: #3A2820; font-size: 1rem; }
    .datas-item-text strong { color: var(--rose-gold); }
    .datas-desc { color: #6A5045; font-size: 0.9rem; line-height: 1.7; margin: 20px 0; border-left: 3px solid var(--rose-gold); padding-left: 16px; }
    .datas-conto { display: inline-block; background: rgba(201,149,106,0.12); border: 1px solid rgba(201,149,106,0.5); border-radius: 8px; padding: 8px 16px; font-size: 0.85rem; color: var(--rose-gold); margin-bottom: 20px; }
    .datas-investimento { text-align: center; background: rgba(201,149,106,0.07); border-radius: 10px; padding: 16px; margin: 20px 0; }
    .datas-invest-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: var(--cinza); }
    .datas-invest-val { font-family: 'Playfair Display', serif; font-size: 2rem; color: var(--rose-gold); font-weight: 700; }
    .datas-invest-info { font-size: 0.8rem; color: #6A5045; margin-top: 6px; }
    .timeline-visual {
      display: flex; align-items: center; justify-content: center; gap: 0;
      margin-top: 50px; padding: 30px 20px;
      background: rgba(255,255,255,0.5); border-radius: 16px; border: 1px solid rgba(176,120,72,0.2);
      overflow-x: auto;
    }
    .tl-vis-item { text-align: center; flex-shrink: 0; }
    .tl-vis-dot { width: 16px; height: 16px; border-radius: 50%; background: var(--rose-gold); margin: 0 auto 8px; }
    .tl-vis-line { width: 60px; height: 2px; background: linear-gradient(90deg, var(--rose-gold), var(--bordô)); flex-shrink: 0; margin-top: 0; align-self: flex-start; margin-top: 7px; }
    .tl-vis-date { font-size: 0.8rem; color: var(--rose-gold); font-weight: 700; }
    .tl-vis-label { font-size: 0.7rem; color: var(--cinza); margin-top: 4px; }

    /* ===== SEÇÃO 7: DEPOIMENTOS ===== */
    #depoimentos { background: var(--bg-deep); }
    .carousel { position: relative; overflow: hidden; }
    .carousel-track { display: flex; transition: transform 0.5s ease; }
    .carousel-slide { min-width: 100%; padding: 0 20px; }
    .dep-card {
      max-width: 700px; margin: 0 auto;
      background: linear-gradient(135deg, rgba(255,255,255,0.85), rgba(242,232,223,0.95));
      border: 2px solid rgba(176,120,72,0.3); border-radius: 20px; padding: 40px;
      text-align: center; position: relative;
    }
    .dep-card::before {
      content: '"'; position: absolute; top: -10px; left: 30px;
      font-size: 8rem; color: var(--rose-gold); opacity: 0.15; font-family: 'Playfair Display', serif;
      line-height: 1;
    }
    .dep-avatar {
      width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--bordô), var(--rose-gold));
      display: flex; align-items: center; justify-content: center;
      font-size: 1.8rem; font-family: 'Playfair Display', serif; color: var(--creme); font-weight: 700;
      margin: 0 auto 16px; border: 3px solid var(--rose-gold);
    }
    .dep-stars { color: var(--rose-gold); font-size: 1.2rem; margin-bottom: 8px; }
    .dep-name { color: var(--bordô); font-weight: 700; margin-bottom: 16px; font-size: 0.95rem; }
    .dep-text { font-family: 'Great Vibes', cursive; font-size: 1.6rem; color: #3A2820; line-height: 1.6; }
    .carousel-controls { display: flex; align-items: center; justify-content: center; gap: 20px; margin-top: 30px; }
    .carousel-btn {
      width: 44px; height: 44px; border-radius: 50%; background: rgba(201,149,106,0.1);
      border: 1px solid rgba(201,149,106,0.5); color: var(--rose-gold); cursor: pointer;
      display: flex; align-items: center; justify-content: center; font-size: 1rem;
      transition: all 0.3s;
    }
    .carousel-btn:hover { background: var(--rose-gold); color: #2C1A1E; }
    .carousel-dots { display: flex; gap: 8px; }
    .carousel-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(201,149,106,0.3); cursor: pointer; transition: background 0.3s; }
    .carousel-dot.active { background: var(--rose-gold); }

    /* ===== SEÇÃO 8: FAQ ===== */
    #faq { background: linear-gradient(180deg, var(--bg-alt) 0%, var(--bg-base) 100%); }
    .faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px; }
    .faq-item { border: 1px solid rgba(201,149,106,0.2); border-radius: 12px; overflow: hidden; }
    .faq-question {
      display: flex; align-items: center; justify-content: space-between;
      padding: 20px 24px; cursor: pointer; background: rgba(255,255,255,0.4);
      transition: background 0.3s;
    }
    .faq-question:hover { background: rgba(255,255,255,0.7); }
    .faq-question.open { background: rgba(255,255,255,0.75); border-bottom: 1px solid rgba(176,120,72,0.2); }
    .faq-q-text { color: #3A2820; font-weight: 600; font-size: 0.95rem; }
    .faq-icon { color: var(--rose-gold); font-size: 0.9rem; transition: transform 0.3s; flex-shrink: 0; margin-left: 12px; }
    .faq-question.open .faq-icon { transform: rotate(180deg); }
    .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
    .faq-answer.open { max-height: 300px; }
    .faq-answer-inner { padding: 20px 24px; color: #4A3028; font-size: 0.92rem; line-height: 1.8; }
    .faq-answer-inner strong { color: var(--rose-gold); }

    /* ===== SEÇÃO 9: CTA FINAL ===== */
    #cta-final {
      background: linear-gradient(135deg, #6B0E0E 0%, #961E1E 50%, #6B0E0E 100%);
      position: relative; overflow: hidden; text-align: center; padding: 100px 0;
    }
    .cta-final-content { position: relative; z-index: 2; }
    .cta-title { font-size: clamp(2.5rem, 7vw, 4.5rem); color: var(--creme); margin-bottom: 16px; font-weight: 900; }
    .cta-sub { font-size: clamp(1.1rem, 2.5vw, 1.5rem); color: var(--ouro-claro); margin-bottom: 40px; }
    .cta-info { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin-bottom: 40px; }
    .cta-info-item { display: flex; align-items: center; gap: 8px; color: rgba(245,230,218,0.9); font-size: 0.95rem; }
    .cta-info-item i { color: var(--rose-gold); }
    .cta-btns { display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; margin-bottom: 30px; }
    .cta-obs { font-size: 0.82rem; color: var(--cinza); max-width: 500px; margin: 0 auto; }
    .sticky-cta {
      position: fixed; bottom: 24px; right: 24px; z-index: 800;
      transition: opacity 0.3s, transform 0.3s; display: flex; gap: 10px;
    }
    .sticky-cta.hidden { opacity: 0; pointer-events: none; transform: translateY(20px); }

    /* ===== SEÇÃO 10: FOOTER ===== */
    #footer { background: #6B0E0E; border-top: 1px solid rgba(201,149,106,0.3); padding: 60px 0 20px; }
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 40px; }
    .footer-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
    .footer-logo svg { width: 50px; height: 50px; }
    .footer-logo-text { font-family: 'Playfair Display', serif; color: var(--rose-gold); font-size: 1.1rem; }
    .footer-desc { color: rgba(245,230,218,0.7); font-size: 0.87rem; line-height: 1.7; }
    .footer-col-title { color: var(--rose-gold); font-weight: 700; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; }
    .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 8px; }
    .footer-col ul li { color: var(--cinza); font-size: 0.87rem; }
    .footer-col ul li a { color: var(--cinza); text-decoration: none; transition: color 0.2s; }
    .footer-col ul li a:hover { color: var(--rose-gold); }
    .footer-social { display: flex; gap: 12px; margin-top: 10px; }
    .footer-social a {
      width: 38px; height: 38px; border-radius: 50%; border: 1px solid rgba(201,149,106,0.3);
      display: flex; align-items: center; justify-content: center; color: var(--cinza);
      font-size: 0.9rem; text-decoration: none; transition: all 0.3s;
    }
    .footer-social a:hover { border-color: var(--rose-gold); color: var(--rose-gold); background: rgba(201,149,106,0.1); }
    .footer-bar { border-top: 1px solid rgba(255,255,255,0.06); padding-top: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: gap; }
    .footer-copy { color: rgba(255,255,255,0.4); font-size: 0.78rem; }
    .footer-links { display: flex; gap: 16px; }
    .footer-links a { color: rgba(245,230,218,0.4); font-size: 0.75rem; text-decoration: none; }
    .footer-links a:hover { color: var(--rose-gold); }
    .footer-heart { color: rgba(255,255,255,0.3); font-size: 0.75rem; margin-top: 8px; text-align: center; }

    /* ===== POPUP ===== */
    .popup-overlay {
      position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 10000;
      display: flex; align-items: center; justify-content: center; padding: 20px;
      opacity: 0; pointer-events: none; transition: opacity 0.4s;
    }
    .popup-overlay.show { opacity: 1; pointer-events: all; }
    .popup-box {
      background: linear-gradient(135deg, #F2E8DF, #EDE0D5);
      border: 2px solid rgba(201,149,106,0.5); border-radius: 20px;
      padding: 36px 40px 36px; max-width: 460px; width: 100%;
      position: relative; box-sizing: border-box;
      transform: scale(0.9); transition: transform 0.4s;
      overflow: hidden;
    }
    .popup-overlay.show .popup-box { transform: scale(1); }
    .popup-close { position: absolute; top: 14px; right: 18px; background: none; border: none; color: var(--cinza); font-size: 1.5rem; cursor: pointer; transition: color 0.2s; z-index: 2; }
    .popup-close:hover { color: var(--ouro); }
    .popup-inner { display: table; width: 100%; }
    .popup-mandala-wrap { display: block; text-align: center; margin: 0 0 12px 0; line-height: 0; }
    .popup-mandala-wrap svg { animation: rotateSlow 40s linear infinite; }
    .popup-title { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: var(--bordô); margin-bottom: 8px; text-align: center; display: block; }
    .popup-text { color: #6A5045; font-size: 0.9rem; line-height: 1.6; margin-bottom: 24px; text-align: center; display: block; }
    .popup-form { display: flex; flex-direction: column; gap: 12px; width: 100%; }
    .popup-form input {
      padding: 12px 16px; border-radius: 8px; border: 1px solid rgba(176,120,72,0.3);
      background: rgba(255,255,255,0.7); color: #3A2820; font-size: 0.9rem;
      outline: none; transition: border-color 0.2s; width: 100%; box-sizing: border-box;
    }
    .popup-form input:focus { border-color: var(--rose-gold); }
    .popup-form input::placeholder { color: rgba(90,60,40,0.4); }

    /* ===== PROGRESS BAR ===== */
    #progress-bar { position: fixed; top: 0; left: 0; height: 3px; background: linear-gradient(90deg, var(--bordô), var(--rose-gold), var(--ouro-claro)); z-index: 9999; width: 0%; transition: width 0.1s; }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 1024px) {
      .ciclos-grid { grid-template-columns: repeat(2, 1fr); }
      .faixa-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 900px) {
      .sobre-badges { grid-template-columns: 1fr; }
      .sobre-facilitadora { flex-direction: column; align-items: center; text-align: center; padding: 28px 24px; gap: 24px; }
      .sobre-foto-wrap { width: 180px; }
      .sobre-foto-wrap img { width: 180px; }
      .espiral-steps { grid-template-columns: repeat(2, 1fr); }
      .datas-grid { grid-template-columns: 1fr; }
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .timeline { display: none; }
      .contos-grid { display: grid; }
      .timeline-visual { overflow-x: auto; }
      #monica .fade-in > div { flex-direction: column !important; align-items: center !important; }
      #monica img { width: 180px !important; }
    }
    @media (max-width: 768px) {
      .nav-menu, .nav-cta { display: none; }
      .hamburger { display: flex; }
      section { padding: 60px 0; }
      .ciclos-grid { grid-template-columns: 1fr; max-width: 380px; margin: 0 auto; }
      .faixa-grid { grid-template-columns: 1fr 1fr; }
      .footer-grid { grid-template-columns: 1fr; }
      .espiral-steps { grid-template-columns: repeat(2, 1fr); }
      .cta-info { flex-direction: column; align-items: center; }
      .footer-bar { flex-direction: column; gap: 10px; text-align: center; }
      .sticky-cta { bottom: 16px; right: 16px; flex-direction: column; align-items: flex-end; }
      .contos-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 640px) {
      .sobre-para-quem-grid { grid-template-columns: 1fr !important; }
      .sobre-diferenciais { flex-direction: column; align-items: center; }
    }
    @media (max-width: 480px) {
      .faixa-grid { grid-template-columns: 1fr; max-width: 320px; margin: 0 auto; }
      .contos-grid { grid-template-columns: 1fr; }
      .hero-btns { flex-direction: column; align-items: center; }
      .sobre-badges { grid-template-columns: 1fr; }
      .sobre-facilitadora { flex-direction: column; align-items: center; text-align: center; }
      .sobre-foto-wrap { width: 160px; }
      .sobre-foto-wrap img { width: 160px; }
      .espiral-steps { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

<!-- PROGRESS BAR -->
<div id="progress-bar"></div>

<!-- ===== NAVBAR ===== -->
<nav id="navbar">
  <div class="container">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo">
        <svg class="nav-logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="#C9956A" stroke-width="2" fill="none"/>
          <circle cx="50" cy="50" r="36" stroke="#7B2D3E" stroke-width="1.5" fill="none"/>
          <circle cx="50" cy="50" r="24" stroke="#C9956A" stroke-width="1.5" fill="none"/>
          <circle cx="50" cy="50" r="6" fill="#C9956A"/>
          <g stroke="#C9956A" stroke-width="1" opacity="0.7">
            <line x1="50" y1="2" x2="50" y2="98"/>
            <line x1="2" y1="50" x2="98" y2="50"/>
            <line x1="15" y1="15" x2="85" y2="85"/>
            <line x1="85" y1="15" x2="15" y2="85"/>
          </g>
          <g fill="#C9956A" opacity="0.6">
            <circle cx="50" cy="14" r="3"/>
            <circle cx="86" cy="50" r="3"/>
            <circle cx="50" cy="86" r="3"/>
            <circle cx="14" cy="50" r="3"/>
            <circle cx="73" cy="27" r="2"/>
            <circle cx="73" cy="73" r="2"/>
            <circle cx="27" cy="73" r="2"/>
            <circle cx="27" cy="27" r="2"/>
          </g>
        </svg>
        <div class="nav-logo-text">
          Mandala em Movimento
          <span>Jornada Terapêutica</span>
        </div>
      </a>
      <ul class="nav-menu">
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#monica">Mônica</a></li>
        <li><a href="#para-quem">Para Quem</a></li>
        <li><a href="#ciclos">Ciclos</a></li>
        <li><a href="#contos">Contos</a></li>
        <li><a href="#datas">Datas</a></li>
        <li><a href="#investimento">Investimento</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <div class="nav-cta">
        <a href="https://forms.gle/5YFSvrEpk55tvBcH8" target="_blank" class="btn btn-primary" style="padding:10px 22px;font-size:0.8rem">INSCREVER-SE AGORA</a>
      </div>
      <div class="hamburger" id="hamburger" onclick="toggleMenu()">
        <span></span><span></span><span></span>
      </div>
    </div>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <ul>
    <li><a href="#sobre" onclick="closeMenu()">Sobre</a></li>
    <li><a href="#monica" onclick="closeMenu()">Mônica</a></li>
    <li><a href="#para-quem" onclick="closeMenu()">Para Quem</a></li>
    <li><a href="#ciclos" onclick="closeMenu()">Ciclos</a></li>
    <li><a href="#contos" onclick="closeMenu()">Contos</a></li>
    <li><a href="#datas" onclick="closeMenu()">Datas</a></li>
    <li><a href="#investimento" onclick="closeMenu()">Investimento</a></li>
    <li><a href="#faq" onclick="closeMenu()">FAQ</a></li>
  </ul>
  <a href="https://forms.gle/5YFSvrEpk55tvBcH8" target="_blank" class="btn btn-primary" onclick="closeMenu()">INSCREVER-SE AGORA</a>
</div>

<!-- ===== SEÇÃO 1: HERO ===== -->
<section id="hero">
  <div class="hero-overlay"></div>
  <!-- Mandala dos 12 Contos animada -->
  <svg class="mandala-bg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="mgCenter" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#C9956A" stop-opacity="0.4"/>
        <stop offset="50%" stop-color="#7B2D3E" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#2C1A1E" stop-opacity="0"/>
      </radialGradient>
      <!-- Caminho circular para texto curvo -->
      <path id="textRing1" d="M 250,250 m -195,0 a 195,195 0 1,1 390,0 a 195,195 0 1,1 -390,0" fill="none"/>
      <path id="textRing2" d="M 250,250 m -165,0 a 165,165 0 1,1 330,0 a 165,165 0 1,1 -330,0" fill="none"/>
      <filter id="mgGlow">
        <feGaussianBlur stdDeviation="1.5" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <!-- Fundo radial suave -->
    <circle cx="250" cy="250" r="245" fill="url(#mgCenter)"/>

    <!-- Anéis concêntricos -->
    <circle cx="250" cy="250" r="240" stroke="#C9956A" stroke-width="1.2" fill="none" opacity="0.7"/>
    <circle cx="250" cy="250" r="225" stroke="#7B2D3E" stroke-width="0.5" fill="none" opacity="0.5" stroke-dasharray="4,4"/>
    <circle cx="250" cy="250" r="210" stroke="#7B2D3E" stroke-width="1.8" fill="none" opacity="0.8"/>
    <circle cx="250" cy="250" r="195" stroke="#C9956A" stroke-width="0.5" fill="none" opacity="0.4" stroke-dasharray="3,6"/>
    <circle cx="250" cy="250" r="175" stroke="#C9956A" stroke-width="1" fill="none" opacity="0.6"/>
    <circle cx="250" cy="250" r="145" stroke="#E0B899" stroke-width="1.4" fill="none" opacity="0.7"/>
    <circle cx="250" cy="250" r="125" stroke="#C9956A" stroke-width="0.5" fill="none" opacity="0.4" stroke-dasharray="2,5"/>
    <circle cx="250" cy="250" r="110" stroke="#7B2D3E" stroke-width="1.2" fill="none" opacity="0.6"/>
    <circle cx="250" cy="250" r="90"  stroke="#E0B899" stroke-width="0.6" fill="none" opacity="0.4" stroke-dasharray="3,4"/>
    <circle cx="250" cy="250" r="75"  stroke="#C9956A" stroke-width="1.8" fill="none" opacity="0.8"/>
    <circle cx="250" cy="250" r="56"  stroke="#E0B899" stroke-width="0.8" fill="none" opacity="0.5"/>
    <circle cx="250" cy="250" r="42"  stroke="#E0B899" stroke-width="1.2" fill="none" opacity="0.7"/>
    <circle cx="250" cy="250" r="28"  stroke="#C9956A" stroke-width="0.6" fill="none" opacity="0.5"/>
    <circle cx="250" cy="250" r="16"  fill="#C9956A" opacity="0.85"/>
    <circle cx="250" cy="250" r="10"  fill="#7B2D3E" opacity="0.95"/>
    <circle cx="250" cy="250" r="5"   fill="#E0B899" opacity="1"/>

    <!-- Raios da mandala (12 direções = 30° cada) -->
    <g stroke="#C9956A" stroke-width="0.8" opacity="0.45">
      <line x1="250" y1="10"  x2="250" y2="490"/>
      <line x1="10"  y1="250" x2="490" y2="250"/>
      <line x1="73"  y1="73"  x2="427" y2="427"/>
      <line x1="427" y1="73"  x2="73"  y2="427"/>
      <line x1="10"  y1="160" x2="490" y2="340"/>
      <line x1="10"  y1="340" x2="490" y2="160"/>
      <line x1="160" y1="10"  x2="340" y2="490"/>
      <line x1="340" y1="10"  x2="160" y2="490"/>
      <line x1="36"  y1="113" x2="464" y2="387"/>
      <line x1="36"  y1="387" x2="464" y2="113"/>
      <line x1="113" y1="36"  x2="387" y2="464"/>
      <line x1="387" y1="36"  x2="113" y2="464"/>
    </g>

    <!-- Pétalas decorativas (anel médio) -->
    <g opacity="0.35" fill="#C9956A">
      <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(0 250 250)"/>
      <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(30 250 250)"/>
      <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(60 250 250)"/>
      <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(90 250 250)"/>
      <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(120 250 250)"/>
      <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(150 250 250)"/>
      <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(180 250 250)"/>
      <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(210 250 250)"/>
      <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(240 250 250)"/>
      <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(270 250 250)"/>
      <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(300 250 250)"/>
      <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(330 250 250)"/>
    </g>

    <!-- Losangos no anel interno -->
    <g fill="none" stroke="#E0B899" stroke-width="1" opacity="0.55">
      <polygon points="250,208 258,216 250,224 242,216" transform="rotate(0 250 250)"/>
      <polygon points="250,208 258,216 250,224 242,216" transform="rotate(30 250 250)"/>
      <polygon points="250,208 258,216 250,224 242,216" transform="rotate(60 250 250)"/>
      <polygon points="250,208 258,216 250,224 242,216" transform="rotate(90 250 250)"/>
      <polygon points="250,208 258,216 250,224 242,216" transform="rotate(120 250 250)"/>
      <polygon points="250,208 258,216 250,224 242,216" transform="rotate(150 250 250)"/>
      <polygon points="250,208 258,216 250,224 242,216" transform="rotate(180 250 250)"/>
      <polygon points="250,208 258,216 250,224 242,216" transform="rotate(210 250 250)"/>
      <polygon points="250,208 258,216 250,224 242,216" transform="rotate(240 250 250)"/>
      <polygon points="250,208 258,216 250,224 242,216" transform="rotate(270 250 250)"/>
      <polygon points="250,208 258,216 250,224 242,216" transform="rotate(300 250 250)"/>
      <polygon points="250,208 258,216 250,224 242,216" transform="rotate(330 250 250)"/>
    </g>

    <!-- ===== 12 CONTOS — anel externo (r=210) — ícones SVG realistas ===== -->

    <!-- Conto 01: La Loba — LOBO (0°) -->
    <g transform="rotate(0 250 250)" filter="url(#mgGlow)">
      <circle cx="250" cy="42" r="26" fill="#1A0E12" stroke="#C9956A" stroke-width="1.8" opacity="0.97"/>
      <circle cx="250" cy="42" r="23" fill="none" stroke="#C9956A" stroke-width="0.5" opacity="0.4"/>
      <!-- cabeça do lobo - focinho, orelhas, olhos -->
      <g transform="translate(238,30)" stroke="#C9956A" stroke-width="1.1" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <!-- Orelhas pontudas -->
        <polygon points="3,0 0,8 6,6" fill="#C9956A" opacity="0.7"/>
        <polygon points="21,0 18,6 24,8" fill="#C9956A" opacity="0.7"/>
        <!-- Cabeça oval -->
        <ellipse cx="12" cy="13" rx="9" ry="8" fill="#2C1A1E" stroke="#C9956A" stroke-width="1.2"/>
        <!-- Focinho -->
        <ellipse cx="12" cy="17" rx="4" ry="2.5" fill="#1A0E12" stroke="#C9956A" stroke-width="0.9"/>
        <!-- Nariz -->
        <ellipse cx="12" cy="15.5" rx="2" ry="1.2" fill="#C9956A" opacity="0.9"/>
        <!-- Olhos - dois pontos brilhantes -->
        <circle cx="8.5" cy="11" r="1.5" fill="#E0B899" opacity="0.95"/>
        <circle cx="15.5" cy="11" r="1.5" fill="#E0B899" opacity="0.95"/>
        <circle cx="8.5" cy="11" r="0.5" fill="#1A0E12"/>
        <circle cx="15.5" cy="11" r="0.5" fill="#1A0E12"/>
        <!-- Boca aberta com presas -->
        <path d="M9,18.5 Q12,21 15,18.5" stroke="#C9956A" stroke-width="0.8" fill="none"/>
        <line x1="11" y1="18.5" x2="10.5" y2="21" stroke="#E0B899" stroke-width="0.8"/>
        <line x1="13" y1="18.5" x2="13.5" y2="21" stroke="#E0B899" stroke-width="0.8"/>
      </g>
    </g>

    <!-- Conto 02: Barba-Azul — CHAVE ORNAMENTAL (30°) -->
    <g transform="rotate(30 250 250)" filter="url(#mgGlow)">
      <circle cx="250" cy="42" r="26" fill="#1A0E12" stroke="#E0B899" stroke-width="1.8" opacity="0.97"/>
      <circle cx="250" cy="42" r="23" fill="none" stroke="#E0B899" stroke-width="0.5" opacity="0.4"/>
      <g transform="translate(239,28)" stroke="#E0B899" stroke-width="1.4" fill="none" stroke-linecap="round">
        <!-- Anel da chave -->
        <circle cx="12" cy="7" r="6" stroke="#E0B899" stroke-width="1.6" fill="none"/>
        <circle cx="12" cy="7" r="3" stroke="#C9956A" stroke-width="1" fill="none"/>
        <!-- Haste da chave -->
        <line x1="12" y1="13" x2="12" y2="26" stroke="#E0B899" stroke-width="1.6"/>
        <!-- Dentes da chave -->
        <line x1="12" y1="18" x2="16" y2="18" stroke="#E0B899" stroke-width="1.4"/>
        <line x1="12" y1="21.5" x2="15" y2="21.5" stroke="#E0B899" stroke-width="1.4"/>
        <line x1="12" y1="24.5" x2="16" y2="24.5" stroke="#E0B899" stroke-width="1.4"/>
        <!-- Ornamento topo -->
        <circle cx="12" cy="7" r="1.5" fill="#E0B899" opacity="0.8"/>
      </g>
    </g>

    <!-- Conto 03: Vasalisa — BONECA/MATRIOSKA (60°) -->
    <g transform="rotate(60 250 250)" filter="url(#mgGlow)">
      <circle cx="250" cy="42" r="26" fill="#1A0E12" stroke="#C9956A" stroke-width="1.8" opacity="0.97"/>
      <circle cx="250" cy="42" r="23" fill="none" stroke="#C9956A" stroke-width="0.5" opacity="0.4"/>
      <g transform="translate(239,28)" stroke="#C9956A" stroke-width="1.1" fill="none" stroke-linecap="round">
        <!-- Cabeça redonda -->
        <circle cx="12" cy="7" r="5.5" fill="#2C1A1E" stroke="#C9956A" stroke-width="1.3"/>
        <!-- Rosto - olhos e boca suave -->
        <circle cx="10" cy="6.5" r="1" fill="#E0B899" opacity="0.9"/>
        <circle cx="14" cy="6.5" r="1" fill="#E0B899" opacity="0.9"/>
        <path d="M10,9.5 Q12,11 14,9.5" stroke="#C9956A" stroke-width="0.9" fill="none"/>
        <!-- Corpo em forma de barril -->
        <path d="M6,13 Q5,17 5,21 Q5,25 12,26 Q19,25 19,21 Q19,17 18,13 Q15,11 12,12 Q9,11 6,13 Z" fill="#2C1A1E" stroke="#C9956A" stroke-width="1.3"/>
        <!-- Detalhe no corpo - flor central -->
        <circle cx="12" cy="19" r="2.5" fill="none" stroke="#E0B899" stroke-width="0.8"/>
        <circle cx="12" cy="19" r="1" fill="#E0B899" opacity="0.7"/>
        <!-- Lenço na cabeça -->
        <path d="M6.5,5 Q12,2 17.5,5" stroke="#E0B899" stroke-width="1" fill="none"/>
      </g>
    </g>

    <!-- Conto 04: Manawee — CÃO/LOBO FIEL (90°) -->
    <g transform="rotate(90 250 250)" filter="url(#mgGlow)">
      <circle cx="250" cy="42" r="26" fill="#1A0E12" stroke="#E0B899" stroke-width="1.8" opacity="0.97"/>
      <circle cx="250" cy="42" r="23" fill="none" stroke="#E0B899" stroke-width="0.5" opacity="0.4"/>
      <g transform="translate(238,29)" stroke="#E0B899" stroke-width="1.1" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <!-- Corpo do cão sentado -->
        <ellipse cx="12" cy="20" rx="7" ry="5.5" fill="#2C1A1E" stroke="#E0B899" stroke-width="1.2"/>
        <!-- Cabeça -->
        <circle cx="12" cy="11" r="6" fill="#2C1A1E" stroke="#E0B899" stroke-width="1.2"/>
        <!-- Orelhas caídas -->
        <path d="M6,8 Q4,11 6,14" stroke="#E0B899" stroke-width="1.1" fill="#2C1A1E"/>
        <path d="M18,8 Q20,11 18,14" stroke="#E0B899" stroke-width="1.1" fill="#2C1A1E"/>
        <!-- Olhos -->
        <circle cx="9.5" cy="10.5" r="1.5" fill="#C9956A" opacity="0.9"/>
        <circle cx="14.5" cy="10.5" r="1.5" fill="#C9956A" opacity="0.9"/>
        <circle cx="9.5" cy="10.5" r="0.5" fill="#1A0E12"/>
        <circle cx="14.5" cy="10.5" r="0.5" fill="#1A0E12"/>
        <!-- Nariz -->
        <ellipse cx="12" cy="14" rx="2" ry="1.3" fill="#E0B899" opacity="0.8"/>
        <!-- Rabo curvado -->
        <path d="M19,17 Q25,14 23,10" stroke="#E0B899" stroke-width="1.1" fill="none"/>
        <!-- Patas dianteiras -->
        <line x1="8" y1="24" x2="7" y2="27" stroke="#E0B899" stroke-width="1.1"/>
        <line x1="16" y1="24" x2="17" y2="27" stroke="#E0B899" stroke-width="1.1"/>
      </g>
    </g>

    <!-- Conto 05: Mulher-Esqueleto — CRÂNIO ORNAMENTAL (120°) -->
    <g transform="rotate(120 250 250)" filter="url(#mgGlow)">
      <circle cx="250" cy="42" r="26" fill="#1A0E12" stroke="#C9956A" stroke-width="1.8" opacity="0.97"/>
      <circle cx="250" cy="42" r="23" fill="none" stroke="#C9956A" stroke-width="0.5" opacity="0.4"/>
      <g transform="translate(239,28)" stroke="#C9956A" stroke-width="1.1" fill="none" stroke-linecap="round">
        <!-- Crânio - forma -->
        <path d="M12,3 Q5,3 5,11 Q5,16 8,18 L8,22 Q8,24 12,24 Q16,24 16,22 L16,18 Q19,16 19,11 Q19,3 12,3 Z" fill="#2C1A1E" stroke="#C9956A" stroke-width="1.4"/>
        <!-- Maxilar - dentes -->
        <line x1="9" y1="22" x2="9" y2="24" stroke="#E0B899" stroke-width="1"/>
        <line x1="12" y1="22" x2="12" y2="25" stroke="#E0B899" stroke-width="1"/>
        <line x1="15" y1="22" x2="15" y2="24" stroke="#E0B899" stroke-width="1"/>
        <!-- Olhos - vazios ovais -->
        <ellipse cx="9" cy="11" rx="2.5" ry="2.8" fill="#C9956A" opacity="0.5"/>
        <ellipse cx="15" cy="11" rx="2.5" ry="2.8" fill="#C9956A" opacity="0.5"/>
        <ellipse cx="9" cy="11" rx="1.5" ry="1.8" fill="#1A0E12"/>
        <ellipse cx="15" cy="11" rx="1.5" ry="1.8" fill="#1A0E12"/>
        <!-- Nariz - formato osso -->
        <path d="M11,15 L10,17 L14,17 L13,15 Z" fill="#C9956A" opacity="0.6"/>
        <!-- Fissura craniana -->
        <path d="M12,3 Q11,7 12,11" stroke="#C9956A" stroke-width="0.6" opacity="0.5"/>
      </g>
    </g>

    <!-- Conto 06: Patinho Feio — CISNE ELEGANTE (150°) -->
    <g transform="rotate(150 250 250)" filter="url(#mgGlow)">
      <circle cx="250" cy="42" r="26" fill="#1A0E12" stroke="#E0B899" stroke-width="1.8" opacity="0.97"/>
      <circle cx="250" cy="42" r="23" fill="none" stroke="#E0B899" stroke-width="0.5" opacity="0.4"/>
      <g transform="translate(238,29)" stroke="#E0B899" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <!-- Corpo do cisne -->
        <path d="M4,20 Q4,26 12,26 Q20,26 22,22 Q24,18 20,16 Q16,14 12,16 Q8,18 4,20 Z" fill="#2C1A1E" stroke="#E0B899" stroke-width="1.3"/>
        <!-- Asa -->
        <path d="M8,16 Q10,11 14,13 Q16,14 14,16" fill="#2C1A1E" stroke="#C9956A" stroke-width="1"/>
        <!-- Pescoço curvo e elegante -->
        <path d="M12,16 Q8,12 9,7 Q10,3 13,3 Q16,3 15,7 Q14,10 12,13" stroke="#E0B899" stroke-width="1.5" fill="none"/>
        <!-- Cabeça pequena -->
        <circle cx="13" cy="4" r="3" fill="#2C1A1E" stroke="#E0B899" stroke-width="1.2"/>
        <!-- Bico -->
        <path d="M13,4.5 L17,5" stroke="#C9956A" stroke-width="1.2"/>
        <!-- Olho -->
        <circle cx="14.5" cy="3.5" r="1" fill="#E0B899" opacity="0.9"/>
        <circle cx="14.5" cy="3.5" r="0.4" fill="#1A0E12"/>
        <!-- Reflexo na água -->
        <path d="M5,24 Q10,22 15,24" stroke="#C9956A" stroke-width="0.7" opacity="0.5"/>
      </g>
    </g>

    <!-- Conto 07: Pele de Foca — FOCA/SELKIE (180°) -->
    <g transform="rotate(180 250 250)" filter="url(#mgGlow)">
      <circle cx="250" cy="42" r="26" fill="#1A0E12" stroke="#C9956A" stroke-width="1.8" opacity="0.97"/>
      <circle cx="250" cy="42" r="23" fill="none" stroke="#C9956A" stroke-width="0.5" opacity="0.4"/>
      <g transform="translate(238,28)" stroke="#C9956A" stroke-width="1.1" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <!-- Corpo da foca em repouso -->
        <path d="M4,18 Q4,24 12,25 Q20,24 20,18 Q20,12 16,10 Q12,9 8,10 Q4,12 4,18 Z" fill="#2C1A1E" stroke="#C9956A" stroke-width="1.3"/>
        <!-- Cauda bifurcada -->
        <path d="M16,22 Q20,26 22,28" stroke="#C9956A" stroke-width="1.2" fill="none"/>
        <path d="M16,22 Q19,27 17,30" stroke="#C9956A" stroke-width="1.2" fill="none"/>
        <!-- Cabeça levantada -->
        <ellipse cx="9" cy="9" rx="5.5" ry="5" fill="#2C1A1E" stroke="#C9956A" stroke-width="1.3"/>
        <!-- Olhos grandes e redondos (expressivos) -->
        <circle cx="7" cy="8" r="2" fill="#E0B899" opacity="0.9"/>
        <circle cx="12" cy="7.5" r="2" fill="#E0B899" opacity="0.9"/>
        <circle cx="7" cy="8" r="0.8" fill="#1A0E12"/>
        <circle cx="12" cy="7.5" r="0.8" fill="#1A0E12"/>
        <!-- Bigodes -->
        <line x1="5" y1="12" x2="0" y2="11" stroke="#E0B899" stroke-width="0.7"/>
        <line x1="5" y1="13" x2="0" y2="14" stroke="#E0B899" stroke-width="0.7"/>
        <line x1="13" y1="11" x2="18" y2="10" stroke="#E0B899" stroke-width="0.7"/>
        <!-- Nadadeiras -->
        <path d="M5,18 Q2,20 3,23" stroke="#C9956A" stroke-width="1.1" fill="none"/>
      </g>
    </g>

    <!-- Conto 08: La Llorona — MULHER CHORANDO/ONDA (210°) -->
    <g transform="rotate(210 250 250)" filter="url(#mgGlow)">
      <circle cx="250" cy="42" r="26" fill="#1A0E12" stroke="#E0B899" stroke-width="1.8" opacity="0.97"/>
      <circle cx="250" cy="42" r="23" fill="none" stroke="#E0B899" stroke-width="0.5" opacity="0.4"/>
      <g transform="translate(238,28)" stroke="#E0B899" stroke-width="1.1" fill="none" stroke-linecap="round">
        <!-- Rosto feminino de perfil -->
        <path d="M14,3 Q18,3 19,8 Q19,13 15,14 Q12,14 11,11 Q10,8 12,5 Q13,3 14,3 Z" fill="#2C1A1E" stroke="#E0B899" stroke-width="1.2"/>
        <!-- Cabelo fluindo (véu do pranto) -->
        <path d="M11,4 Q6,6 5,12 Q4,18 7,22 Q9,26 12,27" stroke="#C9956A" stroke-width="1.3" fill="none"/>
        <path d="M12,4 Q8,8 7,14 Q6,20 9,25" stroke="#C9956A" stroke-width="0.9" fill="none" opacity="0.6"/>
        <!-- Olho com lágrima -->
        <circle cx="15.5" cy="8" r="1.2" fill="#E0B899" opacity="0.9"/>
        <path d="M15.5,9.2 Q15,12 14,14" stroke="#C9956A" stroke-width="1" fill="none"/>
        <!-- Onda de água no fundo -->
        <path d="M3,24 Q7,21 11,24 Q15,27 19,24" stroke="#E0B899" stroke-width="1.2" fill="none"/>
        <path d="M3,27 Q8,24 12,27" stroke="#E0B899" stroke-width="0.8" opacity="0.5" fill="none"/>
      </g>
    </g>

    <!-- Conto 09: Deusas Sujas — CHAMA TRÍPLICE (240°) -->
    <g transform="rotate(240 250 250)" filter="url(#mgGlow)">
      <circle cx="250" cy="42" r="26" fill="#1A0E12" stroke="#C9956A" stroke-width="1.8" opacity="0.97"/>
      <circle cx="250" cy="42" r="23" fill="none" stroke="#C9956A" stroke-width="0.5" opacity="0.4"/>
      <g transform="translate(239,27)" stroke="#C9956A" stroke-width="1.2" fill="none" stroke-linecap="round">
        <!-- Chama central grande -->
        <path d="M12,28 Q7,24 8,18 Q9,13 12,10 Q12,15 14,13 Q16,11 15,7 Q18,10 18,16 Q19,22 17,26 Q15,29 12,28 Z" fill="#2C1A1E" stroke="#C9956A" stroke-width="1.4"/>
        <!-- Chama esquerda menor -->
        <path d="M7,27 Q4,23 5,18 Q6,14 8,12 Q8,16 10,14 Q11,20 9,25 Q8,27 7,27 Z" fill="#2C1A1E" stroke="#E0B899" stroke-width="1" opacity="0.8"/>
        <!-- Chama direita menor -->
        <path d="M17,27 Q20,23 19,18 Q18,14 16,12 Q16,16 14,14 Q13,20 15,25 Q16,27 17,27 Z" fill="#2C1A1E" stroke="#E0B899" stroke-width="1" opacity="0.8"/>
        <!-- Brilho central -->
        <ellipse cx="12" cy="20" rx="2" ry="3" fill="#E0B899" opacity="0.4"/>
        <!-- Base / brasas -->
        <path d="M6,28 Q12,26 18,28" stroke="#C9956A" stroke-width="1" opacity="0.7"/>
      </g>
    </g>

    <!-- Conto 10: Urso da Meia-Lua — URSO COM LUA (270°) -->
    <g transform="rotate(270 250 250)" filter="url(#mgGlow)">
      <circle cx="250" cy="42" r="26" fill="#1A0E12" stroke="#E0B899" stroke-width="1.8" opacity="0.97"/>
      <circle cx="250" cy="42" r="23" fill="none" stroke="#E0B899" stroke-width="0.5" opacity="0.4"/>
      <g transform="translate(238,28)" stroke="#E0B899" stroke-width="1.1" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <!-- Lua crescente atrás -->
        <path d="M19,6 Q22,10 20,15 Q18,19 14,19 Q17,17 18,13 Q19,9 19,6 Z" fill="#C9956A" opacity="0.3" stroke="#C9956A" stroke-width="0.8"/>
        <!-- Corpo do urso sentado -->
        <ellipse cx="11" cy="21" rx="7.5" ry="6" fill="#2C1A1E" stroke="#E0B899" stroke-width="1.3"/>
        <!-- Cabeça do urso -->
        <circle cx="11" cy="11" r="6.5" fill="#2C1A1E" stroke="#E0B899" stroke-width="1.3"/>
        <!-- Orelhas arredondadas -->
        <circle cx="6" cy="6" r="2.5" fill="#2C1A1E" stroke="#E0B899" stroke-width="1.1"/>
        <circle cx="16" cy="6" r="2.5" fill="#2C1A1E" stroke="#E0B899" stroke-width="1.1"/>
        <!-- Focinho -->
        <ellipse cx="11" cy="14" rx="3.5" ry="2.5" fill="#1A0E12" stroke="#C9956A" stroke-width="1"/>
        <ellipse cx="11" cy="13" rx="1.5" ry="1" fill="#E0B899" opacity="0.8"/>
        <!-- Olhos pequenos e brilhantes -->
        <circle cx="8" cy="10" r="1.5" fill="#E0B899" opacity="0.9"/>
        <circle cx="14" cy="10" r="1.5" fill="#E0B899" opacity="0.9"/>
        <circle cx="8" cy="10" r="0.5" fill="#1A0E12"/>
        <circle cx="14" cy="10" r="0.5" fill="#1A0E12"/>
        <!-- Patas -->
        <path d="M4,24 Q2,27 5,28" stroke="#E0B899" stroke-width="1"/>
        <path d="M18,24 Q20,27 17,28" stroke="#E0B899" stroke-width="1"/>
      </g>
    </g>

    <!-- Conto 11: Mulher Cabelos de Ouro — COROA DE ESTRELAS (300°) -->
    <g transform="rotate(300 250 250)" filter="url(#mgGlow)">
      <circle cx="250" cy="42" r="26" fill="#1A0E12" stroke="#C9956A" stroke-width="1.8" opacity="0.97"/>
      <circle cx="250" cy="42" r="23" fill="none" stroke="#C9956A" stroke-width="0.5" opacity="0.4"/>
      <g transform="translate(239,28)" stroke="#C9956A" stroke-width="1.1" fill="none" stroke-linecap="round">
        <!-- Rosto feminino -->
        <ellipse cx="12" cy="14" rx="6.5" ry="8" fill="#2C1A1E" stroke="#C9956A" stroke-width="1.3"/>
        <!-- Olhos expressivos -->
        <ellipse cx="9" cy="13" rx="1.8" ry="1.2" fill="#E0B899" opacity="0.9"/>
        <ellipse cx="15" cy="13" rx="1.8" ry="1.2" fill="#E0B899" opacity="0.9"/>
        <circle cx="9" cy="13" r="0.6" fill="#1A0E12"/>
        <circle cx="15" cy="13" r="0.6" fill="#1A0E12"/>
        <!-- Boca suave -->
        <path d="M9.5,18 Q12,20 14.5,18" stroke="#C9956A" stroke-width="1" fill="none"/>
        <!-- Cabelos fluindo em ouro -->
        <path d="M5.5,7 Q2,10 3,17 Q4,22 6,25" stroke="#E0B899" stroke-width="1.4" fill="none"/>
        <path d="M18.5,7 Q22,10 21,17 Q20,22 18,25" stroke="#E0B899" stroke-width="1.4" fill="none"/>
        <!-- Coroa de 5 estrelas -->
        <polygon points="12,2 12.8,4.5 15.5,4.5 13.3,6 14.1,8.5 12,7 9.9,8.5 10.7,6 8.5,4.5 11.2,4.5" fill="#C9956A" opacity="0.9" stroke="none"/>
        <circle cx="6" cy="5" r="1.2" fill="#E0B899" opacity="0.8"/>
        <circle cx="18" cy="5" r="1.2" fill="#E0B899" opacity="0.8"/>
        <circle cx="3" cy="9" r="0.9" fill="#C9956A" opacity="0.6"/>
        <circle cx="21" cy="9" r="0.9" fill="#C9956A" opacity="0.6"/>
      </g>
    </g>

    <!-- Conto 12: Donzela sem Mãos — LUA + MÃOS AUSENTES (330°) -->
    <g transform="rotate(330 250 250)" filter="url(#mgGlow)">
      <circle cx="250" cy="42" r="26" fill="#1A0E12" stroke="#E0B899" stroke-width="1.8" opacity="0.97"/>
      <circle cx="250" cy="42" r="23" fill="none" stroke="#E0B899" stroke-width="0.5" opacity="0.4"/>
      <g transform="translate(238,27)" stroke="#E0B899" stroke-width="1.1" fill="none" stroke-linecap="round">
        <!-- Lua cheia ao fundo -->
        <circle cx="12" cy="11" r="8.5" fill="#2C1A1E" stroke="#C9956A" stroke-width="0.8" opacity="0.5"/>
        <circle cx="12" cy="11" r="8.5" fill="none" stroke="#E0B899" stroke-width="1.2"/>
        <!-- Silhueta da donzela dentro da lua -->
        <!-- Cabeça -->
        <circle cx="12" cy="7" r="3" fill="#2C1A1E" stroke="#E0B899" stroke-width="1"/>
        <!-- Corpo -->
        <path d="M9,10 Q8,14 8,18 Q10,20 12,20 Q14,20 16,18 Q16,14 15,10" fill="#2C1A1E" stroke="#E0B899" stroke-width="1"/>
        <!-- Braços cortados - terminam sem mãos -->
        <path d="M8,12 Q5,12 4,14" stroke="#E0B899" stroke-width="1.1" fill="none"/>
        <path d="M16,12 Q19,12 20,14" stroke="#E0B899" stroke-width="1.1" fill="none"/>
        <!-- Marcas nos pulsos (ausência) -->
        <line x1="4.5" y1="13.5" x2="3" y2="15" stroke="#C9956A" stroke-width="1" opacity="0.7"/>
        <line x1="19.5" y1="13.5" x2="21" y2="15" stroke="#C9956A" stroke-width="1" opacity="0.7"/>
        <!-- Estrelas ao redor -->
        <circle cx="4" cy="6" r="1" fill="#E0B899" opacity="0.7"/>
        <circle cx="20" cy="5" r="1" fill="#E0B899" opacity="0.7"/>
        <circle cx="3" cy="17" r="0.7" fill="#C9956A" opacity="0.6"/>
        <circle cx="21" cy="17" r="0.7" fill="#C9956A" opacity="0.6"/>
        <!-- Vestido / manto em baixo -->
        <path d="M8,18 Q9,24 12,26 Q15,24 16,18" fill="#2C1A1E" stroke="#E0B899" stroke-width="1" opacity="0.8"/>
      </g>
    </g>

    <!-- Pontinhos decorativos entre os símbolos (anel externo) -->
    <g fill="#C9956A" opacity="0.7">
      <circle cx="250" cy="42" r="2" transform="rotate(15 250 250)"/>
      <circle cx="250" cy="42" r="2" transform="rotate(45 250 250)"/>
      <circle cx="250" cy="42" r="2" transform="rotate(75 250 250)"/>
      <circle cx="250" cy="42" r="2" transform="rotate(105 250 250)"/>
      <circle cx="250" cy="42" r="2" transform="rotate(135 250 250)"/>
      <circle cx="250" cy="42" r="2" transform="rotate(165 250 250)"/>
      <circle cx="250" cy="42" r="2" transform="rotate(195 250 250)"/>
      <circle cx="250" cy="42" r="2" transform="rotate(225 250 250)"/>
      <circle cx="250" cy="42" r="2" transform="rotate(255 250 250)"/>
      <circle cx="250" cy="42" r="2" transform="rotate(285 250 250)"/>
      <circle cx="250" cy="42" r="2" transform="rotate(315 250 250)"/>
      <circle cx="250" cy="42" r="2" transform="rotate(345 250 250)"/>
    </g>

    <!-- Flores de 6 pétalas nos nós internos (r=75) -->
    <g opacity="0.5" fill="#C9956A">
      <circle cx="250" cy="177" r="5"/>
      <circle cx="250" cy="177" r="5" transform="rotate(60 250 250)"/>
      <circle cx="250" cy="177" r="5" transform="rotate(120 250 250)"/>
      <circle cx="250" cy="177" r="5" transform="rotate(180 250 250)"/>
      <circle cx="250" cy="177" r="5" transform="rotate(240 250 250)"/>
      <circle cx="250" cy="177" r="5" transform="rotate(300 250 250)"/>
    </g>

    <!-- Estrela de 12 pontas no centro -->
    <g opacity="0.4" fill="#E0B899">
      <polygon points="250,215 253,230 250,245 247,230" transform="rotate(0 250 250)"/>
      <polygon points="250,215 253,230 250,245 247,230" transform="rotate(30 250 250)"/>
      <polygon points="250,215 253,230 250,245 247,230" transform="rotate(60 250 250)"/>
      <polygon points="250,215 253,230 250,245 247,230" transform="rotate(90 250 250)"/>
      <polygon points="250,215 253,230 250,245 247,230" transform="rotate(120 250 250)"/>
      <polygon points="250,215 253,230 250,245 247,230" transform="rotate(150 250 250)"/>
      <polygon points="250,215 253,230 250,245 247,230" transform="rotate(180 250 250)"/>
      <polygon points="250,215 253,230 250,245 247,230" transform="rotate(210 250 250)"/>
      <polygon points="250,215 253,230 250,245 247,230" transform="rotate(240 250 250)"/>
      <polygon points="250,215 253,230 250,245 247,230" transform="rotate(270 250 250)"/>
      <polygon points="250,215 253,230 250,245 247,230" transform="rotate(300 250 250)"/>
      <polygon points="250,215 253,230 250,245 247,230" transform="rotate(330 250 250)"/>
    </g>

    <!-- Texto central -->
    <text x="250" y="243" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#C9956A" opacity="0.9" letter-spacing="2">✦ 12 CONTOS ✦</text>
    <text x="250" y="258" text-anchor="middle" font-family="Georgia,serif" font-size="8" fill="#E0B899" opacity="0.75" letter-spacing="1.5">MANDALA EM MOVIMENTO</text>
    <!-- Nomes dos contos em texto curvo no anel médio -->
    <text font-family="Georgia,serif" font-size="5.5" fill="#C9956A" opacity="0.65" letter-spacing="0.8">
      <textPath href="#textRing1" startOffset="0%">LA LOBA · BARBA-AZUL · VASALISA · MANAWEE · MULHER-ESQUELETO · PATINHO FEIO · PELE DE FOCA · LA LLORONA · DEUSAS SUJAS · URSO DA MEIA-LUA · MULHER CABELOS DE OURO · DONZELA SEM MÃOS · </textPath>
    </text>
  </svg>
  <!-- Partículas -->
  <div class="hero-particles" id="particles"></div>

  <div class="hero-content fade-in">
    <div class="hero-badge">✦ Próxima turma começa: Quarta 01/04 ✦</div>
    <h1 class="hero-title">
      Jornada <span>Mandala</span><br>em Movimento
    </h1>
    <p class="hero-sub">Para mulheres 40+ que estão cansadas de se adaptar demais e desejam aprender a existir nas relações sem perder a própria voz.</p>
    <div class="hero-btns">
      <a href="https://forms.gle/5YFSvrEpk55tvBcH8" target="_blank" class="btn btn-primary" style="font-size:1rem;padding:16px 38px">
        <i class="fas fa-star" style="margin-right:8px"></i>INSCREVER-SE NA JORNADA
      </a>
      <a href="#datas" class="btn btn-secondary" style="font-size:1rem;padding:16px 30px">
        <i class="fas fa-star" style="margin-right:8px"></i>Inscrever para Vivência Gratuita – 25/03
      </a>
      <a href="#sobre" class="btn btn-outline" style="font-size:0.9rem;padding:14px 24px">
        Saber Mais <i class="fas fa-arrow-down" style="margin-left:8px"></i>
      </a>
    </div>
    <a href="#sobre" class="hero-scroll">
      <i class="fas fa-chevron-down"></i>
    </a>
  </div>
</section>

<!-- ===== SEÇÃO 2: SOBRE A JORNADA ===== -->
<section id="sobre">
  <div class="container">
    <div class="sobre-headline-wrap fade-in">
      <h2 class="section-headline">O que é Mandala em Movimento?</h2>
      <p class="section-subline">Uma jornada estruturada para mulheres 40+ que sentem que estão mudando — mas ainda não sabem como se reorganizar por dentro.</p>
    </div>
    <div class="sobre-grid">

      <!-- Bloco principal de texto -->
      <div class="sobre-facilitadora fade-in" style="justify-content:center">
        <div class="sobre-citacao" style="max-width:780px;width:100%">

          <!-- Frase âncora em destaque -->
          <div style="text-align:center;margin-bottom:36px;padding:28px 32px;background:rgba(123,45,62,0.06);border-radius:16px;border-left:4px solid var(--bordô)">
            <p style="font-family:'Playfair Display',serif;font-size:1.35rem;color:var(--bordô);font-weight:700;line-height:1.5;margin:0 0 6px">Você não está perdida.</p>
            <p style="font-family:'Playfair Display',serif;font-size:1.35rem;color:var(--bordô);font-weight:700;line-height:1.5;margin:0">Você está em transição.</p>
          </div>

          <!-- Contexto emocional -->
          <div style="text-align:center;max-width:640px;margin:0 auto 36px;color:#5A3030;font-size:1rem;line-height:2">
            <p style="margin:0">Talvez seus filhos tenham crescido.<br>
            Talvez o casamento esteja diferente.<br>
            Talvez o trabalho já não faça sentido.<br>
            Talvez você esteja cansada de se adaptar a tudo… <strong>menos a si mesma.</strong></p>
          </div>

          <!-- Definição principal -->
          <div class="sobre-citacao-desc" style="margin-bottom:36px">
            <strong>Mandala em Movimento</strong> é um processo estruturado de <strong>reconstrução identitária</strong> para mulheres <strong>40+, 50+, 60+</strong> que estão atravessando mudanças emocionais, relacionais ou profissionais — e desejam recuperar sua voz, seus limites e sua direção.<br><br>
            Ao longo de <strong>12 encontros semanais</strong>, você percorre uma espiral de crescimento baseada em contos arquetípicos do livro <em>Mulheres que Correm com os Lobos</em>, integrados à contoterapia e à Focalização (Eugene Gendlin).
            <span style="display:flex;flex-direction:column;gap:4px;margin:18px 0 4px;padding-left:14px;border-left:2px solid var(--rose-gold)">
              <span style="color:#5A3030;font-size:0.9rem">Não é sobre aprender teorias.</span>
              <span style="color:#5A3030;font-size:0.9rem;font-weight:700">É sobre reorganizar sua experiência interna.</span>
            </span>
          </div>

          <!-- O que acontece na prática -->
          <div style="margin-bottom:40px">
            <p style="font-weight:800;color:var(--bordô);font-size:0.85rem;letter-spacing:2px;text-transform:uppercase;margin-bottom:18px;text-align:center">O que acontece na prática?</p>
            <p style="color:#5A3030;font-size:0.95rem;text-align:center;margin-bottom:20px">Em cada encontro você:</p>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px;max-width:560px;margin:0 auto">
              <li style="display:flex;align-items:flex-start;gap:12px;color:#3A2820;font-size:0.93rem;line-height:1.5">
                <i class="fas fa-circle" style="color:var(--rose-gold);font-size:0.5rem;margin-top:7px;flex-shrink:0"></i>
                Trabalha um <strong>conto arquetípico</strong> como espelho psíquico
              </li>
              <li style="display:flex;align-items:flex-start;gap:12px;color:#3A2820;font-size:0.93rem;line-height:1.5">
                <i class="fas fa-circle" style="color:var(--rose-gold);font-size:0.5rem;margin-top:7px;flex-shrink:0"></i>
                Desenvolve <strong>escuta corporal profunda</strong> (Focalização)
              </li>
              <li style="display:flex;align-items:flex-start;gap:12px;color:#3A2820;font-size:0.93rem;line-height:1.5">
                <i class="fas fa-circle" style="color:var(--rose-gold);font-size:0.5rem;margin-top:7px;flex-shrink:0"></i>
                Identifica padrões de <strong>autoabandono</strong> e adaptação excessiva
              </li>
              <li style="display:flex;align-items:flex-start;gap:12px;color:#3A2820;font-size:0.93rem;line-height:1.5">
                <i class="fas fa-circle" style="color:var(--rose-gold);font-size:0.5rem;margin-top:7px;flex-shrink:0"></i>
                Reorganiza <strong>decisões adiadas</strong>
              </li>
              <li style="display:flex;align-items:flex-start;gap:12px;color:#3A2820;font-size:0.93rem;line-height:1.5">
                <i class="fas fa-circle" style="color:var(--rose-gold);font-size:0.5rem;margin-top:7px;flex-shrink:0"></i>
                Fortalece <strong>limites emocionais</strong>
              </li>
              <li style="display:flex;align-items:flex-start;gap:12px;color:#3A2820;font-size:0.93rem;line-height:1.5">
                <i class="fas fa-circle" style="color:var(--rose-gold);font-size:0.5rem;margin-top:7px;flex-shrink:0"></i>
                Recupera <strong>clareza e maturidade relacional</strong>
              </li>
            </ul>
            <div style="margin-top:22px;text-align:center;color:#6A5045;font-size:0.92rem;line-height:2;font-style:italic">
              É um trabalho experiencial.<br>
              Sentido no corpo. Elaborado com consciência. Integrado na vida real.
            </div>
          </div>

          <!-- Para quem é / não é (duas colunas) -->
          <div class="sobre-para-quem-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:40px">
            <!-- Para quem é -->
            <div style="background:rgba(123,45,62,0.05);border-radius:14px;padding:24px 22px;border-top:3px solid var(--bordô)">
              <p style="font-weight:800;color:var(--bordô);font-size:0.78rem;letter-spacing:2px;text-transform:uppercase;margin:0 0 16px">Para quem é</p>
              <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px">
                <li style="display:flex;align-items:flex-start;gap:8px;color:#3A2820;font-size:0.87rem;line-height:1.5"><span style="color:var(--bordô);font-weight:700;flex-shrink:0">✔</span>Mulheres 40+ em transição</li>
                <li style="display:flex;align-items:flex-start;gap:8px;color:#3A2820;font-size:0.87rem;line-height:1.5"><span style="color:var(--bordô);font-weight:700;flex-shrink:0">✔</span>Mulheres que sentem que perderam partes de si</li>
                <li style="display:flex;align-items:flex-start;gap:8px;color:#3A2820;font-size:0.87rem;line-height:1.5"><span style="color:var(--bordô);font-weight:700;flex-shrink:0">✔</span>Mulheres que evitam decisões por medo de conflito</li>
                <li style="display:flex;align-items:flex-start;gap:8px;color:#3A2820;font-size:0.87rem;line-height:1.5"><span style="color:var(--bordô);font-weight:700;flex-shrink:0">✔</span>Mulheres que desejam amadurecer sem endurecer</li>
                <li style="display:flex;align-items:flex-start;gap:8px;color:#3A2820;font-size:0.87rem;line-height:1.5"><span style="color:var(--bordô);font-weight:700;flex-shrink:0">✔</span>Mulheres que querem profundidade, não superficialidade motivacional</li>
              </ul>
            </div>
            <!-- Para quem não é -->
            <div style="background:rgba(90,48,48,0.04);border-radius:14px;padding:24px 22px;border-top:3px solid var(--cinza)">
              <p style="font-weight:800;color:#7A6055;font-size:0.78rem;letter-spacing:2px;text-transform:uppercase;margin:0 0 16px">Para quem não é</p>
              <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px">
                <li style="display:flex;align-items:flex-start;gap:8px;color:#6A5045;font-size:0.87rem;line-height:1.5"><span style="color:#9A7060;font-weight:700;flex-shrink:0">✘</span>Para quem busca terapia clínica individual</li>
                <li style="display:flex;align-items:flex-start;gap:8px;color:#6A5045;font-size:0.87rem;line-height:1.5"><span style="color:#9A7060;font-weight:700;flex-shrink:0">✘</span>Para quem quer aconselhamento religioso</li>
                <li style="display:flex;align-items:flex-start;gap:8px;color:#6A5045;font-size:0.87rem;line-height:1.5"><span style="color:#9A7060;font-weight:700;flex-shrink:0">✘</span>Para quem espera fórmulas rápidas ou promessas mágicas</li>
                <li style="display:flex;align-items:flex-start;gap:8px;color:#6A5045;font-size:0.87rem;line-height:1.5"><span style="color:#9A7060;font-weight:700;flex-shrink:0">✘</span>Para quem não está disposta a se escutar com honestidade</li>
              </ul>
            </div>
          </div>

          <!-- O diferencial -->
          <div style="text-align:center;margin-bottom:40px">
            <p style="font-weight:800;color:var(--bordô);font-size:0.85rem;letter-spacing:2px;text-transform:uppercase;margin-bottom:20px">O diferencial</p>
            <p style="color:#5A3030;font-size:0.95rem;margin-bottom:20px">Mandala em Movimento não trabalha apenas reflexão racional. Trabalha:</p>
            <div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;margin-bottom:24px">
              <div style="background:rgba(123,45,62,0.07);border-radius:30px;padding:10px 20px;font-size:0.88rem;color:var(--bordô);font-weight:600"><i class="fas fa-moon" style="margin-right:8px;opacity:0.7"></i>Arquétipos</div>
              <div style="background:rgba(123,45,62,0.07);border-radius:30px;padding:10px 20px;font-size:0.88rem;color:var(--bordô);font-weight:600"><i class="fas fa-heart" style="margin-right:8px;opacity:0.7"></i>Corpo</div>
              <div style="background:rgba(123,45,62,0.07);border-radius:30px;padding:10px 20px;font-size:0.88rem;color:var(--bordô);font-weight:600"><i class="fas fa-feather-alt" style="margin-right:8px;opacity:0.7"></i>Palavra</div>
              <div style="background:rgba(123,45,62,0.07);border-radius:30px;padding:10px 20px;font-size:0.88rem;color:var(--bordô);font-weight:600"><i class="fas fa-users" style="margin-right:8px;opacity:0.7"></i>Grupo</div>
            </div>
            <p style="color:#6A5045;font-size:0.92rem;line-height:1.9;font-style:italic">
              É uma mandala porque integra.<br>
              É em movimento porque você não sai igual a como entrou.
            </p>
          </div>

          <!-- Citação âncora de fechamento -->
          <div class="sobre-citacao-quote" style="text-align:center;margin-bottom:12px">
            "Aqui, envelhecer não é perder.<br>É aprofundar."
          </div>

          <!-- Frase de conversão -->
          <div style="text-align:center;margin-top:28px;padding:28px 24px;background:rgba(123,45,62,0.05);border-radius:14px">
            <p style="color:#5A3030;font-size:1rem;line-height:1.9;margin:0 0 20px">
              Talvez não seja crise.<br>
              Talvez seja a fase da vida em que você finalmente <strong>deixa de se abandonar.</strong><br><br>
              Se você sente que é hora de se reorganizar por dentro,<br>
              <strong style="color:var(--bordô)">a jornada começa aqui.</strong>
            </p>
            <a href="https://forms.gle/5YFSvrEpk55tvBcH8" target="_blank" class="btn btn-primary" style="display:inline-block;padding:16px 48px;font-size:1rem">
              Quero entrar na Mandala
            </a>
          </div>

        </div>
      </div>

      <!-- Intro resumido (mantido para SEO) -->
      <div class="sobre-intro fade-in" style="display:none">
        <p><strong>Mandala em Movimento</strong> é uma jornada estruturada de <strong>12 encontros semanais</strong> para mulheres 40+.</p>
      </div>
      <!-- Fundamentos: 3 colunas centralizadas -->
      <div class="sobre-badges fade-in">

          <!-- Fundamento 1: Focalizacao -->
          <div class="sobre-badge">
            <div class="sobre-badge-icon">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Silhueta corpo feminino -->
                <ellipse cx="16" cy="6.5" rx="4" ry="4" stroke="#C9956A" stroke-width="1.5" fill="none"/>
                <path d="M12 11 Q10 14 10 18 Q10 22 12 25" stroke="#C9956A" stroke-width="1.4" fill="none" stroke-linecap="round"/>
                <path d="M20 11 Q22 14 22 18 Q22 22 20 25" stroke="#C9956A" stroke-width="1.4" fill="none" stroke-linecap="round"/>
                <path d="M12 11 Q16 13 20 11" stroke="#C9956A" stroke-width="1.4" fill="none" stroke-linecap="round"/>
                <path d="M12 25 Q14 27 16 27 Q18 27 20 25" stroke="#C9956A" stroke-width="1.3" fill="none" stroke-linecap="round"/>
                <!-- Ondas felt-sense irradiando do peito -->
                <path d="M7 17 Q5 15 7 13" stroke="#E0B899" stroke-width="1.1" fill="none" stroke-linecap="round" opacity="0.8"/>
                <path d="M5 18 Q2 15 5 12" stroke="#E0B899" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.45"/>
                <path d="M25 17 Q27 15 25 13" stroke="#E0B899" stroke-width="1.1" fill="none" stroke-linecap="round" opacity="0.8"/>
                <path d="M27 18 Q30 15 27 12" stroke="#E0B899" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.45"/>
                <!-- Ponto de sensacao no centro - felt sense -->
                <circle cx="16" cy="17" r="2.5" fill="#7B2D3E" stroke="#C9956A" stroke-width="1"/>
                <circle cx="16" cy="17" r="1.1" fill="#E0B899" opacity="0.95"/>
              </svg>
            </div>
            <div>
              <div class="sobre-badge-subtitle">1&#186; Fundamento</div>
              <div class="sobre-badge-title">Focalização · Eugene Gendlin</div>
              <div class="sobre-badge-text">Uma prática de escuta corporal profunda que ajuda você a acessar aquilo que já sabe por dentro — mas ainda não conseguiu nomear.</div>
            </div>
          </div>

          <!-- Fundamento 2: Contoterapia -->
          <div class="sobre-badge">
            <div class="sobre-badge-icon">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Espiral junguiana -->
                <path d="M16 16 Q16 11 21 11 Q26 11 26 16 Q26 22 20 23 Q13 24 11 18 Q8 11 14 8 Q21 5 27 11" stroke="#C9956A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                <!-- Raios do inconsciente - tracejados -->
                <line x1="16" y1="16" x2="6" y2="7" stroke="#C9956A" stroke-width="0.7" opacity="0.3" stroke-dasharray="2,2"/>
                <line x1="16" y1="16" x2="27" y2="7" stroke="#C9956A" stroke-width="0.7" opacity="0.3" stroke-dasharray="2,2"/>
                <line x1="16" y1="16" x2="16" y2="4" stroke="#C9956A" stroke-width="0.7" opacity="0.3" stroke-dasharray="2,2"/>
                <!-- Simbolo anima - circulo pequeno -->
                <circle cx="9" cy="25" r="3" stroke="#E0B899" stroke-width="1.1" fill="none" opacity="0.75"/>
                <circle cx="9" cy="25" r="1.2" fill="#C9956A" opacity="0.85"/>
                <!-- Estrela 4 pontas = arquetipo -->
                <path d="M23 23 L24.5 26 L23 29 L21.5 26 Z" fill="#C9956A" opacity="0.8"/>
                <path d="M20 26 L23 24.5 L26 26 L23 27.5 Z" fill="#C9956A" opacity="0.55"/>
                <!-- Centro luminoso -->
                <circle cx="16" cy="16" r="2.5" fill="#7B2D3E" stroke="#C9956A" stroke-width="1.2"/>
                <circle cx="16" cy="16" r="1" fill="#E0B899" opacity="0.95"/>
              </svg>
            </div>
            <div>
              <div class="sobre-badge-subtitle">2&#186; Fundamento</div>
              <div class="sobre-badge-title">Contoterapia · Método CIP</div>
              <div class="sobre-badge-text">Uso estruturado de contos arquetípicos como espelhos simbólicos para reorganização interna e reconstrução da identidade.</div>
            </div>
          </div>

          <!-- Fundamento 3: Caminho de Interioridade e Maturidade Feminina -->
          <div class="sobre-badge">
            <div class="sobre-badge-icon">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Cabeca da loba - perfil voltado para direita -->
                <!-- Focinho / queixo -->
                <path d="M6 20 Q7 23 10 24 Q13 25 15 23 Q17 21 17 19" stroke="#C9956A" stroke-width="1.3" fill="none" stroke-linecap="round"/>
                <!-- Nariz -->
                <ellipse cx="15.5" cy="18.5" rx="1.8" ry="1.2" fill="#C9956A" opacity="0.85"/>
                <!-- Boca / focinho inferior -->
                <path d="M13 21 Q14.5 22.5 16 21" stroke="#E0B899" stroke-width="0.9" fill="none" stroke-linecap="round" opacity="0.7"/>
                <!-- Contorno do cranio -->
                <path d="M6 20 Q4 16 5 12 Q6 8 10 7 Q14 6 17 9 Q20 11 19 15 Q18 18 17 19" stroke="#C9956A" stroke-width="1.4" fill="rgba(201,149,106,0.08)" stroke-linecap="round" stroke-linejoin="round"/>
                <!-- Orelha esquerda (fundo) -->
                <path d="M8 8 Q7 4 10 5 Q11 7 10 8" fill="rgba(201,149,106,0.2)" stroke="#C9956A" stroke-width="1.1" stroke-linejoin="round"/>
                <!-- Orelha direita (frente) -->
                <path d="M13 7 Q13 3 16 4 Q17 6 15 8" fill="rgba(201,149,106,0.25)" stroke="#C9956A" stroke-width="1.2" stroke-linejoin="round"/>
                <!-- Interior orelha direita -->
                <path d="M14 7 Q14 5 15.5 5.5 Q16 6.5 15 7.5" fill="#C9956A" opacity="0.35"/>
                <!-- Olho da loba - expressivo -->
                <ellipse cx="12" cy="13" rx="2.8" ry="2.2" fill="rgba(107,31,50,0.3)" stroke="#E0B899" stroke-width="1.1"/>
                <circle cx="12" cy="13" r="1.4" fill="#7B2D3E" opacity="0.9"/>
                <circle cx="12.6" cy="12.4" r="0.5" fill="#E0B899" opacity="1"/>
                <!-- Pelo / textura no pescoco -->
                <path d="M6 20 Q5 22 6 24 Q8 26 11 26 Q13 25 14 24" stroke="#C9956A" stroke-width="1.1" fill="none" stroke-linecap="round" opacity="0.6"/>
                <!-- Lua crescente atras = noite / instinto selvagem -->
                <path d="M23 5 Q28 9 28 16 Q28 22 23 26 Q27 22 27 16 Q27 9 23 5 Z" fill="#E0B899" opacity="0.25" stroke="#E0B899" stroke-width="0.8"/>
                <!-- Estrelas ao redor -->
                <circle cx="25" cy="7" r="0.8" fill="#E0B899" opacity="0.7"/>
                <circle cx="27" cy="13" r="0.6" fill="#E0B899" opacity="0.5"/>
                <circle cx="26" cy="19" r="0.7" fill="#E0B899" opacity="0.6"/>
                <circle cx="22" cy="4" r="0.5" fill="#C9956A" opacity="0.6"/>
              </svg>
            </div>
            <div>
              <div class="sobre-badge-subtitle">3&#186; Fundamento</div>
              <div class="sobre-badge-title">Desenvolvimento Humano e Interioridade</div>
              <div class="sobre-badge-text">11 anos conduzindo grupos de aprofundamento espiritual com foco em resiliência, sentido de vida e equilíbrio emocional. A jornada é um espaço plural, aberto a mulheres de diferentes crenças.</div>
            </div>
          </div>

      </div>


      <!-- Estrutura de cada encontro - largura total -->
      <div class="espiral-box fade-in">

          <div class="espiral-title">
            <div class="espiral-title-icon">
              <!-- Mandala espiral mini -->
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9" stroke="#C9956A" stroke-width="1" fill="none"/>
                <circle cx="10" cy="10" r="6" stroke="#7B2D3E" stroke-width="0.8" fill="none"/>
                <circle cx="10" cy="10" r="3" stroke="#C9956A" stroke-width="0.8" fill="none"/>
                <circle cx="10" cy="10" r="1.2" fill="#C9956A" opacity="0.9"/>
                <line x1="10" y1="1" x2="10" y2="19" stroke="#C9956A" stroke-width="0.5" opacity="0.4"/>
                <line x1="1" y1="10" x2="19" y2="10" stroke="#C9956A" stroke-width="0.5" opacity="0.4"/>
                <line x1="3.4" y1="3.4" x2="16.6" y2="16.6" stroke="#C9956A" stroke-width="0.5" opacity="0.4"/>
                <line x1="16.6" y1="3.4" x2="3.4" y2="16.6" stroke="#C9956A" stroke-width="0.5" opacity="0.4"/>
              </svg>
            </div>
            A Estrutura de Cada Encontro
          </div>

          <div class="espiral-steps">

            <!-- Passo 1: Corpo -->
            <div class="espiral-step">
              <div class="espiral-step-header">
                <div class="espiral-step-icon espiral-step-icon-1">
                  <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Silhueta feminina simplificada com pulsacao no peito -->
                    <ellipse cx="11" cy="5" rx="3" ry="3" stroke="#9B3A50" stroke-width="1.3" fill="none"/>
                    <path d="M8 8 Q7 11 7 14 Q7 17 8 19" stroke="#9B3A50" stroke-width="1.3" fill="none" stroke-linecap="round"/>
                    <path d="M14 8 Q15 11 15 14 Q15 17 14 19" stroke="#9B3A50" stroke-width="1.3" fill="none" stroke-linecap="round"/>
                    <path d="M8 8 Q11 10 14 8" stroke="#9B3A50" stroke-width="1.3" fill="none" stroke-linecap="round"/>
                    <path d="M8 19 Q11 21 14 19" stroke="#9B3A50" stroke-width="1.2" fill="none" stroke-linecap="round"/>
                    <!-- Pulsacao / onda do coracao no peito -->
                    <path d="M7 13 L8.5 13 L9.5 10.5 L11 14.5 L12.5 11.5 L13.5 13 L15 13" stroke="#E0B899" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div class="espiral-step-num">PASSO 01</div>
                  <div class="espiral-step-label">Corpo</div>
                </div>
              </div>
              <div class="espiral-step-text">"O que você sente?"</div>
            </div>

            <!-- Passo 2: Simbolo -->
            <div class="espiral-step">
              <div class="espiral-step-header">
                <div class="espiral-step-icon espiral-step-icon-2">
                  <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Cristal / prisma - simbolo de refração do sentido -->
                    <polygon points="11,2 19,8 17,19 5,19 3,8" stroke="#C9956A" stroke-width="1.3" fill="rgba(201,149,106,0.1)" stroke-linejoin="round"/>
                    <!-- Raio interno de luz (refração) -->
                    <line x1="11" y1="2" x2="11" y2="10" stroke="#E0B899" stroke-width="0.9" opacity="0.7"/>
                    <line x1="11" y1="10" x2="6" y2="19" stroke="#C9956A" stroke-width="0.8" opacity="0.5"/>
                    <line x1="11" y1="10" x2="16" y2="19" stroke="#C9956A" stroke-width="0.8" opacity="0.5"/>
                    <!-- Ponto central brilhante -->
                    <circle cx="11" cy="10" r="1.8" fill="#7B2D3E" stroke="#C9956A" stroke-width="0.8"/>
                    <circle cx="11" cy="10" r="0.7" fill="#E0B899" opacity="0.95"/>
                    <!-- Brilhos externos -->
                    <line x1="11" y1="0" x2="11" y2="1.5" stroke="#E0B899" stroke-width="0.9" opacity="0.6"/>
                    <line x1="19.5" y1="7.5" x2="20.5" y2="7" stroke="#E0B899" stroke-width="0.9" opacity="0.4"/>
                    <line x1="2.5" y1="7.5" x2="1.5" y2="7" stroke="#E0B899" stroke-width="0.9" opacity="0.4"/>
                  </svg>
                </div>
                <div>
                  <div class="espiral-step-num">PASSO 02</div>
                  <div class="espiral-step-label">Símbolo</div>
                </div>
              </div>
              <div class="espiral-step-text">"O que isso representa?"</div>
            </div>

            <!-- Passo 3: Integracao -->
            <div class="espiral-step">
              <div class="espiral-step-header">
                <div class="espiral-step-icon espiral-step-icon-3">
                  <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Semente germinando - integracao/transformacao -->
                    <!-- Terra / base -->
                    <path d="M3 17 Q11 15 19 17" stroke="#5C7A5A" stroke-width="1.3" fill="none" stroke-linecap="round"/>
                    <!-- Haste principal -->
                    <path d="M11 17 Q11 12 11 8" stroke="#5C7A5A" stroke-width="1.3" stroke-linecap="round"/>
                    <!-- Folha esquerda brotando -->
                    <path d="M11 12 Q7 10 6 12 Q8 14 11 13" fill="#5C7A5A" opacity="0.7" stroke="none"/>
                    <!-- Folha direita brotando -->
                    <path d="M11 10 Q15 8 16 10 Q14 12 11 11" fill="#5C7A5A" opacity="0.55" stroke="none"/>
                    <!-- Broto no topo -->
                    <circle cx="11" cy="7" r="2" fill="#5C7A5A" opacity="0.4" stroke="#5C7A5A" stroke-width="0.8"/>
                    <circle cx="11" cy="6" r="1.2" fill="#C9956A" opacity="0.7"/>
                    <!-- Raizes sugeridas -->
                    <path d="M11 17 Q9 19 8 20" stroke="#5C7A5A" stroke-width="0.8" opacity="0.5" stroke-linecap="round"/>
                    <path d="M11 17 Q13 19 14 20" stroke="#5C7A5A" stroke-width="0.8" opacity="0.5" stroke-linecap="round"/>
                  </svg>
                </div>
                <div>
                  <div class="espiral-step-num">PASSO 03</div>
                  <div class="espiral-step-label">Integração</div>
                </div>
              </div>
              <div class="espiral-step-text">"Que mudança levo?"</div>
            </div>

            <!-- Passo 4: Consciencia -->
            <div class="espiral-step">
              <div class="espiral-step-header">
                <div class="espiral-step-icon espiral-step-icon-4">
                  <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Estrela de 8 pontas = consciencia expandida -->
                    <polygon points="11,1 12.5,8.5 19,7 13.5,12 19,17 12.5,15.5 11,22 9.5,15.5 3,17 8.5,12 3,7 9.5,8.5" fill="rgba(224,184,153,0.15)" stroke="#E0B899" stroke-width="1.1" stroke-linejoin="round"/>
                    <!-- Circulo interno luminoso -->
                    <circle cx="11" cy="11" r="3.5" fill="#7B2D3E" stroke="#C9956A" stroke-width="1"/>
                    <circle cx="11" cy="11" r="1.8" fill="#C9956A" opacity="0.7"/>
                    <circle cx="11" cy="11" r="0.8" fill="#E0B899" opacity="1"/>
                    <!-- Raios curtos entre as pontas -->
                    <line x1="11" y1="5.5" x2="11" y2="7" stroke="#E0B899" stroke-width="0.7" opacity="0.5"/>
                    <line x1="15" y1="7" x2="14" y2="8" stroke="#E0B899" stroke-width="0.7" opacity="0.4"/>
                    <line x1="16.5" y1="11" x2="15" y2="11" stroke="#E0B899" stroke-width="0.7" opacity="0.5"/>
                    <line x1="15" y1="15" x2="14" y2="14" stroke="#E0B899" stroke-width="0.7" opacity="0.4"/>
                    <line x1="7" y1="7" x2="8" y2="8" stroke="#E0B899" stroke-width="0.7" opacity="0.4"/>
                    <line x1="5.5" y1="11" x2="7" y2="11" stroke="#E0B899" stroke-width="0.7" opacity="0.5"/>
                    <line x1="7" y1="15" x2="8" y2="14" stroke="#E0B899" stroke-width="0.7" opacity="0.4"/>
                  </svg>
                </div>
                <div>
                  <div class="espiral-step-num">PASSO 04</div>
                  <div class="espiral-step-label">Consciência</div>
                </div>
              </div>
              <div class="espiral-step-text">"Quem estou me tornando?"</div>
            </div>

          </div>
        </div>
    </div>
  </div>
</section>

<!-- ===== SEÇÃO SOBRE MÔNICA LANGSDORFF ===== -->
<section id="monica" style="background: linear-gradient(180deg, var(--bg-deep) 0%, var(--bg-base) 100%); padding: 90px 0;">
  <div class="container">

    <div class="sobre-headline-wrap fade-in" style="margin-bottom:48px">
      <h2 class="section-headline">Sobre Mônica Langsdorff</h2>
      <p class="section-subline">Facilitadora de Focalização · Contoterapeuta</p>
    </div>

    <div class="fade-in" style="display:flex;align-items:flex-start;gap:48px;max-width:960px;margin:0 auto;background:rgba(255,255,255,0.60);border:1px solid rgba(176,120,72,0.25);border-radius:24px;padding:40px 44px;box-shadow:0 8px 40px rgba(150,30,30,0.07)">

      <!-- Foto -->
      <div style="flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:12px">
        <img id="monica-foto" src="/static/foto-monica.png" alt="Mônica Langsdorff — Facilitadora de Focalização e Contoterapeuta"
          style="width:220px;height:auto;border-radius:16px;filter:drop-shadow(0 8px 24px rgba(150,30,30,0.20))" />
        <div style="background:linear-gradient(135deg,var(--vermelho),#7A1212);border-radius:10px;padding:8px 18px;width:100%;text-align:center;box-shadow:0 4px 16px rgba(150,30,30,0.25)">
          <div style="font-size:0.62rem;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,255,255,0.75)">Facilitadora · Contoterapeuta</div>
          <div style="font-family:'Playfair Display',serif;font-size:1rem;font-weight:700;color:#E0B899;letter-spacing:0.5px;margin-top:2px">Mônica Langsdorff</div>
        </div>
      </div>

      <!-- Texto -->
      <div style="flex:1">
        <p style="font-family:'Great Vibes',cursive;font-size:clamp(1.3rem,2.5vw,1.75rem);color:var(--vermelho);line-height:1.55;margin-bottom:16px">
          "Trabalho com desenvolvimento humano feminino através de contos arquetípicos e escuta corporal."
        </p>

        <p style="font-size:0.95rem;color:#3A2820;line-height:1.85;margin-bottom:14px">
          Sou <strong>Facilitadora de Focalização certificada pelo Focusing Institute (NY)</strong> e <strong>Contoterapeuta pelo Método CIP</strong>. Atuo conduzindo mulheres 40+ em processos de reconstrução identitária, especialmente em fases de transição e redirecionamento de vida.
        </p>

        <div style="margin:20px 0;display:flex;flex-direction:column;gap:8px">
          <div style="font-size:0.78rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--rose-gold);margin-bottom:4px">Minha prática integra</div>
          <div style="display:flex;flex-direction:column;gap:7px">
            <div style="display:flex;align-items:center;gap:10px;color:#3A2820;font-size:0.92rem">
              <span style="width:6px;height:6px;border-radius:50%;background:var(--rose-gold);flex-shrink:0"></span>Escuta corporal profunda
            </div>
            <div style="display:flex;align-items:center;gap:10px;color:#3A2820;font-size:0.92rem">
              <span style="width:6px;height:6px;border-radius:50%;background:var(--rose-gold);flex-shrink:0"></span>Trabalho simbólico com narrativas
            </div>
            <div style="display:flex;align-items:center;gap:10px;color:#3A2820;font-size:0.92rem">
              <span style="width:6px;height:6px;border-radius:50%;background:var(--rose-gold);flex-shrink:0"></span>Condução estruturada de grupos
            </div>
            <div style="display:flex;align-items:center;gap:10px;color:#3A2820;font-size:0.92rem">
              <span style="width:6px;height:6px;border-radius:50%;background:var(--rose-gold);flex-shrink:0"></span>Desenvolvimento de maturidade relacional
            </div>
          </div>
        </div>

        <p style="font-size:0.92rem;color:#5A3030;line-height:1.8;margin-bottom:14px">
          Ao longo de <strong>11 anos conduzi grupos de aprofundamento espiritual</strong> com foco em resiliência, sentido de vida e equilíbrio emocional — experiência que fortaleceu minha capacidade de sustentar processos humanos com escuta, presença e responsabilidade.
        </p>

        <p style="font-size:0.95rem;color:#3A2820;line-height:1.8;border-left:3px solid var(--rose-gold);padding-left:16px;font-style:italic">
          <strong>Mandala em Movimento</strong> nasce desse percurso: um espaço experiencial e estruturado para mulheres que desejam atravessar mudanças com mais clareza, autonomia e direção.
        </p>
      </div>

    </div>
  </div>
</section>

<!-- SEÇÃO FAIXA ETÁRIA REMOVIDA -->
<section id="faixa" style="display:none">
  <div class="container">
    <h2 class="section-headline fade-in">Para qual idade é a Jornada?</h2>
    <p class="section-subline fade-in">Uma jornada desenhada para honrar cada fase da mulher</p>
    <div class="faixa-grid fade-in">
      <div class="faixa-card faixa-card-1">
        <div class="faixa-num">40–49</div>
        <div class="faixa-icon">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Casulo pendurado num galho -->
            <line x1="24" y1="2" x2="24" y2="8" stroke="#C9956A" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="18" y1="3" x2="30" y2="3" stroke="#C9956A" stroke-width="1.3" stroke-linecap="round"/>
            <!-- Fio do casulo -->
            <line x1="24" y1="8" x2="24" y2="12" stroke="#E0B899" stroke-width="1" stroke-linecap="round" stroke-dasharray="1.5,1.5"/>
            <!-- Casulo aberto - metade inferior ainda fechada -->
            <path d="M19 28 Q17 22 19 16 Q24 13 29 16 Q31 22 29 28 Q24 32 19 28 Z" fill="rgba(107,31,50,0.35)" stroke="#9B3A50" stroke-width="1.4"/>
            <!-- Fissura central do casulo se abrindo -->
            <path d="M24 13 Q23 18 24 24 Q24 28 24 32" stroke="#E0B899" stroke-width="0.9" stroke-dasharray="2,1.5" opacity="0.8" stroke-linecap="round"/>
            <!-- Asa esquerda emergindo -->
            <path d="M24 20 Q18 15 12 17 Q8 20 10 25 Q13 29 20 26 Q23 24 24 22" fill="rgba(201,149,106,0.25)" stroke="#C9956A" stroke-width="1.4" stroke-linejoin="round"/>
            <!-- Nervura asa esquerda -->
            <path d="M24 21 Q18 18 13 20" stroke="#E0B899" stroke-width="0.8" opacity="0.6" stroke-linecap="round"/>
            <path d="M22 23 Q17 22 13 24" stroke="#E0B899" stroke-width="0.6" opacity="0.4" stroke-linecap="round"/>
            <!-- Asa direita emergindo -->
            <path d="M24 20 Q30 15 36 17 Q40 20 38 25 Q35 29 28 26 Q25 24 24 22" fill="rgba(201,149,106,0.18)" stroke="#C9956A" stroke-width="1.4" stroke-linejoin="round"/>
            <!-- Nervura asa direita -->
            <path d="M24 21 Q30 18 35 20" stroke="#E0B899" stroke-width="0.8" opacity="0.6" stroke-linecap="round"/>
            <path d="M26 23 Q31 22 35 24" stroke="#E0B899" stroke-width="0.6" opacity="0.4" stroke-linecap="round"/>
            <!-- Corpo da borboleta emergindo -->
            <ellipse cx="24" cy="23" rx="2" ry="5" fill="#7B2D3E" stroke="#C9956A" stroke-width="1"/>
            <!-- Cabeca -->
            <circle cx="24" cy="17" r="2" fill="#7B2D3E" stroke="#C9956A" stroke-width="1"/>
            <!-- Antenas saindo -->
            <path d="M23 15 Q20 11 19 9" stroke="#C9956A" stroke-width="0.9" stroke-linecap="round"/>
            <circle cx="19" cy="9" r="1" fill="#E0B899" opacity="0.85"/>
            <path d="M25 15 Q28 11 29 9" stroke="#C9956A" stroke-width="0.9" stroke-linecap="round"/>
            <circle cx="29" cy="9" r="1" fill="#E0B899" opacity="0.85"/>
            <!-- Particulas de luz ao redor - transformacao -->
            <circle cx="10" cy="14" r="1" fill="#E0B899" opacity="0.5"/>
            <circle cx="38" cy="14" r="1" fill="#E0B899" opacity="0.5"/>
            <circle cx="8" cy="28" r="0.8" fill="#C9956A" opacity="0.4"/>
            <circle cx="40" cy="28" r="0.8" fill="#C9956A" opacity="0.4"/>
            <circle cx="14" cy="34" r="0.7" fill="#E0B899" opacity="0.35"/>
            <circle cx="34" cy="34" r="0.7" fill="#E0B899" opacity="0.35"/>
          </svg>
        </div>
        <div class="faixa-label">Transição de Vida</div>
        <div class="faixa-desc">Reconhecendo limites. Ressignificando carreira. Preparando-se para transições maiores.</div>
      </div>
      <div class="faixa-card faixa-card-2 faixa-card-especial" style="overflow:hidden">
        <div class="faixa-num">50–59</div>
        <div class="faixa-icon">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Coroa de louros / mandala aberta - simbolo de poder maduro -->
            <!-- Arco superior esquerdo -->
            <path d="M10 28 Q8 18 14 11 Q18 7 24 6" stroke="#C9956A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            <!-- Arco superior direito -->
            <path d="M38 28 Q40 18 34 11 Q30 7 24 6" stroke="#C9956A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            <!-- Ponta do arco esquerdo - folha -->
            <path d="M10 28 Q7 31 8 35 Q10 32 13 31 Q11 29 10 28 Z" fill="#C9956A" opacity="0.7"/>
            <!-- Ponta do arco direito - folha -->
            <path d="M38 28 Q41 31 40 35 Q38 32 35 31 Q37 29 38 28 Z" fill="#C9956A" opacity="0.7"/>
            <!-- Folhas internas no arco esquerdo -->
            <path d="M13 18 Q10 16 11 13 Q14 15 13 18 Z" fill="#E0B899" opacity="0.6"/>
            <path d="M11 24 Q8 23 9 20 Q12 22 11 24 Z" fill="#E0B899" opacity="0.5"/>
            <!-- Folhas internas no arco direito -->
            <path d="M35 18 Q38 16 37 13 Q34 15 35 18 Z" fill="#E0B899" opacity="0.6"/>
            <path d="M37 24 Q40 23 39 20 Q36 22 37 24 Z" fill="#E0B899" opacity="0.5"/>
            <!-- Linha horizontal base da coroa -->
            <path d="M10 28 Q24 32 38 28" stroke="#C9956A" stroke-width="1.2" fill="none" stroke-linecap="round"/>
            <!-- Joia central - pedra preciosa -->
            <polygon points="24,8 27,13 24,16 21,13" fill="rgba(201,149,106,0.2)" stroke="#C9956A" stroke-width="1.2"/>
            <polygon points="24,10 26,13 24,15 22,13" fill="#7B2D3E" stroke="#E0B899" stroke-width="0.7"/>
            <circle cx="24" cy="13" r="1.2" fill="#E0B899" opacity="0.95"/>
            <!-- Tres pontos de luz na base - tríade -->
            <circle cx="17" cy="29" r="1.5" fill="#C9956A" opacity="0.8"/>
            <circle cx="24" cy="31" r="1.8" fill="#C9956A" opacity="0.9"/>
            <circle cx="31" cy="29" r="1.5" fill="#C9956A" opacity="0.8"/>
            <!-- Brilhos minimos -->
            <line x1="24" y1="3" x2="24" y2="5" stroke="#E0B899" stroke-width="1" stroke-linecap="round" opacity="0.6"/>
            <line x1="14" y1="6" x2="15.5" y2="7.5" stroke="#E0B899" stroke-width="0.9" stroke-linecap="round" opacity="0.4"/>
            <line x1="34" y1="6" x2="32.5" y2="7.5" stroke="#E0B899" stroke-width="0.9" stroke-linecap="round" opacity="0.4"/>
          </svg>
        </div>
        <div class="faixa-label">Presença Plena</div>
        <div class="faixa-desc">O poder pessoal floresce quando a mulher para de se diminuir. Menopausa como portal de autenticidade.</div>
      </div>
      <div class="faixa-card faixa-card-3 faixa-card-especial" style="overflow:hidden">
        <div class="faixa-num">60–69</div>
        <div class="faixa-icon">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Corpo da coruja -->
            <ellipse cx="24" cy="28" rx="11" ry="13" fill="rgba(74,107,124,0.35)" stroke="#C9956A" stroke-width="1.5"/>
            <!-- Cabeca -->
            <ellipse cx="24" cy="16" rx="8" ry="7" fill="rgba(74,107,124,0.3)" stroke="#C9956A" stroke-width="1.4"/>
            <!-- Orelhas (tufos) -->
            <path d="M17 10 Q16 6 19 8" stroke="#C9956A" stroke-width="1.3" stroke-linecap="round" fill="none"/>
            <path d="M31 10 Q32 6 29 8" stroke="#C9956A" stroke-width="1.3" stroke-linecap="round" fill="none"/>
            <!-- Olho esquerdo -->
            <circle cx="20" cy="15" r="3.2" fill="rgba(201,149,106,0.2)" stroke="#E0B899" stroke-width="1.2"/>
            <circle cx="20" cy="15" r="1.5" fill="#C9956A" opacity="0.9"/>
            <circle cx="20.6" cy="14.4" r="0.5" fill="#E0B899" opacity="0.9"/>
            <!-- Olho direito -->
            <circle cx="28" cy="15" r="3.2" fill="rgba(201,149,106,0.2)" stroke="#E0B899" stroke-width="1.2"/>
            <circle cx="28" cy="15" r="1.5" fill="#C9956A" opacity="0.9"/>
            <circle cx="28.6" cy="14.4" r="0.5" fill="#E0B899" opacity="0.9"/>
            <!-- Bico -->
            <path d="M22.5 18 L24 20.5 L25.5 18 Q24 17 22.5 18 Z" fill="#C9956A" opacity="0.85"/>
            <!-- Padrao peito -->
            <path d="M18 23 Q24 20 30 23" stroke="#E0B899" stroke-width="0.8" opacity="0.5" fill="none"/>
            <path d="M17 27 Q24 24 31 27" stroke="#E0B899" stroke-width="0.7" opacity="0.35" fill="none"/>
            <!-- Asas abertas levemente -->
            <path d="M13 26 Q8 22 9 18 Q12 20 14 24" fill="rgba(201,149,106,0.2)" stroke="#C9956A" stroke-width="1.2" stroke-linejoin="round"/>
            <path d="M35 26 Q40 22 39 18 Q36 20 34 24" fill="rgba(201,149,106,0.2)" stroke="#C9956A" stroke-width="1.2" stroke-linejoin="round"/>
            <!-- Garras no galho -->
            <line x1="19" y1="41" x2="19" y2="45" stroke="#C9956A" stroke-width="1.1" stroke-linecap="round"/>
            <line x1="24" y1="41" x2="24" y2="45" stroke="#C9956A" stroke-width="1.1" stroke-linecap="round"/>
            <line x1="29" y1="41" x2="29" y2="45" stroke="#C9956A" stroke-width="1.1" stroke-linecap="round"/>
            <!-- Galho -->
            <line x1="10" y1="43" x2="38" y2="43" stroke="#E0B899" stroke-width="1.3" stroke-linecap="round"/>
            <!-- Estrela de sabedoria -->
            <path d="M24 3 L24.8 5.5 L27 5.5 L25.2 7 L25.9 9.5 L24 8 L22.1 9.5 L22.8 7 L21 5.5 L23.2 5.5 Z" fill="#E0B899" opacity="0.75"/>
          </svg>
        </div>
        <div class="faixa-label">Sabedoria</div>
        <div class="faixa-desc">Integrando vida inteira. Transmitindo conhecimento. Celebrando cicatrizes com orgulho.</div>
      </div>
      <div class="faixa-card faixa-card-4 faixa-card-especial" style="overflow:hidden">
        <div class="faixa-num">70+</div>
        <div class="faixa-icon">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Raizes profundas -->
            <path d="M24 38 Q20 42 17 46" stroke="#C9956A" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>
            <path d="M24 38 Q24 43 24 46" stroke="#C9956A" stroke-width="1.3" stroke-linecap="round" opacity="0.8"/>
            <path d="M24 38 Q28 42 31 46" stroke="#C9956A" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>
            <path d="M21 40 Q18 44 16 47" stroke="#C9956A" stroke-width="0.9" stroke-linecap="round" opacity="0.45"/>
            <path d="M27 40 Q30 44 32 47" stroke="#C9956A" stroke-width="0.9" stroke-linecap="round" opacity="0.45"/>
            <!-- Tronco -->
            <path d="M21 38 Q22 28 24 22" stroke="#C9956A" stroke-width="2" stroke-linecap="round"/>
            <path d="M27 38 Q26 28 24 22" stroke="#C9956A" stroke-width="2" stroke-linecap="round"/>
            <!-- Copa da arvore - ramos principais -->
            <path d="M24 22 Q16 18 12 10 Q18 10 22 16" fill="rgba(201,149,106,0.2)" stroke="#C9956A" stroke-width="1.3" stroke-linejoin="round"/>
            <path d="M24 22 Q32 18 36 10 Q30 10 26 16" fill="rgba(201,149,106,0.2)" stroke="#C9956A" stroke-width="1.3" stroke-linejoin="round"/>
            <path d="M24 18 Q20 12 18 5 Q23 7 24 14" fill="rgba(224,184,153,0.2)" stroke="#E0B899" stroke-width="1.2" stroke-linejoin="round"/>
            <path d="M24 18 Q28 12 30 5 Q25 7 24 14" fill="rgba(224,184,153,0.2)" stroke="#E0B899" stroke-width="1.2" stroke-linejoin="round"/>
            <!-- Ramos laterais pequenos -->
            <path d="M22 28 Q17 25 14 22" stroke="#C9956A" stroke-width="1" stroke-linecap="round" opacity="0.65"/>
            <path d="M26 28 Q31 25 34 22" stroke="#C9956A" stroke-width="1" stroke-linecap="round" opacity="0.65"/>
            <!-- Estrelas / frutos de sabedoria na copa -->
            <circle cx="18" cy="9" r="1.5" fill="#E0B899" opacity="0.8"/>
            <circle cx="30" cy="9" r="1.5" fill="#E0B899" opacity="0.8"/>
            <circle cx="24" cy="4" r="2" fill="#C9956A" opacity="0.9"/>
            <circle cx="24" cy="4" r="0.8" fill="#E0B899" opacity="1"/>
            <!-- Lua crescente ao lado -->
            <path d="M38 14 Q42 17 38 21 Q36 18 38 14 Z" fill="#E0B899" opacity="0.55"/>
          </svg>
        </div>
        <div class="faixa-label">Anciã Iniciada</div>
        <div class="faixa-desc">Iniciada. Mentora. Compartilhando sabedoria ancestral. Fechando ciclos com graça.</div>
      </div>
    </div>
    <div class="faixa-msg fade-in">
      "A selvagem interior não envelhece.<br>
      Transformação não tem data de validade.<br>
      <span style="color:#ffffff; font-weight:700;">Bem-vinda em qualquer idade.</span>"
    </div>
    <p class="faixa-obs fade-in" style="display:none">Especialmente desenhado para mulheres 50+, 60+ e 70+. Acolhemos mulheres a partir de 40 anos.</p>
  </div>
</section>

<!-- ===== SEÇÃO PARA QUEM É: NOVA SEÇÃO ===== -->
<section id="para-quem" style="background: linear-gradient(180deg, var(--bg-deep) 0%, var(--bg-alt) 100%); padding: 90px 0;">
  <div class="container">
    <h2 class="section-headline fade-in">Para quem é esta Jornada?</h2>
    <p class="section-subline fade-in">Esta travessia foi desenhada para mulheres em um momento específico de vida</p>
    <div class="fade-in" style="max-width:860px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px">

      <div style="background:rgba(255,255,255,0.6);border:1px solid rgba(176,120,72,0.25);border-left:4px solid var(--bordô);border-radius:16px;padding:28px 28px 28px 32px;display:flex;gap:18px;align-items:flex-start">
        <div style="flex-shrink:0;width:44px;height:44px;background:rgba(150,30,30,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.3rem">🪞</div>
        <div>
          <div style="font-weight:700;color:var(--bordô);font-size:1rem;margin-bottom:6px">Adaptação demais nas relações</div>
          <div style="color:#5A3030;font-size:0.9rem;line-height:1.7">Mulheres 40+ que se percebem sempre cedendo, se moldando e abrindo mão de si mesmas para manter vínculos.</div>
        </div>
      </div>

      <div style="background:rgba(255,255,255,0.6);border:1px solid rgba(176,120,72,0.25);border-left:4px solid var(--rose-gold);border-radius:16px;padding:28px 28px 28px 32px;display:flex;gap:18px;align-items:flex-start">
        <div style="flex-shrink:0;width:44px;height:44px;background:rgba(176,120,72,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.3rem">🚧</div>
        <div>
          <div style="font-weight:700;color:var(--bordô);font-size:1rem;margin-bottom:6px">Dificuldade de colocar limites</div>
          <div style="color:#5A3030;font-size:0.9rem;line-height:1.7">Sentimento de que dizer "não" quebra relações. Fronteiras difusas com família, parceiros, filhos ou no trabalho.</div>
        </div>
      </div>

      <div style="background:rgba(255,255,255,0.6);border:1px solid rgba(176,120,72,0.25);border-left:4px solid var(--verde);border-radius:16px;padding:28px 28px 28px 32px;display:flex;gap:18px;align-items:flex-start">
        <div style="flex-shrink:0;width:44px;height:44px;background:rgba(92,122,90,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.3rem">💬</div>
        <div>
          <div style="font-weight:700;color:var(--bordô);font-size:1rem;margin-bottom:6px">Culpa ao se posicionar</div>
          <div style="color:#5A3030;font-size:0.9rem;line-height:1.7">Sensação de egoísmo ou ingratidão quando tenta ocupar seu espaço, expressar sua opinião ou cuidar de si.</div>
        </div>
      </div>

      <div style="background:rgba(255,255,255,0.6);border:1px solid rgba(176,120,72,0.25);border-left:4px solid var(--ouro);border-radius:16px;padding:28px 28px 28px 32px;display:flex;gap:18px;align-items:flex-start">
        <div style="flex-shrink:0;width:44px;height:44px;background:rgba(201,149,106,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.3rem">🧭</div>
        <div>
          <div style="font-weight:700;color:var(--bordô);font-size:1rem;margin-bottom:6px">Desejo de reconstruir direção</div>
          <div style="color:#5A3030;font-size:0.9rem;line-height:1.7">Mulheres que sentem que chegou a hora de construir uma nova fase com consciência, autonomia e direção própria.</div>
        </div>
      </div>

    </div>
    <p class="fade-in" style="text-align:center;margin-top:40px;font-family:'Playfair Display',serif;font-size:1.2rem;color:var(--bordô);font-style:italic">
      "Se pelo menos uma dessas descrições ressoa em você — esta jornada foi feita para você."
    </p>
    <div class="fade-in" style="text-align:center;margin-top:28px">
      <a href="https://forms.gle/5YFSvrEpk55tvBcH8" target="_blank" class="btn btn-primary">
        <i class="fas fa-star" style="margin-right:8px"></i>Quero fazer parte desta jornada
      </a>
    </div>
  </div>
</section>

<!-- ===== SEÇÃO 4: 4 CICLOS ===== -->
<section id="ciclos">
  <div class="container">
    <h2 class="section-headline fade-in">Os 4 Ciclos da Espiral</h2>
    <p class="section-subline fade-in">Cada ciclo aprofunda a jornada. Você não volta ao mesmo lugar; você sobe.</p>
    <div class="ciclos-grid fade-in">
      <!-- Ciclo 1 -->
      <div class="ciclo-card ciclo-card-1" onclick="toggleCiclo(this)">
        <div class="ciclo-num">1</div>
        <div class="ciclo-icon">🌑</div>
        <div class="ciclo-period">Encontros 1–3 · Semanas 1–3</div>
        <div class="ciclo-name">RECONHECER O AUTOABANDONO</div>
        <div class="ciclo-contos">Vasalisa, a Sabida · O Patinho Feio · Manawee</div>
        <div class="ciclo-desc">Um ciclo de fortalecimento interno. Antes do confronto, é preciso reconstruir a base da identidade.</div>
        <div class="ciclo-temas">
          <span class="ciclo-tema-tag">Intuição</span>
          <span class="ciclo-tema-tag">Identidade</span>
          <span class="ciclo-tema-tag">Diferenciação</span>
        </div>
        <div class="ciclo-expand">
          <div class="ciclo-expand-inner">
            <p><strong style="color:var(--ouro)">Vasalisa, a Sabida:</strong> Recuperar a chama intuitiva.</p>
            <p><strong style="color:var(--ouro)">O Patinho Feio:</strong> Reconhecer deslocamento identitário.</p>
            <p><strong style="color:var(--ouro)">Manawee:</strong> Diferenciar-se e nomear o feminino próprio.</p>
            <p style="margin-top:10px;color:var(--cinza);font-size:0.78rem">Clique novamente para fechar</p>
          </div>
        </div>
      </div>
      <!-- Ciclo 2 -->
      <div class="ciclo-card ciclo-card-2" onclick="toggleCiclo(this)">
        <div class="ciclo-num">2</div>
        <div class="ciclo-icon">🌘</div>
        <div class="ciclo-period">Encontros 4–6 · Semanas 4–6</div>
        <div class="ciclo-name">ILUMINAR PADRÕES RELACIONAIS</div>
        <div class="ciclo-contos">Mulher-Esqueleto · Barba-Azul · A Donzela sem Mãos</div>
        <div class="ciclo-desc">Um ciclo de confronto consciente. Nomear padrões e reconhecer o que não pode mais ser ignorado.</div>
        <div class="ciclo-temas">
          <span class="ciclo-tema-tag">Intimidade</span>
          <span class="ciclo-tema-tag">Autoengano</span>
          <span class="ciclo-tema-tag">Autonomia</span>
        </div>
        <div class="ciclo-expand">
          <div class="ciclo-expand-inner">
            <p><strong style="color:#4a9e4a">Mulher-Esqueleto:</strong> Medo da intimidade.</p>
            <p><strong style="color:#4a9e4a">Barba-Azul:</strong> Autoengano e silenciamento crônico.</p>
            <p><strong style="color:#4a9e4a">A Donzela sem Mãos:</strong> Reconstrução após perda de autonomia.</p>
            <p style="margin-top:10px;color:var(--cinza);font-size:0.78rem">Clique novamente para fechar</p>
          </div>
        </div>
      </div>
      <!-- Ciclo 3 -->
      <div class="ciclo-card ciclo-card-3" onclick="toggleCiclo(this)">
        <div class="ciclo-num">3</div>
        <div class="ciclo-icon">🌕</div>
        <div class="ciclo-period">Encontros 7–9 · Semanas 7–9</div>
        <div class="ciclo-name">CONSTRUIR AUTONOMIA INTERNA</div>
        <div class="ciclo-contos">Pele de Foca · La Llorona · Urso da Meia-Lua</div>
        <div class="ciclo-desc">Um ciclo de fortalecimento emocional e posicionamento. Aqui nasce a autonomia comportamental.</div>
        <div class="ciclo-temas">
          <span class="ciclo-tema-tag">Identidade</span>
          <span class="ciclo-tema-tag">Luto</span>
          <span class="ciclo-tema-tag">Raiva Madura</span>
        </div>
        <div class="ciclo-expand">
          <div class="ciclo-expand-inner">
            <p><strong style="color:#aaa">Pele de Foca:</strong> Recuperar identidade.</p>
            <p><strong style="color:#aaa">La Llorona:</strong> Atravessar lutos.</p>
            <p><strong style="color:#aaa">Urso da Meia-Lua:</strong> Raiva madura e limites.</p>
            <p style="margin-top:10px;color:var(--cinza);font-size:0.78rem">Clique novamente para fechar</p>
          </div>
        </div>
      </div>
      <!-- Ciclo 4 -->
      <div class="ciclo-card ciclo-card-4" onclick="toggleCiclo(this)">
        <div class="ciclo-num">4</div>
        <div class="ciclo-icon">🌟</div>
        <div class="ciclo-period">Encontros 10–12 · Semanas 10–12</div>
        <div class="ciclo-name">DIREÇÃO E INTEGRAÇÃO</div>
        <div class="ciclo-contos">Deusas Sujas · Cabelos de Ouro · La Loba</div>
        <div class="ciclo-desc">Um ciclo de integração e direção. Consolidar maturidade e assumir o próprio lugar no mundo.</div>
        <div class="ciclo-temas">
          <span class="ciclo-tema-tag">Instinto Criativo</span>
          <span class="ciclo-tema-tag">Discernimento</span>
          <span class="ciclo-tema-tag">Identidade Plena</span>
        </div>
        <div class="ciclo-expand">
          <div class="ciclo-expand-inner">
            <p><strong style="color:var(--ouro)">Deusas Sujas:</strong> Instinto criativo integrado.</p>
            <p><strong style="color:var(--ouro)">Cabelos de Ouro:</strong> Discernimento e maturidade.</p>
            <p><strong style="color:var(--ouro)">La Loba:</strong> Reconstrução final da identidade.</p>
            <p style="margin-top:10px;color:var(--cinza);font-size:0.78rem">Clique novamente para fechar</p>
          </div>
        </div>
      </div>
    </div>
    <p class="ciclo-msg fade-in">✦ Clique em cada ciclo para ver os contos ✦</p>
  </div>
</section>

<!-- ===== SEÇÃO 5: 12 CONTOS ===== -->
<section id="contos">
  <div class="container">
    <h2 class="section-headline fade-in">Os 12 Contos da Jornada</h2>
    <p class="section-subline fade-in">Uma espiral de 12 semanas · 4 ciclos · 12 portais de reconstrução</p>
    <p class="section-subline fade-in" style="margin-top:-1.5rem;margin-bottom:2.5rem;font-style:italic;font-size:1rem;color:rgba(255,255,255,0.75)">Cada conto é utilizado como portal simbólico a serviço de uma função terapêutica específica. O foco não é estudo literário, mas reconstrução da autonomia feminina na maturidade.</p>

    <!-- TIMELINE (desktop) -->
    <div class="timeline fade-in">
      ${generateTimeline()}
    </div>

    <!-- GRID (mobile) -->
    <div class="contos-grid fade-in">
      ${generateContosGrid()}
    </div>
  </div>
</section>

<!-- ===== SEÇÃO 6: DATAS ===== -->
<section id="datas">
  <div class="container">
    <h2 class="section-headline fade-in">Datas &amp; Cronograma</h2>
    <p class="section-subline fade-in">6 dias entre a Vivência e o início da Jornada para você refletir</p>
    <div class="datas-grid fade-in">
      <!-- Bloco Vivência -->
      <div class="datas-card datas-card-vivencia">
        <div class="datas-card-title"><svg width="28" height="28" viewBox="0 0 28 28" style="vertical-align:middle;margin-right:8px" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="13" stroke="#B07848" stroke-width="1.5" fill="rgba(176,120,72,0.1)"/><path d="M14 6 Q14 10 10 12 Q7 13.5 7 17 Q7 21 14 22 Q21 21 21 17 Q21 13.5 18 12 Q14 10 14 6Z" stroke="#B07848" stroke-width="1.3" fill="rgba(176,120,72,0.15)"/><circle cx="14" cy="17" r="2.5" fill="#B07848" opacity="0.8"/><path d="M14 6 Q16 9 14 11 Q12 9 14 6Z" fill="#C9956A" opacity="0.9"/></svg>Vivência Gratuita</div>
        <div class="datas-item"><span class="datas-item-icon">📅</span><span class="datas-item-text"><strong>Quarta, 25 de Março de 2026</strong></span></div>
        <div class="datas-item"><span class="datas-item-icon">🕖</span><span class="datas-item-text">19h30</span></div>
        <div class="datas-item"><span class="datas-item-icon">⏱️</span><span class="datas-item-text">90 minutos</span></div>
        <div class="datas-item"><span class="datas-item-icon">👥</span><span class="datas-item-text"><strong>Número limitado de participantes</strong></span></div>
        <div class="datas-desc">
          Uma vivência introdutória utilizando o conto <strong>Barba-Azul</strong> como portal simbólico para reconhecer a intuição ignorada e os pequenos autoabandono cotidianos.<br><br>
          A vivência é uma experiência inicial. A jornada aprofunda essa travessia ao longo de <strong>12 semanas estruturadas.</strong>
        </div>
        <div class="datas-conto">✦ Barba-Azul – Autoengano e silenciamento crônico</div>
        <a href="#cta-final" class="btn btn-secondary" style="width:100%;text-align:center;display:block">
          <i class="fas fa-key" style="margin-right:8px"></i>Abrir a Porta Proibida – Entrar
        </a>
      </div>
      <!-- Bloco Jornada -->
      <div class="datas-card datas-card-jornada">
        <div class="datas-card-title" style="display:flex;align-items:center;gap:12px;justify-content:center">
          <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0">
            <!-- Círculo externo -->
            <circle cx="50" cy="50" r="47" stroke="#C9956A" stroke-width="1.2" fill="none" opacity="0.4"/>
            <!-- Círculo médio externo -->
            <circle cx="50" cy="50" r="40" stroke="#C9956A" stroke-width="0.8" fill="none" opacity="0.3"/>
            <!-- 12 pétalas externas (uma por encontro) -->
            <g opacity="0.75">
              <ellipse cx="50" cy="16" rx="4" ry="9" fill="#C9956A" opacity="0.55" transform="rotate(0 50 50)"/>
              <ellipse cx="50" cy="16" rx="4" ry="9" fill="#C9956A" opacity="0.55" transform="rotate(30 50 50)"/>
              <ellipse cx="50" cy="16" rx="4" ry="9" fill="#C9956A" opacity="0.55" transform="rotate(60 50 50)"/>
              <ellipse cx="50" cy="16" rx="4" ry="9" fill="#C9956A" opacity="0.55" transform="rotate(90 50 50)"/>
              <ellipse cx="50" cy="16" rx="4" ry="9" fill="#C9956A" opacity="0.55" transform="rotate(120 50 50)"/>
              <ellipse cx="50" cy="16" rx="4" ry="9" fill="#C9956A" opacity="0.55" transform="rotate(150 50 50)"/>
              <ellipse cx="50" cy="16" rx="4" ry="9" fill="#C9956A" opacity="0.55" transform="rotate(180 50 50)"/>
              <ellipse cx="50" cy="16" rx="4" ry="9" fill="#C9956A" opacity="0.55" transform="rotate(210 50 50)"/>
              <ellipse cx="50" cy="16" rx="4" ry="9" fill="#C9956A" opacity="0.55" transform="rotate(240 50 50)"/>
              <ellipse cx="50" cy="16" rx="4" ry="9" fill="#C9956A" opacity="0.55" transform="rotate(270 50 50)"/>
              <ellipse cx="50" cy="16" rx="4" ry="9" fill="#C9956A" opacity="0.55" transform="rotate(300 50 50)"/>
              <ellipse cx="50" cy="16" rx="4" ry="9" fill="#C9956A" opacity="0.55" transform="rotate(330 50 50)"/>
            </g>
            <!-- 4 pétalas internas grandes (4 ciclos) -->
            <g opacity="0.85">
              <ellipse cx="50" cy="26" rx="6" ry="13" fill="#7B2D3E" opacity="0.45" transform="rotate(0 50 50)"/>
              <ellipse cx="50" cy="26" rx="6" ry="13" fill="#7B2D3E" opacity="0.45" transform="rotate(90 50 50)"/>
              <ellipse cx="50" cy="26" rx="6" ry="13" fill="#7B2D3E" opacity="0.45" transform="rotate(180 50 50)"/>
              <ellipse cx="50" cy="26" rx="6" ry="13" fill="#7B2D3E" opacity="0.45" transform="rotate(270 50 50)"/>
            </g>
            <!-- Losangos / pontos cardinais -->
            <g stroke="#C9956A" stroke-width="1" opacity="0.6">
              <line x1="50" y1="10" x2="50" y2="18" stroke-width="1.5"/>
              <line x1="90" y1="50" x2="82" y2="50" stroke-width="1.5"/>
              <line x1="50" y1="90" x2="50" y2="82" stroke-width="1.5"/>
              <line x1="10" y1="50" x2="18" y2="50" stroke-width="1.5"/>
            </g>
            <!-- Círculo interno decorativo -->
            <circle cx="50" cy="50" r="22" stroke="#7B2D3E" stroke-width="1" fill="rgba(123,45,62,0.08)" opacity="0.7"/>
            <circle cx="50" cy="50" r="16" stroke="#C9956A" stroke-width="0.8" fill="rgba(201,149,106,0.08)" opacity="0.8"/>
            <!-- Estrela de 8 pontas interna -->
            <g opacity="0.7">
              <path d="M50 34 L52.5 47.5 L66 42 L54.5 51.5 L62 63 L50 55 L38 63 L45.5 51.5 L34 42 L47.5 47.5 Z" fill="#7B2D3E" opacity="0.35" stroke="#C9956A" stroke-width="0.6"/>
            </g>
            <!-- Núcleo central -->
            <circle cx="50" cy="50" r="8" fill="#7B2D3E" opacity="0.7"/>
            <circle cx="50" cy="50" r="5" fill="#C9956A" opacity="0.9"/>
            <circle cx="50" cy="50" r="2.5" fill="#F5E6DA" opacity="0.95"/>
          </svg>
          Jornada Completa
        </div>
        <div class="datas-item"><span class="datas-item-icon">📅</span><span class="datas-item-text">Começa: <strong>Quarta, 01/04/2026</strong></span></div>
        <div class="datas-item"><span class="datas-item-icon">📅</span><span class="datas-item-text">Finaliza: <strong>Quarta, 17/06/2026</strong></span></div>
        <div class="datas-item"><span class="datas-item-icon">🕖</span><span class="datas-item-text"><strong>19h30–21h</strong> · toda quarta-feira</span></div>
        <div class="datas-item"><span class="datas-item-icon">⏱️</span><span class="datas-item-text">12 encontros semanais</span></div>
        <div class="datas-item"><span class="datas-item-icon">👥</span><span class="datas-item-text"><strong>Número limitado de participantes</strong></span></div>
        <div class="datas-desc">4 ciclos · 12 contos · Rito de Reconstrução Feminina 40+</div>
        <a href="https://forms.gle/5YFSvrEpk55tvBcH8" target="_blank" class="btn btn-primary" style="width:100%;text-align:center;display:block">
          INSCREVER-SE NA JORNADA
        </a>
      </div>
    </div>
    <!-- Timeline visual -->
    <div class="timeline-visual fade-in">
      <div class="tl-vis-item">
        <div class="tl-vis-dot" style="background:var(--vermelho)"></div>
        <div class="tl-vis-date">25/03</div>
        <div class="tl-vis-label">Vivência</div>
      </div>
      <div class="tl-vis-line"></div>
      <div class="tl-vis-item">
        <div class="tl-vis-dot"></div>
        <div class="tl-vis-date">01/04</div>
        <div class="tl-vis-label">Início</div>
      </div>
      <div class="tl-vis-line"></div>
      <div class="tl-vis-item">
        <div class="tl-vis-dot" style="background:var(--verde)"></div>
        <div class="tl-vis-date">08/04</div>
        <div class="tl-vis-label">Semana 2</div>
      </div>
      <div class="tl-vis-line"></div>
      <div class="tl-vis-item">
        <div class="tl-vis-dot" style="background:var(--prata)"></div>
        <div class="tl-vis-date">...</div>
        <div class="tl-vis-label">12 semanas</div>
      </div>
      <div class="tl-vis-line"></div>
      <div class="tl-vis-item">
        <div class="tl-vis-dot" style="background:var(--ouro);width:22px;height:22px;margin-top:-3px"></div>
        <div class="tl-vis-date">17/06</div>
        <div class="tl-vis-label">✨ Integração</div>
      </div>
    </div>
  </div>
</section>

<!-- ===== SEÇÃO 7: DEPOIMENTOS ===== -->
<section id="depoimentos">
  <div class="container">
    <h2 class="section-headline fade-in">Histórias de Transformação</h2>
    <p class="section-subline fade-in">O que mulheres dizem sobre a jornada</p>
    <div class="carousel fade-in">
      <div class="carousel-track" id="carouselTrack">
        <div class="carousel-slide">
          <div class="dep-card">
            <div class="dep-avatar">S</div>
            <div class="dep-stars">★★★★★</div>
            <div class="dep-name">SK</div>
            <p class="dep-text">"Minha experiência foi muito positiva, constatei várias situações que ainda estavam obscuras para mim. A contoterapia revelou se tratar de um instrumento de grande valia no processo de autoconhecimento e auto-análise."</p>
          </div>
        </div>
        <div class="carousel-slide">
          <div class="dep-card">
            <div class="dep-avatar">N</div>
            <div class="dep-stars">★★★★★</div>
            <div class="dep-name">Nelci Baratz, 70 anos</div>
            <p class="dep-text">"Tem sido surpreendente e desafiante. O conto escancara nossas dificuldades e comportamentos improdutivos. Fez muito sentido para mim neste momento e trouxe maior clareza de minhas emoções no processo que estava vivendo."</p>
          </div>
        </div>
        <div class="carousel-slide">
          <div class="dep-card">
            <div class="dep-avatar">A</div>
            <div class="dep-stars">★★★★★</div>
            <div class="dep-name">Algeny F., 70 anos</div>
            <p class="dep-text">"A Contoterapia possibilitou novas descobertas, novo momento de vida, maior clareza de emoções no processo que estava vivendo e alívio de emoções difíceis."</p>
          </div>
        </div>
      </div>
      <div class="carousel-controls">
        <button class="carousel-btn" onclick="moveCarousel(-1)"><i class="fas fa-chevron-left"></i></button>
        <div class="carousel-dots">
          <div class="carousel-dot active" onclick="goToSlide(0)"></div>
          <div class="carousel-dot" onclick="goToSlide(1)"></div>
          <div class="carousel-dot" onclick="goToSlide(2)"></div>
        </div>
        <button class="carousel-btn" onclick="moveCarousel(1)"><i class="fas fa-chevron-right"></i></button>
      </div>
    </div>
  </div>
</section>

<!-- ===== SEÇÃO 8B: INVESTIMENTO ===== -->
<section id="investimento" style="background: linear-gradient(180deg, var(--bg-base) 0%, var(--bg-alt) 100%); padding: 90px 0;">
  <div class="container">
    <h2 class="section-headline fade-in">Investimento</h2>
    <p class="section-subline fade-in">Uma jornada estruturada, com suporte real e transformação duradoura</p>

    <div class="fade-in" style="max-width:820px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:28px">

      <!-- À Vista -->
      <div style="background:linear-gradient(135deg,rgba(150,30,30,0.08),rgba(242,232,223,0.98));border:2px solid rgba(150,30,30,0.35);border-radius:20px;padding:40px 36px;position:relative;overflow:hidden;text-align:center">
        <div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--bordô),var(--rose-gold))"></div>
        <div style="font-size:0.72rem;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:var(--bordô);margin-bottom:12px">À VISTA</div>
        <div style="font-family:'Playfair Display',serif;font-size:3rem;font-weight:900;color:var(--bordô);line-height:1;margin-bottom:4px">R$ 1.680</div>
        <div style="font-size:0.82rem;color:#6A5045;margin-bottom:24px">Condição especial para pagamento à vista</div>
        <ul style="list-style:none;padding:0;margin:0 0 20px;text-align:left;display:flex;flex-direction:column;gap:10px">
          <li style="display:flex;align-items:center;gap:10px;color:#3A2820;font-size:0.88rem">
            <i class="fas fa-check-circle" style="color:var(--bordô);flex-shrink:0"></i>
            12 encontros semanais (1h30 cada)
          </li>
          <li style="display:flex;align-items:center;gap:10px;color:#3A2820;font-size:0.88rem">
            <i class="fas fa-check-circle" style="color:var(--bordô);flex-shrink:0"></i>
            Grupo fechado (6 a 10 mulheres)
          </li>
          <li style="display:flex;align-items:center;gap:10px;color:#3A2820;font-size:0.88rem">
            <i class="fas fa-check-circle" style="color:var(--bordô);flex-shrink:0"></i>
            Estrutura completa em 4 ciclos
          </li>
          <li style="display:flex;align-items:center;gap:10px;color:#3A2820;font-size:0.88rem">
            <i class="fas fa-check-circle" style="color:var(--bordô);flex-shrink:0"></i>
            Certificação ao final
          </li>
        </ul>
        <div style="background:rgba(150,30,30,0.06);border:1px solid rgba(150,30,30,0.25);border-radius:10px;padding:14px 18px;margin-bottom:24px;font-size:0.88rem;color:#3A2820;line-height:1.6;text-align:left">
          <div style="font-size:0.7rem;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--bordô);margin-bottom:8px">✦ Bônus Especial</div>
          <i class="fas fa-star" style="color:var(--rose-gold);margin-right:6px"></i>
          Sessão individual de integração pós-jornada (50 minutos)
        </div>
        <a href="https://forms.gle/5YFSvrEpk55tvBcH8" target="_blank" class="btn btn-secondary" style="width:100%;text-align:center;display:block">
          Quero este plano
        </a>
      </div>

      <!-- A Prazo -->
      <div style="background:linear-gradient(135deg,rgba(176,120,72,0.08),rgba(242,232,223,0.98));border:2px solid rgba(176,120,72,0.35);border-radius:20px;padding:40px 36px;position:relative;overflow:hidden;text-align:center">
        <div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--rose-gold),var(--ouro-claro))"></div>
        <div style="font-size:0.72rem;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:var(--rose-gold);margin-bottom:12px">A PRAZO</div>
        <div style="font-family:'Playfair Display',serif;font-size:3rem;font-weight:900;color:var(--rose-gold);line-height:1;margin-bottom:4px">R$ 1.800</div>
        <div style="font-size:0.82rem;color:#6A5045;margin-bottom:28px">Em até <strong>10x</strong> sem juros</div>
        <ul style="list-style:none;padding:0;margin:0 0 24px;text-align:left;display:flex;flex-direction:column;gap:10px">
          <li style="display:flex;align-items:center;gap:10px;color:#3A2820;font-size:0.88rem">
            <i class="fas fa-check-circle" style="color:var(--rose-gold);flex-shrink:0"></i>
            12 encontros semanais (1h30 cada)
          </li>
          <li style="display:flex;align-items:center;gap:10px;color:#3A2820;font-size:0.88rem">
            <i class="fas fa-check-circle" style="color:var(--rose-gold);flex-shrink:0"></i>
            Grupo fechado (6 a 10 mulheres)
          </li>
          <li style="display:flex;align-items:center;gap:10px;color:#3A2820;font-size:0.88rem">
            <i class="fas fa-check-circle" style="color:var(--rose-gold);flex-shrink:0"></i>
            Estrutura completa em 4 ciclos
          </li>
          <li style="display:flex;align-items:center;gap:10px;color:#3A2820;font-size:0.88rem">
            <i class="fas fa-check-circle" style="color:var(--rose-gold);flex-shrink:0"></i>
            Certificação ao final
          </li>
        </ul>
        <a href="https://forms.gle/5YFSvrEpk55tvBcH8" target="_blank" class="btn btn-primary" style="width:100%;text-align:center;display:block">
          Quero este plano
        </a>
      </div>

    </div>

    <!-- Nota de rodapé -->
    <p class="fade-in" style="text-align:center;margin-top:32px;color:#7A6055;font-size:0.88rem;max-width:560px;margin-left:auto;margin-right:auto;line-height:1.7">
      <i class="fas fa-info-circle" style="color:var(--rose-gold);margin-right:6px"></i>
      Dúvidas sobre pagamento ou condições especiais?
      <a href="https://wa.me/5531984985635" target="_blank" style="color:var(--bordô);font-weight:700;text-decoration:none"> Fale via WhatsApp →</a>
    </p>
  </div>
</section>

<!-- ===== SEÇÃO 8: FAQ ===== -->
<section id="faq">
  <div class="container">
    <h2 class="section-headline fade-in">Perguntas Frequentes</h2>
    <p class="section-subline fade-in">Tudo que você precisa saber antes de se inscrever</p>
    <div class="faq-list fade-in">
      ${generateFAQ()}
    </div>
  </div>
</section>

<!-- ===== SEÇÃO 9: CTA FINAL ===== -->
<section id="cta-final">
  <svg class="mandala-deco" style="width:800px;height:800px;top:50%;left:50%" viewBox="0 0 400 400">
    <circle cx="200" cy="200" r="195" stroke="#C9956A" stroke-width="1" fill="none"/>
    <circle cx="200" cy="200" r="150" stroke="#7B2D3E" stroke-width="1" fill="none"/>
    <circle cx="200" cy="200" r="100" stroke="#C9956A" stroke-width="1" fill="none"/>
    <g stroke="#C9956A" stroke-width="0.6" opacity="0.4">
      <line x1="200" y1="5" x2="200" y2="395"/>
      <line x1="5" y1="200" x2="395" y2="200"/>
      <line x1="62" y1="62" x2="338" y2="338"/>
      <line x1="338" y1="62" x2="62" y2="338"/>
    </g>
  </svg>
  <div class="container">
    <div class="cta-final-content fade-in">
      <h2 class="cta-title">Está pronta para se reconstruir?</h2>
      <p class="cta-sub">A Vivência começa Quarta 25/03 · A Jornada começa Quarta 01/04</p>
      <div class="cta-info">
        <div class="cta-info-item"><i class="fas fa-calendar"></i> Encontros toda quarta, 19h30–21h</div>
        <div class="cta-info-item"><i class="fas fa-users"></i> Número limitado de participantes</div>
        <div class="cta-info-item"><i class="fas fa-heart"></i> 12 semanas de reconstrução da autonomia</div>
        <div class="cta-info-item"><i class="fas fa-clock"></i> Vagas limitadas</div>
      </div>
      <div class="cta-btns">
        <a href="https://forms.gle/5YFSvrEpk55tvBcH8" target="_blank" class="btn btn-primary" style="font-size:1.05rem;padding:18px 42px">
          <i class="fas fa-star" style="margin-right:8px"></i>INSCREVER-SE NA JORNADA
        </a>
        <a href="https://forms.gle/WUkarZdTAAPwGFjg7" target="_blank" class="btn btn-secondary" style="font-size:1rem;padding:16px 32px">
          <i class="fas fa-star" style="margin-right:8px"></i>Inscrever para Vivência Gratuita – 25/03
        </a>
        <a href="https://wa.me/5531984985635" target="_blank" class="btn btn-whatsapp" style="font-size:0.95rem;padding:16px 28px">
          <i class="fab fa-whatsapp" style="margin-right:8px"></i>Tirar Dúvidas no WhatsApp
        </a>
      </div>
      <p class="cta-obs">Grupo fechado de 6 a 10 mulheres · À vista R$ 1.680,00 · A prazo R$ 1.800,00 em 10x sem juros · Plano flexível disponível.</p>
    </div>
  </div>
</section>

<!-- ===== SEÇÃO 10: FOOTER ===== -->
<footer id="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <svg width="50" height="50" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" stroke="#C9956A" stroke-width="2" fill="none"/>
            <circle cx="50" cy="50" r="30" stroke="#7B2D3E" stroke-width="1.5" fill="none"/>
            <circle cx="50" cy="50" r="8" fill="#C9956A"/>
            <g stroke="#C9956A" stroke-width="1" opacity="0.5">
              <line x1="50" y1="2" x2="50" y2="98"/>
              <line x1="2" y1="50" x2="98" y2="50"/>
              <line x1="15" y1="15" x2="85" y2="85"/>
              <line x1="85" y1="15" x2="15" y2="85"/>
            </g>
          </svg>
          <div class="footer-logo-text">Mandala em Movimento</div>
        </div>
        <p class="footer-desc">
          Jornada terapêutica para mulheres 40+.<br>
          Rito de Reconstrução Feminina 40+.<br>
          Conteterapeuta (Método CIP) · Facilitadora de Focalização.<br>
          Encontros toda quarta-feira, 19h30–21h.
        </p>
        <div class="footer-social" style="margin-top:16px">
          <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://wa.me/5531984985635" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Datas</div>
        <ul>
          <li>Vivência: Qua 25/03</li>
          <li>Jornada: Qua 01/04</li>
          <li>Finaliza: Qua 17/06</li>
          <li>Horário: 19h30–21h</li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Contato</div>
        <ul>
          <li><a href="mailto:mclangsdorff@gmail.com">📧 mclangsdorff@gmail.com</a></li>
          <li><a href="https://wa.me/5531984985635">📱 WhatsApp (31) 9 8498-5635</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Links</div>
        <ul>
          <li><a href="#sobre">Sobre a Jornada</a></li>
          <li><a href="#ciclos">Os 4 Ciclos</a></li>
          <li><a href="#contos">12 Contos</a></li>
          <li><a href="#investimento">Investimento</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#cta-final">Inscrição</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bar">
      <div class="footer-copy">© 2026 Jornada Mandala em Movimento. Todos os direitos reservados.</div>
      <div class="footer-links">
        <a href="#">Privacidade</a>
        <a href="#">Termos de Uso</a>
      </div>
    </div>
    <p class="footer-heart" style="margin-top:12px">Desenvolvido com ❤️ para mulheres em transformação</p>
  </div>
</footer>

<!-- STICKY CTA -->
<div class="sticky-cta" id="stickyCta">
  <a href="https://wa.me/5531984985635" target="_blank" class="btn btn-whatsapp" style="padding:12px 18px;font-size:0.8rem">
    <i class="fab fa-whatsapp"></i>
  </a>
  <a href="https://forms.gle/5YFSvrEpk55tvBcH8" target="_blank" class="btn btn-primary" style="padding:12px 20px;font-size:0.78rem">Inscrever-se</a>
</div>

<!-- POPUP -->
<div class="popup-overlay" id="popup">
  <div class="popup-box">
    <button class="popup-close" onclick="closePopup()">✕</button>
    <div class="popup-mandala-wrap">
      <svg width="90" height="90" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="popupMgCenter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#C9956A" stop-opacity="0.4"/>
            <stop offset="50%" stop-color="#7B2D3E" stop-opacity="0.2"/>
            <stop offset="100%" stop-color="#2C1A1E" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="250" cy="250" r="245" fill="url(#popupMgCenter)"/>
        <circle cx="250" cy="250" r="240" stroke="#C9956A" stroke-width="1.2" fill="none" opacity="0.7"/>
        <circle cx="250" cy="250" r="210" stroke="#7B2D3E" stroke-width="1.8" fill="none" opacity="0.8"/>
        <circle cx="250" cy="250" r="175" stroke="#C9956A" stroke-width="1" fill="none" opacity="0.6"/>
        <circle cx="250" cy="250" r="145" stroke="#E0B899" stroke-width="1.4" fill="none" opacity="0.7"/>
        <circle cx="250" cy="250" r="110" stroke="#7B2D3E" stroke-width="1.2" fill="none" opacity="0.6"/>
        <circle cx="250" cy="250" r="75"  stroke="#C9956A" stroke-width="1.8" fill="none" opacity="0.8"/>
        <circle cx="250" cy="250" r="42"  stroke="#E0B899" stroke-width="1.2" fill="none" opacity="0.7"/>
        <circle cx="250" cy="250" r="16"  fill="#C9956A" opacity="0.85"/>
        <circle cx="250" cy="250" r="10"  fill="#7B2D3E" opacity="0.95"/>
        <circle cx="250" cy="250" r="5"   fill="#E0B899" opacity="1"/>
        <g stroke="#C9956A" stroke-width="0.8" opacity="0.45">
          <line x1="250" y1="10"  x2="250" y2="490"/>
          <line x1="10"  y1="250" x2="490" y2="250"/>
          <line x1="73"  y1="73"  x2="427" y2="427"/>
          <line x1="427" y1="73"  x2="73"  y2="427"/>
          <line x1="10"  y1="160" x2="490" y2="340"/>
          <line x1="10"  y1="340" x2="490" y2="160"/>
          <line x1="160" y1="10"  x2="340" y2="490"/>
          <line x1="340" y1="10"  x2="160" y2="490"/>
          <line x1="36"  y1="113" x2="464" y2="387"/>
          <line x1="36"  y1="387" x2="464" y2="113"/>
          <line x1="113" y1="36"  x2="387" y2="464"/>
          <line x1="387" y1="36"  x2="113" y2="464"/>
        </g>
        <g opacity="0.35" fill="#C9956A">
          <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(0 250 250)"/>
          <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(30 250 250)"/>
          <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(60 250 250)"/>
          <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(90 250 250)"/>
          <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(120 250 250)"/>
          <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(150 250 250)"/>
          <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(180 250 250)"/>
          <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(210 250 250)"/>
          <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(240 250 250)"/>
          <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(270 250 250)"/>
          <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(300 250 250)"/>
          <ellipse cx="250" cy="105" rx="8" ry="18" transform="rotate(330 250 250)"/>
        </g>
        <text x="250" y="258" text-anchor="middle" font-family="Georgia,serif" font-size="18" fill="#C9956A" opacity="0.9">✦ 12 CONTOS ✦</text>
      </svg>
    </div>
    <h3 class="popup-title">Fique por dentro!</h3>
    <p class="popup-text">Deixe seu e-mail para receber informações sobre a Vivência Gratuita e a Jornada Mandala em Movimento.</p>
    <div class="popup-form">
      <a href="https://forms.gle/3prmVDmPdUqcHDrn6" target="_blank" class="btn btn-primary" style="text-align:center;padding:16px" onclick="closePopup()">
        <i class="fas fa-envelope" style="margin-right:8px"></i>Quero receber!
      </a>
      <p style="font-size:0.78rem;color:#8A7070;margin-top:4px">Você será direcionada ao formulário de inscrição.</p>
    </div>

<script>
// ===== PROGRESS BAR =====
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = (scrollTop / docHeight) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';
});

// ===== FADE IN OBSERVER =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const nb = document.getElementById('navbar');
  if(window.scrollY > 80) { nb.style.padding = '8px 0'; }
  else { nb.style.padding = '12px 0'; }
  // Sticky CTA
  const cta = document.getElementById('stickyCta');
  const ctaFinal = document.getElementById('cta-final');
  const rect = ctaFinal.getBoundingClientRect();
  if(window.scrollY < 400 || rect.top < window.innerHeight) cta.classList.add('hidden');
  else cta.classList.remove('hidden');
});

// ===== MOBILE MENU =====
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// ===== CICLOS TOGGLE =====
function toggleCiclo(card) {
  card.classList.toggle('expanded');
}

// ===== CAROUSEL =====
let currentSlide = 0;
const totalSlides = 3;
function moveCarousel(dir) {
  currentSlide = (currentSlide + dir + totalSlides) % totalSlides;
  updateCarousel();
}
function goToSlide(idx) { currentSlide = idx; updateCarousel(); }
function updateCarousel() {
  document.getElementById('carouselTrack').style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
  document.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}
setInterval(() => moveCarousel(1), 5000);

// ===== FAQ =====
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const wasOpen = q.classList.contains('open');
    document.querySelectorAll('.faq-question').forEach(o => { o.classList.remove('open'); o.nextElementSibling.classList.remove('open'); });
    if(!wasOpen) { q.classList.add('open'); q.nextElementSibling.classList.add('open'); }
  });
});

// ===== POPUP =====
setTimeout(() => { document.getElementById('popup').classList.add('show'); }, 35000);
function closePopup() { document.getElementById('popup').classList.remove('show'); }
document.getElementById('popup').addEventListener('click', (e) => { if(e.target === document.getElementById('popup')) closePopup(); });

// ===== PARTICLES =====
(function createParticles() {
  const container = document.getElementById('particles');
  for(let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = \`left:\${Math.random()*100}%;animation-delay:\${Math.random()*8}s;animation-duration:\${6+Math.random()*8}s;width:\${1+Math.random()*2}px;height:\${1+Math.random()*2}px\`;
    container.appendChild(p);
  }
})();

// ===== SMOOTH SCROLL for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if(target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
</script>
</body>
</html>`)
})

// Helper: Timeline dos 12 contos
function generateTimeline(): string {
  const contos = [
    { n: '01', name: 'VASALISA, A SABIDA', desc: 'Recuperar a chama intuitiva', tema: 'Você ainda confia na sua intuição?', data: 'Qua 01/04', ciclo: 1, icon: '🪆', special: '' },
    { n: '02', name: 'O PATINHO FEIO', desc: 'Reconhecer deslocamento identitário', tema: 'Onde você nunca se sentiu pertencer?', data: 'Qua 08/04', ciclo: 1, icon: '🦢', special: '' },
    { n: '03', name: 'MANAWEE', desc: 'Diferenciar-se e nomear o feminino próprio', tema: 'Você sabe quem você realmente é?', data: 'Qua 15/04', ciclo: 1, icon: '🐕', special: '' },
    { n: '04', name: 'MULHER-ESQUELETO', desc: 'Medo da intimidade', tema: 'O que faz você recuar quando alguém se aproxima?', data: 'Qua 22/04', ciclo: 2, icon: '🦴', special: '' },
    { n: '05', name: 'BARBA-AZUL', desc: 'Autoengano e silenciamento crônico', tema: 'O que você sabe, mas finge não saber?', data: 'Qua 29/04', ciclo: 2, icon: '🗝️', special: '' },
    { n: '06', name: 'A DONZELA SEM MÃOS', desc: 'Reconstrução após perda de autonomia', tema: 'O que foi tomado de você sem sua permissão?', data: 'Qua 06/05', ciclo: 2, icon: '🌙', special: '' },
    { n: '07', name: 'PELE DE FOCA', desc: 'Recuperar identidade', tema: 'Onde você perdeu contato consigo mesma?', data: 'Qua 13/05', ciclo: 3, icon: '🦭', special: '' },
    { n: '08', name: 'LA LLORONA', desc: 'Atravessar lutos', tema: 'O que você ainda precisa chorar?', data: 'Qua 20/05', ciclo: 3, icon: '💧', special: '' },
    { n: '09', name: 'URSO DA MEIA-LUA', desc: 'Raiva madura e limites', tema: 'Sua raiva te protege ou te aprisiona?', data: 'Qua 27/05', ciclo: 3, icon: '🐻', special: '' },
    { n: '10', name: 'DEUSAS SUJAS', desc: 'Instinto criativo integrado', tema: 'Qual parte selvagem você aprendeu a esconder?', data: 'Qua 03/06', ciclo: 4, icon: '🔥', special: '' },
    { n: '11', name: 'CABELOS DE OURO', desc: 'Discernimento e maturidade', tema: 'O que suas cicatrizes ensinaram sobre você?', data: 'Qua 10/06', ciclo: 4, icon: '✨', special: '' },
    { n: '12', name: 'LA LOBA', desc: 'Reconstrução final da identidade', tema: 'Quem sou agora?', data: 'Qua 17/06', ciclo: 4, icon: '🐺', special: 'Ritual de Fechamento' },
  ]
  const cicloColors: Record<number, string> = { 1: 'var(--vermelho)', 2: 'var(--verde)', 3: 'var(--prata)', 4: 'var(--ouro)' }
  return contos.map((c, i) => `
    <div class="tl-item">
      <div class="tl-card">
        <div class="tl-num">Encontro ${c.n} · Ciclo ${c.ciclo}</div>
        <div class="tl-conto">${c.icon} ${c.name}</div>
        <div class="tl-desc">${c.desc}</div>
        <div class="tl-tema">"${c.tema}"</div>
        <div class="tl-data">📅 ${c.data} · 1h30</div>
        ${c.special ? `<span class="tl-special">⭐ ${c.special}</span>` : ''}
      </div>
      <div class="tl-dot tl-ciclo-${c.ciclo}" style="border-color:${cicloColors[c.ciclo]};color:${cicloColors[c.ciclo]}">${c.n}</div>
    </div>
  `).join('')
}

function generateContosGrid(): string {
  const contos = [
    { n: '01', name: 'Vasalisa, a Sabida', desc: 'Recuperar a Intuição', ciclo: 1 },
    { n: '02', name: 'O Patinho Feio', desc: 'Deslocamento Identitário', ciclo: 1 },
    { n: '03', name: 'Manawee', desc: 'Nomear o Feminino', ciclo: 1 },
    { n: '04', name: 'Mulher-Esqueleto', desc: 'Medo da Intimidade', ciclo: 2 },
    { n: '05', name: 'Barba-Azul', desc: 'Autoengano e Silêncio', ciclo: 2 },
    { n: '06', name: 'A Donzela sem Mãos', desc: 'Perda de Autonomia', ciclo: 2 },
    { n: '07', name: 'Pele de Foca', desc: 'Recuperar Identidade', ciclo: 3 },
    { n: '08', name: 'La Llorona', desc: 'Atravessar Lutos', ciclo: 3 },
    { n: '09', name: 'Urso da Meia-Lua', desc: 'Raiva Madura e Limites', ciclo: 3 },
    { n: '10', name: 'Deusas Sujas', desc: 'Instinto Criativo', ciclo: 4 },
    { n: '11', name: 'Cabelos de Ouro', desc: 'Discernimento e Maturidade', ciclo: 4 },
    { n: '12', name: 'La Loba', desc: 'Identidade Reconstruída', ciclo: 4 },
  ]
  const cicloColors: Record<number, string> = { 1: 'var(--vermelho)', 2: 'var(--verde)', 3: 'var(--prata)', 4: 'var(--ouro)' }
  return contos.map(c => `
    <div class="conto-mini" style="border-left:3px solid ${cicloColors[c.ciclo]}">
      <div class="conto-mini-num">Nº ${c.n} · Ciclo ${c.ciclo}</div>
      <div class="conto-mini-name">${c.name}</div>
      <div class="conto-mini-desc">${c.desc}</div>
    </div>
  `).join('')
}

function generateFAQ(): string {
  const items = [
    { q: 'Qual é a faixa etária? Posso participar?', a: 'Sim! A jornada é para <strong>mulheres a partir de 40 anos</strong>. Temos especial atenção para 50+, 60+ e 70+. A selvagem interior não envelhece.' },
    { q: 'Qual é o horário? Há flexibilidade?', a: 'Toda <strong>quarta-feira, 19h30–21h</strong> (1h30 de duração). Horário fixo. Flexibilidade limitada.' },
    { q: 'Posso faltar alguns encontros?', a: 'Sim, mas recomendamos <strong>80%+ de presença</strong>. A jornada é em espiral crescente. Cada encontro aprofunda. Faltas frequentes prejudicam a experiência.' },
    { q: 'Preciso ter lido "Mulheres que Correm com os Lobos"?', a: '<strong>Não.</strong> Vou ler os trechos com você e guiar toda a jornada. O livro é inspiração, não pré-requisito.' },
    { q: 'Qual é o investimento? Há plano de pagamento?', a: '<strong>À vista: R$ 1.680,00</strong> + Bônus Sessão individual após encerramento da jornada (50 min).<br><strong>A prazo: R$ 1.800,00</strong> em até 10x sem juros. Plano flexível disponível.' },
    { q: 'Como é o formato – presencial ou online?', a: 'Formato <strong>online</strong> na plataforma <strong>Zoom</strong>. Tecnologia testada e suporte disponível para todas as participantes.' },
    { q: 'Há certificado ao final?', a: 'Sim. Você recebe <strong>Certificado de Conclusão — Carga horária total: 18 horas — Rito de Reconstrução Feminina 40+</strong>, além de acesso a grupo de suporte contínuo (opcional).' },
    { q: 'Preciso ter vivência prévia em terapia?', a: '<strong>Não.</strong> Essa jornada é desenhada para mulheres em qualquer estágio. Se você tem trauma intenso ativo, podemos conversar individualmente.' },
    { q: 'Como é o processo de inscrição?', a: '1. Preencha o formulário no botão de inscrição<br>2. Você receberá email de confirmação<br>3. Entraremos em contato via WhatsApp<br>4. Você assina acordo de grupo<br>5. <strong>Bem-vinda à jornada!</strong>' },
  ]
  return items.map((item, i) => `
    <div class="faq-item">
      <div class="faq-question" tabindex="0">
        <span class="faq-q-text">❯ ${item.q}</span>
        <i class="fas fa-chevron-down faq-icon"></i>
      </div>
      <div class="faq-answer">
        <div class="faq-answer-inner">${item.a}</div>
      </div>
    </div>
  `).join('')
}

export default app
