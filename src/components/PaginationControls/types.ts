export interface PaginationProps {
	activePage: number;
	itemsPerPage: number;
	totalItems: number;
	onButtonClick: (newPageToSearch: number) => void;
}

export interface PaginationControlsProps extends PaginationProps {}
