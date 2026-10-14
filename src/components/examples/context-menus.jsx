import { DiscordInteraction, DiscordMessage, DiscordMessages } from '../DiscordPreview.jsx';

export function Preview1() {
	return (
		<DiscordMessages>
			<DiscordMessage profile="bot">
				<DiscordInteraction profile="user" type="user_command">
					User Info
				</DiscordInteraction>
				Username: AbhigyanTrips#2474
				<br />
				Bot: False
			</DiscordMessage>
		</DiscordMessages>
	);
}

export function Preview2() {
	return (
		<DiscordMessages>
			<DiscordMessage profile="bot">
				<DiscordInteraction profile="user" type="message_command">
					Reverse
				</DiscordInteraction>
				.desrever si egassem sihT
			</DiscordMessage>
		</DiscordMessages>
	);
}
