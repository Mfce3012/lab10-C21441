class BannerUCR extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host {
          --banner-bg: #d4a84b;
          --banner-title-color: #7b2d8b;
          --banner-text-color: #222;
          --banner-radius: 6px;
        }
        .banner {
          width: 420px;
          background-color: var(--banner-bg);
          padding: 36px 30px 40px 30px;
          border-radius: var(--banner-radius);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
          overflow: hidden;
        }
        .banner-titulo {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .signo-apertura {
          font-family: 'Nunito', sans-serif;
          font-size: 52px;
          font-weight: 900;
          color: var(--banner-title-color);
          line-height: 1;
          transform: rotate(-5deg);
          display: inline-block;
        }
        .bloque-la-sede {
          background-color: #7b2d8b;
          padding: 8px 16px 8px 14px;
          display: inline-flex;
          align-items: center;
          transform: rotate(-3deg);
          box-shadow: 2px 2px 0px rgba(0,0,0,0.15);
        }
        .bloque-la-sede span {
          font-family: 'Nunito', sans-serif;
          font-size: 28px;
          font-weight: 900;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .banner-segunda-linea {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: -4px;
        }
        .bloque-te {
          background-color: #00bcd4;
          padding: 8px 18px;
          display: inline-flex;
          align-items: center;
          transform: rotate(-3deg);
          box-shadow: 2px 2px 0px rgba(0,0,0,0.15);
        }
        .bloque-te span {
          font-family: 'Nunito', sans-serif;
          font-size: 28px;
          font-weight: 900;
          color: white;
          text-transform: uppercase;
        }
        .texto-acompana {
          font-family: 'Nunito', sans-serif;
          font-size: 28px;
          font-weight: 900;
          color: #7b2d8b;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .signo-cierre {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 4px;
        }
        .exclamacion-cuerpo {
          width: 18px;
          height: 34px;
          background-color: #00bcd4;
          border-radius: 3px 3px 0 0;
        }
        .exclamacion-punto {
          width: 18px;
          height: 18px;
          background-color: #7b2d8b;
          border-radius: 50%;
          margin-top: 4px;
        }
        .banner-texto {
          margin-top: 6px;
        }
        .banner-texto p {
          font-family: 'Nunito', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #7b2d8b;
          line-height: 1.5;
        }
        .banner-texto .subtexto {
          font-size: 20px;
          font-weight: 900;
        }
      </style>
      <div class="banner">
        <div class="banner-titulo">
          <span class="signo-apertura">¡</span>
          <div class="bloque-la-sede"><span>La Sede</span></div>
        </div>
        <div class="banner-segunda-linea">
          <div class="bloque-te"><span>Te</span></div>
          <span class="texto-acompana">Acompaña</span>
          <div class="signo-cierre">
            <div class="exclamacion-cuerpo"></div>
            <div class="exclamacion-punto"></div>
          </div>
        </div>
        <div class="banner-texto" part="banner-texto">
          <p>El respeto no se negocia</p>
          <p class="subtexto">
            <slot name="subtexto">¡Pará ya de acosar!</slot>
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('banner-ucr', BannerUCR);
