// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://guide.disnake.dev',
    trailingSlash: 'never',
    integrations: [
        starlight({
            title: 'Disnake Guide',
            logo: { src: './public/public/disnake-logo.png', alt: 'Disnake Logo' },
            favicon: '/public/favicon.ico',
            customCss: ['./src/styles/custom.css'],
            editLink: { baseUrl: 'https://github.com/DisnakeDev/guide/edit/main/' },
            lastUpdated: true,
            expressiveCode: { themes: ['dark-plus', 'github-light'] },
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/DisnakeDev/disnake' }],
            components: { SiteTitle: './src/components/SiteTitle.astro', Sidebar: './src/components/Sidebar.astro' },
            head: [
                {
                    tag: 'meta',
                    attrs: { property: 'og:image', content: 'https://guide.disnake.dev/public/disnake-meta-image.png' },
                },
                { tag: 'meta', attrs: { name: 'theme-color', content: '#f0c43f' } },
                { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary' } },
            ],
            sidebar: [
                { label: 'Introduction', slug: '' },
                {
                    label: 'Prerequisites',
                    collapsed: true,
                    items: ['installing-disnake', 'migrating-from-dpy', 'creating-your-application'].map((slug) => ({
                        slug: `prerequisites/${slug}`,
                    })),
                },
                {
                    label: 'Getting Started',
                    collapsed: true,
                    items: ['initial-files', 'creating-commands', 'using-cogs'].map((slug) => ({
                        slug: `getting-started/${slug}`,
                    })),
                },
                {
                    label: 'Interactions',
                    collapsed: true,
                    items: [
                        { label: 'Overview', slug: 'interactions' },
                        ...['slash-commands', 'context-menus', 'buttons', 'select-menus', 'modals'].map((slug) => ({
                            slug: `interactions/${slug}`,
                        })),
                    ],
                },
                {
                    label: 'Popular Topics',
                    collapsed: true,
                    items: [
                        { label: 'Overview', slug: 'popular-topics' },
                        ...[
                            'threads',
                            'embeds',
                            'reactions',
                            'webhooks',
                            'permissions',
                            'errors',
                            'intents',
                            'monetization',
                        ].map((slug) => ({ slug: `popular-topics/${slug}` })),
                    ],
                },
                {
                    label: 'Frequently Asked Questions',
                    collapsed: true,
                    items: [
                        { label: 'Overview', slug: 'faq' },
                        ...['general', 'administrative', 'coroutines', 'extensions', 'good-practices'].map((slug) => ({
                            slug: `faq/${slug}`,
                        })),
                    ],
                },
            ],
        }),
        react(),
    ],
});
