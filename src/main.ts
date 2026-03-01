import './styles/main.scss';
import { profile, skills, experience, projects, upnEcosystem } from './data';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
<div class="retro-monitor">
<aside class="sidebar fade-in-up" style="animation-delay: 0s;">
      
      <!-- Terminal Section -->
      <section class="block with-title center-title iso-perspective">
        <h2 class="title">Perfil</h2>
        <div class="block accent" style="padding: 1.2rem; margin: 1.5rem 0; text-align: center;">
          <p><span class="prompt">➜</span> <span class="command" style="color:#fff;">whoami</span></p>
          <p class="result-name" style="color:#fff; text-shadow: none; font-weight:bold; margin-top:1rem;">${profile.name}</p>
        </div>
        
        <div class="badges-container" style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
          
          <div class="block" style="display: flex; width: 100%; padding: 0; font-size: 0.6rem; margin: 0; box-sizing: border-box; overflow: hidden;">
            <div style="background-color: rgba(0,0,0,0.5); border-right: 3px solid var(--block-text-color); padding: 0.8rem 0.5rem; text-align: center; min-width: 60px;">Rol</div>
            <div style="background-color: var(--accent-purple); color: #fff; padding: 0.8rem 0.5rem; flex: 1; text-align: center; white-space: normal; line-height: 1.4;">
              ${profile.title.split('|')[0].trim()}
            </div>
          </div>
          
          <div class="block" style="display: flex; width: 100%; padding: 0; font-size: 0.6rem; margin: 0; box-sizing: border-box; overflow: hidden;">
            <div style="background-color: rgba(0,0,0,0.5); border-right: 3px solid var(--block-text-color); padding: 0.8rem 0.5rem; text-align: center; min-width: 60px;">Spec</div>
            <div style="background-color: var(--accent-green); color: #fff; padding: 0.8rem 0.5rem; flex: 1; text-align: center; white-space: normal; line-height: 1.4;">
              ${profile.title.split('|')[1].trim()}
            </div>
          </div>
          
        </div>

        <p class="nes-text is-disabled" style="margin-top: 1.5rem; text-align: center; font-size: 0.70rem;">"${profile.tagline}"</p>
      </section>
      
      <!-- Contact Section -->
      <section class="block with-title center-title contact-section" style="animation-delay: 0.15s;">
        <h2 class="title" style="color: var(--accent-blue);">Contact</h2>
        <div style="padding: 0.5rem; margin-top: 1rem;">
          <p class="term-line" style="font-size: 0.7rem;"><span class="prompt">➜</span> <span class="command" style="color:#fff;">./contact.sh</span></p>
          
          <div style="display: flex; flex-direction: column; gap: 1.2rem; margin-top: 1.5rem; padding-left: 0.5rem;">
            
            <div style="display: flex; align-items: center; gap: 1rem;">
              <span style="font-weight: bold; font-size: 0.60rem; color: var(--accent-purple);">[LOC]</span>
              <span style="font-size: 0.65rem;">${profile.location}</span>
            </div>

            <div style="display: flex; align-items: center; gap: 1rem;">
              <i class="nes-icon gmail is-small" style="transform: scale(0.8);"></i>
              <a href="mailto:${profile.email}" style="font-size: 0.65rem; color: var(--text-main); text-decoration: none;">${profile.email}</a>
            </div>

            <div style="display: flex; align-items: center; gap: 1rem;">
              <i class="nes-icon github is-small" style="transform: scale(0.8);"></i>
              <a href="${profile.github}" target="_blank" style="font-size: 0.65rem; color: var(--accent-blue); text-decoration: none;">Jov-glitch</a>
            </div>

            <div style="display: flex; align-items: center; gap: 1rem;">
              <i class="nes-icon linkedin is-small" style="transform: scale(0.8);"></i>
              <a href="${profile.linkedin}" target="_blank" style="font-size: 0.65rem; color: var(--accent-blue); text-decoration: none;">jose-vega</a>
            </div>

          </div>
        </div>
      </section>
      
    </aside>
