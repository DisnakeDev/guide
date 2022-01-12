import React from "react";
import {useLocation} from "@docusaurus/router";

export default function ResultingCode() {
	const location = useLocation();
	const codeSampleURL = 'https://github.com/DisnakeDev/guide/tree/main/code-samples/';

	return(
		<div>
			<p>
				The code showcased in this section can be found on our GitHub repository
				<a href={codeSampleURL + location.pathname.slice(1)} target="_blank" rel="noopener noreferrer"> here</a>.
			</p>
		</div>
	);
};
