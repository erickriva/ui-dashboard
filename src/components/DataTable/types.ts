import { PaginationProps } from "../PaginationControls/types";

export type ColumnSizeType = "1/2" | "1/4" | "2/4" | "3/4" | "1/3" | "2/3";

export interface StyledTableCellProps {
	size?: ColumnSizeType | string;
	horizontalAlign?: "center" | "start" | "end";
	verticalAlign?: "middle" | "top" | "bottom";
}

export interface DataTableProps {
	columns: DataTableColumn[];
	data: any[];
	onClickRow?: (item: any) => void;

	isLoading?: boolean;
	hasNextPage?: boolean;
	onLoadMore?: (page: number) => void;

	// pagination?: PaginationProps;
}

export interface DataTableColumn extends StyledTableCellProps {
	header?: string | JSX.Element;
	primary?: boolean;
	property: string;
	render?: (datum: any) => JSX.Element;
}

export interface InfiniteScrollProps {
	data?: any[];
	isLoading?: boolean;
}
