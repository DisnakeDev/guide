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
			items: [
				'interactions/interactions',
				'interactions/application-commands',
				'interactions/message-components',
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
				'popular-topics/intents',
			],
		},
		{
			type: 'category',
			label: 'Frequently Asked Questions',
			items: ['faq/good-practices'],
		},
	],
};

module.exports = sidebars;
