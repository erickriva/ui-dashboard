import styled, { css } from "styled-components";
import { FlexProps } from "./types";

const isValid = (value: any) => {
	return value !== undefined && value !== null;
};

export const Container = styled.div<FlexProps>`
	display: ${({ container }) => (container ? "flex" : "block")};
	gap: ${({ gap }) => gap ?? 16}px;

	${({ flex }) => isValid(flex) && `flex: ${flex};`};
	${({ flexWrap }) => isValid(flexWrap) && `flex-wrap: ${flexWrap};`};
	${({ flexGrow }) => isValid(flexGrow) && `flex-grow: ${flexGrow};`};
	${({ flexShrink }) => isValid(flexShrink) && `flex-shrink: ${flexShrink};`};
	${({ alignItems }) => isValid(alignItems) && `align-items: ${alignItems};`};
	${({ flexDirection }) => isValid(flexDirection) && `flex-direction: ${flexDirection};`};
	${({ justifyContent }) => isValid(justifyContent) && `justify-content: ${justifyContent};`};

	${({ width }) => isValid(width) && `width: ${typeof width === "number" ? `${width}px` : width};`};
	${({ height }) => isValid(height) && `height: ${typeof height === "number" ? `${height}px` : height}`};
	${({ margin }) => isValid(margin) && `margin: ${typeof margin === "number" ? `${margin}px` : margin};`};
	${({ padding }) => isValid(padding) && `padding: ${typeof padding === "number" ? `${padding}px` : padding};`};
	${({ maxWidth }) => isValid(maxWidth) && `max-width: ${typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth}`};
	${({ maxHeight }) =>
		isValid(maxHeight) && `max-height: ${typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight}`};
	${({ flexBasis }) =>
		isValid(flexBasis) && `flex-basis: ${typeof flexBasis === "number" ? `${flexBasis}px` : flexBasis};`};
`;
