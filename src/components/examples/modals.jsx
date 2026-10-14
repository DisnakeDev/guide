import {
	DiscordEmbed,
	DiscordEmbedField,
	DiscordEmbedFields,
	DiscordMessage,
	DiscordMessages,
} from '../DiscordPreview.jsx';

export function Preview1() {
	return (
		<DiscordMessages>
			<DiscordMessage profile="bot">
				<DiscordEmbed embedTitle="Tag Creation" slot="embeds">
					<DiscordEmbedFields slot="fields">
						<DiscordEmbedField fieldTitle="Name">This is the tag's name.</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="Description">
							This is the tag's description. It can be as long as 4000 characters.
						</DiscordEmbedField>
					</DiscordEmbedFields>
				</DiscordEmbed>
			</DiscordMessage>
		</DiscordMessages>
	);
}
