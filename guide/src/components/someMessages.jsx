import React from 'react';
import {
	DiscordMessage,
	DiscordMessages,
} from '@discord-message-components/react';

export default function someMessages() {
return(
<div>
	<DiscordMessages>
		<DiscordMessage author="John Doe">
			It would be great if this actually worked.
		</DiscordMessage>
	</DiscordMessages>
</div>
);
}