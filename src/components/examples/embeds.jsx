import {
	DiscordEmbed,
	DiscordEmbedField,
	DiscordEmbedFields,
	DiscordMarkdown,
	DiscordMessage,
	DiscordMessages,
} from '../DiscordPreview.jsx';

export function Preview1() {
	return (
		<DiscordMessages>
			<DiscordMessage profile="bot">
				<DiscordEmbed
					embedTitle="Embed Title"
					url="https://disnake.dev/"
					thumbnail="/public/disnake-logo.png"
					image="https://disnake.dev/assets/disnake-banner-thin.png"
					timestamp="01/01/2077"
					authorName="Embed Author"
					authorIcon="/public/disnake-logo.png"
					authorUrl="https://disnake.dev/"
					footerIcon="/public/disnake-logo.png"
					slot="embeds"
				>
					Embed Description
					<DiscordEmbedFields slot="fields">
						<DiscordEmbedField fieldTitle="Regular Title">Regular Value</DiscordEmbedField>
						<DiscordEmbedField inline="true" fieldTitle="Inline Title">
							Inline Value
						</DiscordEmbedField>
						<DiscordEmbedField inline="true" fieldTitle="Inline Title">
							Inline Value
						</DiscordEmbedField>
						<DiscordEmbedField inline="true" fieldTitle="Inline Title">
							Inline Value
						</DiscordEmbedField>
					</DiscordEmbedFields>
					<span slot="footer">Embed Footer</span>
				</DiscordEmbed>
			</DiscordMessage>
		</DiscordMessages>
	);
}

export function Preview2() {
	return (
		<DiscordMessages>
			<DiscordMessage profile="bot">
				<DiscordEmbed embedTitle="Embed Title" slot="embeds">
					Embed Description
				</DiscordEmbed>
			</DiscordMessage>
		</DiscordMessages>
	);
}

export function Preview3() {
	return (
		<DiscordMessages>
			<DiscordMessage profile="bot">
				<DiscordEmbed
					embedTitle="Embed Title"
					authorName="Embed Author"
					authorIcon="/public/disnake-logo.png"
					authorUrl="https://disnake.dev/"
					slot="embeds"
				>
					Embed Description
				</DiscordEmbed>
			</DiscordMessage>
		</DiscordMessages>
	);
}

export function Preview4() {
	return (
		<DiscordMessages>
			<DiscordMessage profile="bot">
				<DiscordEmbed
					embedTitle="Embed Title"
					authorName="Embed Author"
					authorIcon="/public/disnake-logo.png"
					authorUrl="https://disnake.dev/"
					footerIcon="/public/disnake-logo.png"
					slot="embeds"
				>
					Embed Description
					<span slot="footer">Embed Footer</span>
				</DiscordEmbed>
			</DiscordMessage>
		</DiscordMessages>
	);
}

export function Preview5() {
	return (
		<DiscordMessages>
			<DiscordMessage profile="bot">
				<DiscordEmbed
					embedTitle="Embed Thumbnail"
					thumbnail="/public/disnake-logo.png"
					authorName="Embed Author"
					authorIcon="/public/disnake-logo.png"
					authorUrl="https://disnake.dev/"
					footerIcon="/public/disnake-logo.png"
					timestamp="01/01/2077"
					slot="embeds"
				>
					It is shown in the top-right corner of the embed. You can set this as a URL, but{' '}
					<DiscordMarkdown>{'`disnake`'}</DiscordMarkdown> also allows you to use a locally stored file
					instead, using the <DiscordMarkdown>{'`file`'}</DiscordMarkdown> parameter.
					<br />
					<br />
					<DiscordMarkdown>{'`embed.set_thumbnail(file=disnake.File("asset/path.png"))`'}</DiscordMarkdown>
					<span slot="footer">Embed Footer</span>
				</DiscordEmbed>
			</DiscordMessage>
		</DiscordMessages>
	);
}

export function Preview6() {
	return (
		<DiscordMessages>
			<DiscordMessage profile="bot">
				<DiscordEmbed
					embedTitle="Timestamps"
					authorName="Embed Author"
					authorIcon="/public/disnake-logo.png"
					authorUrl="https://disnake.dev/"
					footerIcon="/public/disnake-logo.png"
					timestamp="01/01/2077"
					slot="embeds"
				>
					Note that <DiscordMarkdown>{'`datetime.datetime.utcnow()`'}</DiscordMarkdown> can also be used here.
					You can also specify the timezone via the <DiscordMarkdown>{'`tzinfo`'}</DiscordMarkdown> parameter.
					<span slot="footer">Embed Footer</span>
				</DiscordEmbed>
			</DiscordMessage>
		</DiscordMessages>
	);
}

export function Preview7() {
	return (
		<DiscordMessages>
			<DiscordMessage profile="bot">
				<DiscordEmbed
					embedTitle="Embed Title"
					authorName="Embed Author"
					authorIcon="/public/disnake-logo.png"
					authorUrl="https://disnake.dev/"
					footerIcon="/public/disnake-logo.png"
					timestamp="01/01/2077"
					slot="embeds"
				>
					Embed Description
					<DiscordEmbedFields slot="fields">
						<DiscordEmbedField fieldTitle="Regular Title">Regular Value</DiscordEmbedField>
						<DiscordEmbedField inline="true" fieldTitle="Inline Title">
							Inline Value
						</DiscordEmbedField>
						<DiscordEmbedField inline="true" fieldTitle="Inline Title">
							Inline Value
						</DiscordEmbedField>
						<DiscordEmbedField inline="true" fieldTitle="Inline Title">
							Inline Value
						</DiscordEmbedField>
					</DiscordEmbedFields>
					<span slot="footer">Embed Footer</span>
				</DiscordEmbed>
			</DiscordMessage>
		</DiscordMessages>
	);
}

export function Preview8() {
	return (
		<DiscordMessages>
			<DiscordMessage profile="bot">
				<DiscordEmbed
					embedTitle="Images"
					image="https://i.imgur.com/KsTvw5Z.png"
					authorName="Embed Author"
					authorIcon="/public/disnake-logo.png"
					authorUrl="https://disnake.dev/"
					footerIcon="/public/disnake-logo.png"
					timestamp="01/01/2077"
					slot="embeds"
				>
					To use a local asset for images or thumbnail with the{' '}
					<DiscordMarkdown>{'`set_image`'}</DiscordMarkdown> attribute, use the{' '}
					<DiscordMarkdown>{'`file`'}</DiscordMarkdown> kwarg which accepts a{' '}
					<DiscordMarkdown>{'`disnake.File()`'}</DiscordMarkdown> object.
					<span slot="footer">Embed Footer</span>
				</DiscordEmbed>
			</DiscordMessage>
		</DiscordMessages>
	);
}
