import {
	DiscordInteraction,
	DiscordMarkdown,
	DiscordMention,
	DiscordMessage,
	DiscordMessages,
} from '../DiscordPreview.jsx';

export function Preview1() {
	return (
		<DiscordMessages>
			<DiscordMessage profile="bot">
				<DiscordInteraction profile="user" command="true">
					ping
				</DiscordInteraction>
				Latency: <DiscordMarkdown>{'`42ms`'}</DiscordMarkdown>!
			</DiscordMessage>
		</DiscordMessages>
	);
}

export function Preview2() {
	return (
		<DiscordMessages>
			<DiscordMessage profile="bot">
				<DiscordInteraction profile="user" command="true">
					timer
				</DiscordInteraction>
				Setting a timer for 30 seconds.
			</DiscordMessage>
			<DiscordMessage profile="bot">
				<DiscordInteraction profile="bot">Setting a timer for 30 seconds.</DiscordInteraction>
				<DiscordMention profile="user"></DiscordMention>, your timer expired!
			</DiscordMessage>
		</DiscordMessages>
	);
}
