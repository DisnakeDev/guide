/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'intro'
    },
    {
      type: 'category',
      label: 'Prerequisites',
      items: [
        'prerequisites/installing-disnake',
        'prerequisites/creating-your-application',
        'prerequisites/inviting-your-bot',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/initial-files',
        'getting-started/creating-commands',
        'getting-started/using-cogs',
      ],
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
      items: [
        'faq/good-practices'
      ],
    },
  ],
};

module.exports = sidebars;
