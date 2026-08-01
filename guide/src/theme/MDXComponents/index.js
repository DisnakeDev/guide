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
	DiscordActionRow,
	DiscordAttachments,
	DiscordButton,
	DiscordCode,
	DiscordCommand,
	DiscordEmbed,
	DiscordEmbedDescription,
	DiscordEmbedField,
	DiscordEmbedFields,
	DiscordEmbedFooter,
	DiscordMention,
	DiscordMessage,
	DiscordMessages,
	DiscordReaction,
	DiscordReactions,
	DiscordReply,
} from '@skyra/discord-components-react';
import isDarkTheme from '../../hooks/isDarkTheme';
import useIsBrowser from '@docusaurus/useIsBrowser';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import DocsLink from '../../components/DocsLink';
import ResultingCode from '../../components/ResultingCode';
import WorkInProgress from '../../components/WorkInProgress';

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
			<DiscordMessages
				{...props}
				// the `lightTheme` prop needs to be applied to several components, since seemingly not all
				// all seem to subscribe to theme changes from the parent component for some reason
				lightTheme={!isDarkTheme()}
				// force remount on hydration to work around SSR theming bug
				// - https://github.com/facebook/docusaurus/issues/7986
				key={useIsBrowser()}
			>
				{props.children}
			</DiscordMessages>
		);
	},
	DiscordMessage: (props) => {
		return (
			<DiscordMessage
				{...props}
				// see above
				lightTheme={!isDarkTheme()}
				key={useIsBrowser()}
			>
				{props.children}
			</DiscordMessage>
		);
	},
	DiscordMention: (props) => {
		return <DiscordMention {...props}>{props.children}</DiscordMention>;
	},
	DiscordEmbed: (props) => {
		return (
			<DiscordEmbed
				{...props}
				color={isDarkTheme() ? '#f0c43f' : '#376fa1'}
				// see above
				key={useIsBrowser()}
			>
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
	DiscordEmbedDescription: (props) => {
		return <DiscordEmbedDescription {...props}>{props.children}</DiscordEmbedDescription>;
	},
	DiscordEmbedFooter: (props) => {
		return <DiscordEmbedFooter {...props}>{props.children}</DiscordEmbedFooter>;
	},
	DiscordCommand: (props) => {
		return (
			<DiscordCommand
				{...props}
				// see above
				lightTheme={!isDarkTheme()}
				key={useIsBrowser()}
			>
				{props.children}
			</DiscordCommand>
		);
	},
	DiscordButton: (props) => {
		return <DiscordButton {...props}>{props.children}</DiscordButton>;
	},
	DiscordAttachments: (props) => {
		return <DiscordAttachments {...props}>{props.children}</DiscordAttachments>;
	},
	DiscordActionRow: (props) => {
		return <DiscordActionRow {...props}>{props.children}</DiscordActionRow>;
	},
	DiscordReactions: (props) => {
		return <DiscordReactions {...props}>{props.children}</DiscordReactions>;
	},
	DiscordReaction: (props) => {
		return <DiscordReaction {...props}>{props.children}</DiscordReaction>;
	},
	DiscordReply: (props) => {
		return (
			<DiscordReply
				{...props}
				// see above
				lightTheme={!isDarkTheme()}
				key={useIsBrowser()}
			>
				{props.children}
			</DiscordReply>
		);
	},
	DiscordCode: (props) => {
		return <DiscordCode {...props}>{props.children}</DiscordCode>;
	},
};
export default MDXComponents;
