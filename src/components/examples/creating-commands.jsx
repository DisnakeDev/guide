import { DiscordInteraction, DiscordMessage, DiscordMessages } from '../DiscordPreview.jsx';

export function Preview1() {
	return (
		<DiscordMessages>
			<DiscordMessage profile="bot">
				<DiscordInteraction profile="user" command="true">
					ping
				</DiscordInteraction>
				Pong!
			</DiscordMessage>
		</DiscordMessages>
	);
}

export function Preview2() {
	return (
		<DiscordMessages>
			<DiscordMessage profile="bot">
				<DiscordInteraction profile="user" command="true">
					server
				</DiscordInteraction>
				Server name: Disnake Guide <br />
				Total members: 2
			</DiscordMessage>
		</DiscordMessages>
	);
}

export function Preview3() {
	return (
		<DiscordMessages>
			<DiscordMessage profile="bot">
				<DiscordInteraction profile="user" command="true">
					server
				</DiscordInteraction>
				Your tag: AbhigyanTrips#1234 <br />
				Your ID: 123456789012345678
			</DiscordMessage>
		</DiscordMessages>
	);
}
