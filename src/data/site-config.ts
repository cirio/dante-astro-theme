import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    avatar: {
        src: avatar,
        alt: 'Marco Ponti'
    },
    title: 'Marco Ponti',
    subtitle: 'Psicoteraputa',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        // {
        //     text: 'Projects',
        //     href: '/projects'
        // },
        // {
        //     text: 'Blog',
        //     href: '/blog'
        // },
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // }
    ],
    footerNavLinks: [
        // {
        //     text: 'About',
        //     href: '/about'
        // },
        // {
        //     text: 'Contact',
        //     href: '/contact'
        // },
        // {
        //     text: 'Terms',
        //     href: '/terms'
        // },
        // {
        //     text: 'Download theme',
        //     href: 'https://github.com/JustGoodUI/dante-astro-theme'
        // }
    ],
    socialLinks: [
        // {
        //     text: 'Dribbble',
        //     href: 'https://dribbble.com/'
        // },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        // {
        //     text: 'X/Twitter',
        //     href: 'https://twitter.com/'
        // }
    ],
    hero: {
        title: 'Benvenuti!',
        text: "Ho conseguito la laurea in psicologia all'Università di Parma per poi specializzarmi in psicoterapia psicodinamica analitica junghiana presso la scuola AION di Bologna.\nSono iscritto all'albo degli psicologi e degli psicoterapeuti dell'Emilia-Romagna. Svolgo l'attività clinica nel mio studio in centro a Piacenza, attività rivolta all'età adulta e adolescenza.\n\nDurante tutto il corso della mia vita ho sempre portato avanti il dialogo e il confronto con il mio più grande maestro, l'inconscio. E questo è appunto ciò che propongo nel percorso di psicoterapia: imparare a dialogare con sé stessi e con le proprie immagini, attraverso anche l'analisi dei sogni. Un percorso che non si concentra soltanto sul sintomo ma segue le naturali trasformazioni interne in costante contatto, nel bene come nel male, con la propria essenziale unicità.\n\n*\"Se possediamo l'immagine di una cosa, possediamo la metà di quella cosa. […] Chi possiede il mondo, ma non invece la sua immagine, possiede soltanto la metà del mondo, poiché l'anima sua è povera e indigente. La ricchezza dell'anima è fatta d'immagini.\"* (C.G. Jung)",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
