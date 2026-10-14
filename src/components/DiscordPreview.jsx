import { Children, cloneElement, createContext, useContext, useEffect, useState } from 'react';
import {
	DiscordMessages as Messages,
	DiscordMessage as Message,
	DiscordCommand,
	DiscordMention as Mention,
	DiscordEmbed as Embed,
	DiscordEmbedDescription,
	DiscordEmbedFooter,
	DiscordEmbedField as EmbedField,
	DiscordEmbedFields as EmbedFields,
	DiscordActionRow,
	DiscordButton as Button,
	DiscordCode,
	DiscordReply,
} from '@skyra/discord-components-react';

const profiles = {
	user: { author: 'AbhigyanTrips', avatar: '/public/message-author.png' },
	bot: { author: 'Disnake Bot', avatar: '/public/disnake-logo.png', bot: true },
};
const Theme = createContext(false);

// Observe Starlight's theme so previews follow both the selector and system changes.
export function DiscordMessages({ children, ...props }) {
	const [lightTheme, setLightTheme] = useState(document.documentElement.dataset.theme === 'light');
	useEffect(() => {
		const observer = new MutationObserver(() => setLightTheme(document.documentElement.dataset.theme === 'light'));
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
		return () => observer.disconnect();
	}, []);
	return (
		<Theme.Provider value={lightTheme}>
			<Messages {...props} lightTheme={lightTheme}>
				{children}
			</Messages>
		</Theme.Provider>
	);
}

export function DiscordMessage({ profile, ...props }) {
	return <Message {...profiles[profile]} {...props} />;
}

export function DiscordEmbedFields({ children, ...props }) {
	let index = 0;
	const fields = Children.map(children, (child) => {
		if (child.props?.inline === true || child.props?.inline === 'true') {
			return cloneElement(child, { inlineIndex: (index++ % 3) + 1 });
		}
		index = 0;
		return child;
	});
	return <EmbedFields {...props}>{fields}</EmbedFields>;
}

export function DiscordEmbed({ children, authorIcon, footerIcon, timestamp, ...props }) {
	const lightTheme = useContext(Theme);
	const items = Children.toArray(children);
	const footer = items.find((item) => item.props?.slot === 'footer');
	const fields = items.filter((item) => item.props?.slot === 'fields');
	const description = items.filter((item) => item.props?.slot !== 'fields' && item.props?.slot !== 'footer');
	return (
		<Embed {...props} authorImage={authorIcon} color={lightTheme ? '#376fa1' : '#f0c43f'}>
			<DiscordEmbedDescription slot="description">{description}</DiscordEmbedDescription>
			{fields}
			{(footer || timestamp || footerIcon) && (
				<DiscordEmbedFooter slot="footer" footerImage={footerIcon} timestamp={timestamp}>
					{footer?.props.children}
				</DiscordEmbedFooter>
			)}
		</Embed>
	);
}

export function DiscordInteraction({ children, profile, type = 'slash_command', command }) {
	const text = Children.toArray(children).join('').trim();
	if (command === undefined && type === 'slash_command') {
		return (
			<DiscordReply slot="reply" {...profiles[profile]}>
				{children}
			</DiscordReply>
		);
	}
	return <DiscordCommand slot="reply" {...profiles[profile]} command={text} type={type} />;
}

export function DiscordMention({ profile, children, ...props }) {
	return <Mention {...props}>{Children.count(children) ? children : profiles[profile]?.author}</Mention>;
}

export function DiscordMarkdown({ children }) {
	// These examples use inline code; Skyra's code element owns its styling.
	const text = String(children);
	return <DiscordCode>{text.startsWith('`') && text.endsWith('`') ? text.slice(1, -1) : text}</DiscordCode>;
}

export function DiscordButtons({ children }) {
	return <DiscordActionRow slot="components">{children}</DiscordActionRow>;
}

export function DiscordButton({ type, ...props }) {
	return <Button {...props} type={type === 'danger' ? 'destructive' : type === 'link' ? 'secondary' : type} />;
}

export function DiscordEmbedField({ inline, ...props }) {
	return <EmbedField {...props} inline={inline === true || inline === 'true'} />;
}
