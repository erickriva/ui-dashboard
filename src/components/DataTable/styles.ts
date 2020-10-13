import styled, { css } from "styled-components";
import { hex2rgba, lightenOrDarkenColor } from "../../utils/colors";
import { StyledTableCellProps } from "./types";

export const StyledDataTableContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
`;

export const StyledTable = styled.table`
	border-radius: 4px;
	overflow: hidden;
	background-color: ${props => props.theme.colors.accent};
	border-spacing: 0;
	width: 100%;
`;

const SIZE_MAP = {
	"1/2": "50%",
	"1/4": "25%",
	"2/4": "50%",
	"3/4": "75%",
	"1/3": "33.33%",
	"2/3": "66.66%"
};

export const StyledTableRow = styled.tr``;

export const StyledTableCell = styled.td<StyledTableCellProps>`
	padding: 8px 16px;

	${props =>
		props.size &&
		`
			width: ${typeof props.size !== "string" ? SIZE_MAP[props.size] : props.size};
			max-width: ${typeof props.size !== "string" ? SIZE_MAP[props.size] : props.size};
			overflow: hidden;
	`}
	${props => props.verticalAlign && `vertical-align: ${props.verticalAlign};`}
  ${props => props.horizontalAlign && `text-align: ${props.horizontalAlign};`}
`;

export const StyledTableHeaderCell = styled.th<StyledTableCellProps>`
	padding: 16px 16px;
	text-align: inherit;

	${props =>
		props.size &&
		`
			width: ${typeof props.size !== "string" ? SIZE_MAP[props.size] : props.size};
			max-width: ${typeof props.size !== "string" ? SIZE_MAP[props.size] : props.size};
			overflow: hidden;
	`}
	${props => props.verticalAlign && `vertical-align: ${props.verticalAlign};`}
	${props => props.horizontalAlign && `text-align: ${props.horizontalAlign};`}
`;

export const StyledTableHeader = styled.thead`
	background-color: ${props => props.theme.colors.border};
	display: table-header-group;
`;

export const StyledTableBody = styled.tbody`
	& ${StyledTableRow} {
		&:hover,
		&.active {
			cursor: pointer;
			transition: all 0.2s;
			background-color: ${props => lightenOrDarkenColor(props.theme.colors.accent)};
		}
	}
`;

export const StyledTableFooter = styled.tfoot``;
