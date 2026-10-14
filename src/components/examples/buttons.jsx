import {
	DiscordButton,
	DiscordButtons,
	DiscordInteraction,
	DiscordMessage,
	DiscordMessages,
} from '../DiscordPreview.jsx';

export function Preview1() {
	return (
		<DiscordMessages>
			<DiscordMessage profile="bot">
				<DiscordInteraction profile="user" command={true}>
					buttons
				</DiscordInteraction>
				Need help?
				<div slot="actions">
					<DiscordButtons>
						<DiscordButton type="success">Yes</DiscordButton>
						<DiscordButton type="danger">No</DiscordButton>
					</DiscordButtons>
				</div>
			</DiscordMessage>
		</DiscordMessages>
	);
}

export function Preview2() {
	return (
		<DiscordMessages>
			<DiscordMessage profile="bot">
				<div slot="actions">
					<DiscordButtons>
						<DiscordButton type="primary">Primary</DiscordButton>
						<DiscordButton type="secondary">Secondary</DiscordButton>
						<DiscordButton type="success">Success</DiscordButton>
						<DiscordButton type="danger">Danger</DiscordButton>
						<DiscordButton type="link" url="https://guide.disnake.dev/">
							Link
						</DiscordButton>
					</DiscordButtons>
				</div>
			</DiscordMessage>
		</DiscordMessages>
	);
}
