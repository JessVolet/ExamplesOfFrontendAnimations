export interface Proyecto {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  link: string; }

export const listaProyectos: Proyecto[] =[
  {
    titulo: "Portafolio JessVega",
    descripcion: "Cree este portafolio con ayuda de algunas librerias para hacer el desarrollo mas rapido",
    tecnologias: ["Node.js", "TypeScript", "GithubPages", "Namecheap", "Vite", "Ness.css", "Blocks.css", "Issometric Sass"],
    link: "https://jessvega.me/"
  },
  {
    titulo: "Control Escolar Virtual UPN-162",
    descripcion: "Diseñe, cree y desplegue toda la infraestructura del sistema interno y externo de la instituto 'Universidad Pedagogica Nacional 162 Plantel Zamora. Que consto de una pagina web FRONTEND para mostar informacion, una API que manda informacion de forma segura a la version web, y un sistema maestro que gestiona todos los datos a cargo de control escolar.'",
    tecnologias: ["Php 7.4", "Laravel", "Node.js", "Composer", "JavaScript", "Uikit", "WindowsServer", "UbuntuServer", "Tailscale", "Proxmox", "DDEV"],
    link: "https://upn162-zamora.edu.mx/"
  }
]
