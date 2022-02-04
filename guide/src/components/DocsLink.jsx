import React from 'react';

export default function DocsLink(props) {
	const basePath = 'https://docs.disnake.dev/en/latest'
	const docsPath = basePath + (props.ext ? `/ext/${props.ext}` : '') + (props.ext === 'tasks' ? '/index.html' : '/api.html') + (props.reference ? `#${props.reference}` : '')
	const docsText = (props.children ? props.children : (props.ext ? props.reference.replace(`disnake.ext.${props.ext}.`, "") : props.reference.replace("disnake.", "")))

	return(
		<a href={docsPath} target="_blank" rel="noopener noreferrer"><code>{docsText}</code></a>
	)
}
