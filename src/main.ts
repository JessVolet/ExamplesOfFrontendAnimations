import './styles/main.scss';
import { listaProyectos } from './proyectos';
import type { Proyecto } from './proyectos'

const app = document.querySelector<HTMLDivElement>('#app')!;


app.innerHTML = `
  <h1 class="nes-text is-primary" style="text-align: center;">MI TERMINAL ISOMÉTRICA</h1>
  <div class="portafolio-container">
      <aside class="folder-list">
          ${listaProyectos.map((p, index) => `
              <div class="folder-tab blocks-card is-purple ${index === 0 ? 'active' : ''}" data-id="${index}">
                  ${p.titulo}
              </div>
          `).join('')}
      </aside>
      
      <main class="focus-area">
          <div id="proyecto-detalle" class="iso-item blocks-card animate-focus">
              </div>
      </main>
  </div>
`;

function updateDetail(proyecto: Proyecto) {
    const detalle = document.querySelector('#proyecto-detalle')!; 
    detalle.classList.remove('animate-focus');
    void (detalle as HTMLElement).offsetWidth; 

    detalle.innerHTML = `
        <div class="iso-item blocks-card with-title">
            <p class="title">${proyecto.titulo}</p>
            <p>${proyecto.descripcion}</p>
            <div class="tags">
                ${proyecto.tecnologias.map(t => `<span class="nes-badge"><span class="is-warning">${t}</span></span>`).join('')}
            </div>
            <br>
            <a href="${proyecto.link}" class="nes-btn is-success">ABRIR REPO</a>
        </div>
    `;
    detalle.classList.add('animate-focus');
}

document.querySelectorAll('.folder-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.folder-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const id = Number(tab.getAttribute('data-id'));
        updateDetail(listaProyectos[id]);
    });
});

updateDetail(listaProyectos[0]);
