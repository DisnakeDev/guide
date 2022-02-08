import React, { isValidElement } from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/Heading';
import Details from '@theme/Details';
import './styles.css';

import {
	DiscordButton,
	DiscordButtons,
	DiscordEmbed,
	DiscordEmbedField,
	DiscordEmbedFields,
	DiscordInteraction,
	DiscordMarkdown,
	DiscordMention,
	DiscordMessage,
	DiscordMessages,
	DiscordReaction,
	DiscordReactions,
} from '@discord-message-components/react';
import '@discord-message-components/react/styles';
import isDarkTheme from '../../hooks/isDarkTheme';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import DocsLink from '../../components/DocsLink';
import ResultingCode from '../../components/ResultingCode';

function unwrapMDXElement(element) {
	if (element?.props?.mdxType && element?.props?.originalType) {
		const { mdxType, originalType, ...newProps } = element.props;
		return React.createElement(element.props.originalType, newProps);
	}

	return element;
}

const MDXComponents = {
	head: (props) => {
		const unwrappedChildren = React.Children.map(props.children, (child) => unwrapMDXElement(child));
		return <Head {...props}>{unwrappedChildren}</Head>;
	},
	code: (props) => {
		const shouldBeInline = React.Children.toArray(props.children).every(
			(el) => typeof el === 'string' && !el.includes('\n')
		);
		return shouldBeInline ? <code {...props} /> : <CodeBlock {...props} />;
	},
	a: (props) => <Link {...props} />,
	pre: (props) => (
		<CodeBlock
			{...(isValidElement(props.children) && props.children.props.originalType === 'code'
				? props.children?.props
				: { ...props })}
		/>
	),
	details: (props) => {
		const items = React.Children.toArray(props.children);

		const summary = items.find((item) => item?.props?.mdxType === 'summary');
		const children = <>{items.filter((item) => item !== summary)}</>;
		return (
			<Details {...props} summary={summary}>
				{children}
			</Details>
		);
	},
	h1: (props) => <Heading as="h1" {...props} />,
	h2: (props) => <Heading as="h2" {...props} />,
	h3: (props) => <Heading as="h3" {...props} />,
	h4: (props) => <Heading as="h4" {...props} />,
	h5: (props) => <Heading as="h5" {...props} />,
	h6: (props) => <Heading as="h6" {...props} />,
	DocsLink: (props) => {
		return <DocsLink {...props}>{props.children}</DocsLink>;
	},
	ResultingCode: () => {
		return <ResultingCode />;
	},
	Tabs: (props) => {
		return <Tabs {...props}>{props.children}</Tabs>;
	},
	TabItem: (props) => {
		return <TabItem {...props}>{props.children}</TabItem>;
	},
	DiscordMessages: (props) => {
		return (
			<DiscordMessages {...props} lightTheme={!isDarkTheme()}>
				{props.children}
			</DiscordMessages>
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