</div>
<div class="retro-monitor">
  <div class="dashboard-container">
    

    <main class="main-content">
      <!-- About Me Section -->
      <section class="block with-title fade-in-up" style="animation-delay: 0.15s; width: 100%;">
        <h2 class="title">👨💻 About Me</h2>
        <div style="padding: 0.5rem;">
          ${profile.about.split('\n\n').map(p => `<p style="margin-bottom:1rem; text-align: justify;">${p}</p>`).join('')}
        </div>
      </section>

      <div class="grid-2-col" style="width: 100%;">

        <!-- Stack Section -->
        <section class="block with-title fade-in-up" style="animation-delay: 0.3s;">
          <h2 class="title">🛠️ Stack</h2>
          <div style="padding: 0.5rem;">
            ${skills.map(s => `
              <div class="block" style="margin-bottom: 1.5rem; padding: 1.2rem;">
                <h3 style="color:var(--accent-purple); text-align: center;">${s.category}</h3>
                <ul class="nes-list is-disc" style="margin-top: 1rem;">
                  ${s.items.map(item => `
                    <li><strong>${item.name}:</strong> <span>${item.description}</span></li>
                  `).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </section>


        <!-- Experiencia Section -->
        <section class="block with-title fade-in-up" style="animation-delay: 0.45s;">
          <h2 class="title">💼 Experiencia</h2>
          <div style="padding: 0.5rem;">
            ${experience.map(exp => `
              <div class="block" style="margin-bottom: 1.5rem; padding: 1.2rem;">
                <h3 style="color:var(--accent-purple); text-align: center;">${exp.role}</h3>
                <div style="text-align: center;">
                   <p class="nes-text is-error" style="font-size: 0.65rem; margin-bottom: 0.8rem; display: inline-block;">
                     > ${exp.company} | ${exp.period}
                   </p>
                </div>
                <ul class="nes-list is-disc" style="margin-top: 1rem;">
                  ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </section>
      </div>

      <!-- UPN 162 Projects Section (Special Dedicated Section) -->
      <section class="block with-title fade-in-up" style="animation-delay: 0.55s; border-color: var(--term-prompt); width: 100%;">
        <h2 class="title" style="color: var(--term-prompt);">🏢 Ecosistema (Líder / Full-Stack)</h2>
        
        <div style="padding: 1rem 0;">
          <!-- Parent Banner -->
          <div class="block" style="padding: 1.5rem; text-align: center; border-color: var(--term-prompt); background-color: rgba(34, 197, 94, 0.1);">
              <h3 style="color:var(--term-prompt); font-size: 1.2rem; margin-bottom: 0.5rem;">${upnEcosystem.title}</h3>
              <p style="color: #fff; margin-bottom: 1rem;">${upnEcosystem.description}</p>
              <div class="tags" style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
                  ${upnEcosystem.stack.map(tech => `<span class="badge block" style="font-size: 0.6rem; border-color: var(--term-prompt); background: var(--bg-color); color: #fff;">${tech}</span>`).join('')}
              </div>
          </div>

          <!-- Modules Grid / Sub-projects -->
          <h3 style="color:var(--term-prompt); text-align: center; margin: 2rem 0 1rem 0;">Módulos del Ecosistema</h3>
          <div class="projects-grid">
            ${upnEcosystem.modules.map(proj => `
              <div class="project-card block" style="padding: 1.5rem; border-color: var(--term-prompt); background-color: rgba(34, 197, 94, 0.02);">
                <h3 style="color:var(--term-prompt); text-align:center;">${proj.title}</h3>
                <p class="proj-desc" style="color:var(--text-main); margin: 1rem 0; text-align: justify;">${proj.description}</p>
                <div class="proj-purpose" style="color:#fff;"><strong>> Propósito:</strong> ${proj.purpose}</div>
                <div class="tags" style="justify-content:center;">
                  ${proj.stack.map(tech => `<span class="badge block" style="border-color: var(--term-prompt);">${tech}</span>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Personal Projects Section -->
      <section class="block with-title iso-perspective fade-in-up" style="animation-delay: 0.6s; width: 100%;">
        <h2 class="title">🔬 Personal & Labs</h2>
        <div class="projects-grid" style="padding: 1rem 0;">
          ${projects.map(proj => `
            <div class="project-card block accent" style="padding: 1.5rem;">
              <h3 style="color:#fff; text-align:center;">${proj.title}</h3>
              <p class="proj-desc" style="color:var(--text-main); margin: 1rem 0; text-align: justify;">${proj.description}</p>
              <div class="proj-purpose"><strong>> Propósito:</strong> ${proj.purpose}</div>
              <div class="tags" style="justify-content:center;">
                ${proj.stack.map(tech => `<span class="badge block">${tech}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Vision Section (Rediseñado como grid modular estático) -->
      <section class="block with-title fade-in-up" style="animation-delay: 0.75s; width: 100%;">
        <h2 class="title">🎯 Vision</h2>
        <div class="block accent" style="padding: 1.5rem; text-align: center; margin: 1rem 0;">
          <p style="color:var(--text-main); margin: 0; line-height: 1.8;">${profile.vision}</p>
        </div>
      </section>

    </main>
  </div>
</div>
`;
