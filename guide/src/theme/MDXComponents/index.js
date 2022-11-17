import React from 'react';
import MDXHead from '@theme/MDXComponents/Head';
import MDXCode from '@theme/MDXComponents/Code';
import MDXA from '@theme/MDXComponents/A';
import MDXPre from '@theme/MDXComponents/Pre';
import MDXDetails from '@theme/MDXComponents/Details';
import MDXHeading from '@theme/MDXComponents/Heading';
import MDXUl from '@theme/MDXComponents/Ul';
import MDXImg from '@theme/MDXComponents/Img';
import Admonition from '@theme/Admonition';
import Mermaid from '@theme/Mermaid';

import {
	DiscordButton,
	DiscordButtons,
	DiscordDefaultOptions,
	DiscordEmbed,
	DiscordEmbedField,
	DiscordEmbedFields,
	DiscordInteraction,
	DiscordMarkdown,
	DiscordMention,
	DiscordMessage,
	DiscordMessages,
	DiscordOptionsContext,
	DiscordReaction,
	DiscordReactions,
} from '@discord-message-components/react';
import '@discord-message-components/react/styles';
import isDarkTheme from '../../hooks/isDarkTheme';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import DocsLink from '../../components/DocsLink';
import ResultingCode from '../../components/ResultingCode';
import WorkInProgress from '../../components/WorkInProgress';

const discordOptions = {
	...DiscordDefaultOptions,
	profiles: {
		user: {
			author: 'AbhigyanTrips',
			avatar: '/public/message-author.png',
		},
		bot: {
			author: 'Disnake Bot',
			avatar: '/public/disnake-logo.png',
			bot: true,
		},
	},
};

const MDXComponents = {
	head: MDXHead,
	code: MDXCode,
	a: MDXA,
	pre: MDXPre,
	details: MDXDetails,
	ul: MDXUl,
	img: MDXImg,
	h1: (props) => <MDXHeading as="h1" {...props} />,
	h2: (props) => <MDXHeading as="h2" {...props} />,
	h3: (props) => <MDXHeading as="h3" {...props} />,
	h4: (props) => <MDXHeading as="h4" {...props} />,
	h5: (props) => <MDXHeading as="h5" {...props} />,
	h6: (props) => <MDXHeading as="h6" {...props} />,
	admonition: Admonition,
	mermaid: Mermaid,
	DocsLink: (props) => {
		return <DocsLink {...props}>{props.children}</DocsLink>;
	},
	ResultingCode: () => {
		return <ResultingCode />;
	},
	WorkInProgress: () => {
		return <WorkInProgress />;
	},
	Tabs: (props) => {
		return <Tabs {...props}>{props.children}</Tabs>;
	},
	TabItem: (props) => {
		return <TabItem {...props}>{props.children}</TabItem>;
	},
	DiscordMessages: (props) => {
		return (
			<DiscordOptionsContext.Provider value={discordOptions}>
				<DiscordMessages {...props} lightTheme={!isDarkTheme()}>
					{props.children}
				</DiscordMessages>
			</DiscordOptionsContext.Provider>
		);
	},
	DiscordMessage: (props) => {
		return <DiscordMessage {...props}>{props.children}</DiscordMessage>;
	},
	DiscordMention: (props) => {
		return <DiscordMention {...props}>{props.children}</DiscordMention>;
	},
	DiscordEmbed: (props) => {
		return (
			<DiscordEmbed {...props} borderColor={isDarkTheme() ? '#f0c43f' : '#376fa1'}>
				{props.children}
			</DiscordEmbed>
		);
	},
	DiscordEmbedFields: (props) => {
		return <DiscordEmbedFields {...props}>{props.children}</DiscordEmbedFields>;
	},
	DiscordEmbedField: (props) => {
		return <DiscordEmbedField {...props}>{props.children}</DiscordEmbedField>;
	},
	DiscordInteraction: (props) => {
		return <DiscordInteraction {...props}>{props.children}</DiscordInteraction>;
	},
	DiscordMarkdown: (props) => {
		return <DiscordMarkdown {...props}>{props.children}</DiscordMarkdown>;
	},
	DiscordButtons: (props) => {
		return <DiscordButtons {...props}>{props.children}</DiscordButtons>;
	},
	DiscordButton: (props) => {
		return <DiscordButton {...props}>{props.children}</DiscordButton>;
	},
	DiscordReactions: (props) => {
		return <DiscordReactions {...props}>{props.children}</DiscordReactions>;
	},
	DiscordReaction: (props) => {
		return <DiscordReaction {...props}>{props.children}</DiscordReaction>;
	},
};
export default MDXComponents;
