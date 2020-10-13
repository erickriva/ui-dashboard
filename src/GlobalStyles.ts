import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme/types";

export default createGlobalStyle<{ theme: Theme }>`
		@font-face {
			font-family: "Google Sans";
			font-style: normal;
			font-weight: 400;
			src: local("Google Sans Regular"), local("GoogleSans-Regular"),
				url(https://fonts.gstatic.com/s/googlesans/v16/4UaGrENHsxJlGDuGo1OIlL3Owp4.woff2) format("woff2");
			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
				U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
		}

		.scrollbar-track-horizontal {
			right: 2px;
			bottom: 2px;
			left: 2px;
			border-radius: 3px;
		}
		.scrollbar-track-vertical {
			right: 2px;
			bottom: 2px;
			top: 2px;
			border-radius: 3px;
		}
		.scrollbar-thumb-horizontal {
			background-color: ${props => props.theme.colors.textDark};
			cursor: pointer;
			border-radius: inherit;
		}
		.scrollbar-thumb-vertical {
			background-color: ${props => props.theme.colors.textDark};
			cursor: pointer;
			border-radius: inherit;
		}

		/* width */
		::-webkit-scrollbar {
			width: 7px;
		}

		/* Track */
		::-webkit-scrollbar-track {
			background-color: ${props => props.theme.colors.accent};
		}

		/* Handle */
		::-webkit-scrollbar-thumb {
			background-color: ${props => props.theme.colors.textDark};
			border-radius: 32px;
		}

		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			font-family: "Google Sans";
			transition: background-color 0.2s, border-color 0.2s;
		}

		*,
		button,
		input {
			border: 0;
			outline: 0;
		}

		html,
		body,
		#root {
			color: ${props => props.theme.colors.textDark};
			height: 100%;
			
		}

		html {
			font-size: 62.5%;
		}

		body {
			font-size: 1.6rem;
		}
	`;
