class PanelUCR extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        :host {
          --panel-bg: linear-gradient(
            160deg,
            #1a3a6b 0%,
            #0d2654 60%,
            #0a1e45 100%
          );

          --panel-footer-color: #b0bfd8;
          --panel-radius: 8px;
          --panel-text-color: #e0e8f5;
          --panel-arrow-color: #b0bfd8;
        }

        .panel-ucr {
          width: 320px;
          background: var(--panel-bg);
          border-radius: var(--panel-radius);
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
          border: 1px solid #2a4a8a;
        }

        .panel-filas {
          display: flex;
          flex-direction: column;
        }

        .panel-fila {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 22px;
          border-bottom: 1px solid rgba(180, 195, 220, 0.3);
        }

        .panel-fila:last-child {
          border-bottom: none;
        }

        .fila-texto {
          font-family: 'Open Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: var(--panel-text-color);
          line-height: 1.35;
          max-width: 210px;
        }

        .flecha {
          color: var(--panel-arrow-color);
          font-size: 22px;
          flex-shrink: 0;
          margin-left: 10px;
        }

        .panel-footer {
          background: rgba(10, 30, 70, 0.6);
          border-top: 1px solid rgba(180, 195, 220, 0.25);
          padding: 14px;
          text-align: center;
          color: var(--panel-footer-color);

          font-family: 'Open Sans', sans-serif;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 4px;
        }
      </style>

      <div class="panel-ucr">
        <div class="panel-filas">

          <div class="panel-fila">
            <span class="fila-texto">Aulas 5, 6, 7</span>
            <span class="flecha">→</span>
          </div>

          <div class="panel-fila">
            <span class="fila-texto">Apoyo Informático</span>
            <span class="flecha">→</span>
          </div>

          <div class="panel-fila">
            <span class="fila-texto">Servidores</span>
            <span class="flecha">→</span>
          </div>

          <div class="panel-fila">
            <span class="fila-texto">Laboratorio 1 y 2</span>
            <span class="flecha">→</span>
          </div>

          <div class="panel-fila">
            <span class="fila-texto">
              Coordinación<br>
              Informática Empresarial
            </span>
            <span class="flecha">→</span>
          </div>

        </div>

        <div class="panel-footer" part="panel-footer">
          <slot name="footer">UCR</slot>
        </div>
      </div>
    `;
  }
}

customElements.define('panel-ucr', PanelUCR);