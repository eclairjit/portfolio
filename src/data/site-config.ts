export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Jit Mitra',
    subtitle: 'Crafting scalable web solutions',
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
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Twitter/X',
            href: 'https://x.com/eclair_jit/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/_jitmitra_'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/jitmitra'
        }
    ],
    hero: {
        title: 'Hi there & welcome to my corner of the web!',
        text: "I'm **Jit Mitra**, a developer specializing in the JavaScript/TypeScript environment. My passion lies in creating optimized and scalable systems that genuinely benefit users. Recently, I've delved into database technologies, conducting extensive research to enhance my expertise in data management and storage. Additionally, I'm exploring Golang, expanding my toolkit to build robust and efficient applications. Feel free to explore some of my coding endeavors on <a href='https://github.com/eclairjit' target='_blank'>GitHub</a> or visit my <a href='https://www.linkedin.com/in/jitmitra' target='_blank'>LinkedIn</a> profile.",
        image: {
            src: 'https://ik.imagekit.io/hngujk9ctw/WhatsApp%20Image%202024-07-14%20at%2023.34.32.jpeg?updatedAt=1721122658575',
            alt: 'Jit Mitra'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
