// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	guideSidebar: [
		{
			type: 'doc',
			label: 'Introduction',
			id: 'intro',
		},
		{
			type: 'category',
			label: 'Prerequisites',
			items: [
				'prerequisites/installing-disnake',
				'prerequisites/migrating-from-dpy',
				'prerequisites/creating-your-application',
			],
		},
		{
			type: 'category',
			label: 'Getting Started',
			items: ['getting-started/initial-files', 'getting-started/creating-commands', 'getting-started/using-cogs'],
		},
		{
			type: 'category',
			label: 'Interactions',
			link: { type: 'doc', id: 'interactions/intro' },
			items: [
				'interactions/slash-commands',
				'interactions/context-menus',
				'interactions/buttons',
				'interactions/select-menus',
				'interactions/modals',
			],
		},
		{
			type: 'category',
			label: 'Popular Topics',
			link: { type: 'doc', id: 'popular-topics/intro' },
			items: [
				'popular-topics/threads',
				'popular-topics/embeds',
				'popular-topics/reactions',
				'popular-topics/webhooks',
				'popular-topics/permissions',
				'popular-topics/errors',
				'popular-topics/intents',
				'popular-topics/monetization',
			],
		},
		{
			type: 'category',
			label: 'Frequently Asked Questions',
			link: { type: 'doc', id: 'faq/intro' },
			items: ['faq/general', 'faq/administrative', 'faq/coroutines', 'faq/extensions', 'faq/good-practices'],
		},
	],
};

module.exports = sidebars;
