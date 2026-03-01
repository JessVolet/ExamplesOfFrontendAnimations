export const profile = {
    name: "Jose Vega",
    title: "Cloud Engineer Junior | DevOps & IaC Specialist",
    tagline: "La infraestructura es el límite de la computación moderna; yo construyo los cimientos.",
    location: "Zamora, Michoacán",
    email: "contact@jessvega.me",
    github: "https://github.com/Jov-glitch",
    linkedin: "https://www.linkedin.com/in/jose-vega-a477b13a3/",
    about: `Soy un Ingeniero en Sistemas en formación (8vo Semestre, TecNM Zamora) apasionado por la Infraestructura como Código (IaC) y la automatización de sistemas Linux. Mi enfoque profesional se centra en eliminar la intervención manual mediante el uso de herramientas de orquestación y provisión, bajo la premisa de que si un sistema se configura manualmente por SSH, es una falla de diseño.

Actualmente gestiono la infraestructura crítica de la Universidad Pedagógica Nacional (UPN), donde lidero la migración de servicios legacy hacia arquitecturas containerizadas, optimizando la resiliencia y escalabilidad de los sistemas académicos.`,
    vision: "Mi meta a corto plazo es obtener la certificación Google Cloud Associate (GCP ACE) y profundizar en el ecosistema de Kubernetes (Helm) para la orquestación a gran escala. Creo firmemente que en la era de la IA, el valor diferencial de un ingeniero radica en la capacidad de garantizar la confiabilidad, seguridad y persistencia de la infraestructura que soporta los modelos."
};

export const skills = [
    {
        category: "Cloud & Orchestration",
        items: [
            { name: "AWS", description: "EC2, S3, Route53, VPC (Hosteados privados y Prácticas)" },
            { name: "GCP", description: "Candidato a Associate Cloud Engineer (ACE)" },
            { name: "Containers", description: "Docker, Docker Swarm, Portainer" },
            { name: "IaC & Automation", description: "Terraform (Básico), Ansible, Scripting y automatización en Bash puro" }
        ]
    },
    {
        category: "Core Systems & Networking",
        items: [
            { name: "OS Focus", description: "Linux (Power User de Fedora Workstation & Server)" },
            { name: "Hardening", description: "Nginx Hardening, Seguridad SSH, Gestión de Systemd" },
            { name: "Monitoring", description: "Prometheus & Grafana (HomeLab)" }
        ]
    },
    {
        category: "Backend Development",
        items: [
            { name: "Languages", description: "PHP 8+ (Laravel)" },
            { name: "Databases", description: "MySQL, MariaDB (Optimización de consultas)" }
        ]
    }
];

export const experience = [
    {
        role: "Administrador de Sistemas & Líder de Proyecto",
        company: "UPN-162",
        period: "Hace 2 Años - Actual",
        achievements: [
            "Encargado del ciclo completo del Control Escolar Virtual: diseño de base de datos, arquitectura, frontend y backend.",
            "Líder en migración de servicios legacy hacia arquitecturas en contenedores y despliegue del ecosistema Zero-Trust.",
            "Reducción sustancial del consumo de recursos mediante Docker, DDEV y flujos automatizados de despliegue."
        ]
    },
    {
        role: "Cloud Engineer (Freelance / Académico)",
        company: "Prácticas de Arquitectura Cloud",
        period: "Constante",
        achievements: [
            "Despliegue, gestión y automatización de instancias EC2 en AWS orientadas a servidores de Minecraft para comunidades.",
            "Prácticas puramente académicas en configuración de VPC, gestión IAM, y modelado de arquitecturas públicas."
        ]
    }
];

export const upnEcosystem = {
    title: "Control Escolar Virtual UPN-162",
    description: "Diseño y despliegue del sistema interno y externo de la UPN 162. API y sistema maestro de control escolar.",
    stack: ["PHP 8+", "Laravel", "Docker", "DDEV", "Tailscale"],
    purpose: "Gestión académica y migración de servicios legacy a contenedores.",
    modules: [
        {
            title: "CEV: Distributed School Management Ecosystem",
            description: "Bifurcación de un sistema monolítico en dos entornos aislados con principios Zero-Trust: CEV-Local (Gestión interna pesada) y CEV-Web (Portal público escalable).",
            stack: ["Docker", "DDEV", "Laravel", "UIkit"],
            purpose: "Desacoplar la lógica de negocio pública de la privada, minimizando la superficie de ataque y permitiendo el despliegue independiente de los servicios académicos."
        },
        {
            title: "Diana API: Legacy-to-Modern Middleware",
            description: "API RESTful desarrollada para actuar como puente seguro entre una base de datos legacy estricta y clientes web modernos.",
            stack: ["Laravel", "PHP 8+", "MySQL Triggers", "RBAC", "JSON Auditing"],
            purpose: "Modernización de infraestructura. Garantiza integridad referencial y auditoría forense estricta sin romper la compatibilidad con el software de Control Escolar antiguo."
        },
        {
            title: "Zero-Trust Infrastructure & Mesh VPN",
            description: "Diseño de un ecosistema de red segmentada sobre Proxmox, utilizando OPNsense como Core Router y Tailscale para conectividad remota segura.",
            stack: ["OPNsense", "Tailscale (Mesh VPN)", "Proxmox", "Unbound DNS", "Firewalling"],
            purpose: "Eliminar la exposición de servicios internos a la WAN pública y optimizar la latencia mediante ruteo directo (DERP Optimization) y Outbound NAT para compatibilidad con Windows."
        }
    ]
};

export const projects = [
    {
        title: "Ryzen Bare-Metal HomeLab",
        description: "Un entorno de pruebas persistente basado en un Ryzen 2600x corriendo Fedora Server.",
        stack: ["Docker Swarm", "Nginx", "Prometheus", "Grafana"],
        purpose: "Experimentación con alta disponibilidad y resiliencia de servicios auto-hospedados."
    },
    {
        title: "System Automation Workflow",
        description: "Desarrollo de Playbooks de Ansible y scripts de Bash para el despliegue automático de estaciones de trabajo.",
        stack: ["Bash", "Hyprland", "Fedora"],
        purpose: "Despliegue de estaciones y endurecimiento de web servers en minutos."
    }
];
