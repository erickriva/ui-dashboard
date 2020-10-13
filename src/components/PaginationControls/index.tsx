import React, { useEffect, useState } from "react";

import {
	StyledPagination,
	StyledPaginationActivePage,
	StyledPaginationButton,
	StyledPaginationButtons,
	StyledRightContent
} from "./styles";
import { PaginationControlsProps } from "./types";

const PaginationControls: React.FC<PaginationControlsProps> = ({
	activePage,
	itemsPerPage,
	totalItems,
	onButtonClick
}) => {
	const [totalPages, setTotalPages] = useState(0);

	const previousButtonDisabled = activePage <= 1;
	const nextButtonDisabled = activePage >= totalPages;

	useEffect(() => {
		if (totalItems <= 0 || itemsPerPage <= 0) return;
		setTotalPages(Math.ceil(totalItems / itemsPerPage));
	}, [itemsPerPage, totalItems]);

	return (
		<StyledPagination>
			<StyledRightContent>
				<StyledPaginationActivePage>
					<b>{totalItems}</b> items
				</StyledPaginationActivePage>

				<StyledPaginationButtons>
					<StyledPaginationButton
						disabled={previousButtonDisabled}
						onClick={() => (previousButtonDisabled ? null : onButtonClick(activePage - 1))}>
						{"<<"}
					</StyledPaginationButton>

					{Array.from(Array(totalPages).keys()).map((_, index) => {
						const n = index + 1;
						return (
							<StyledPaginationButton
								key={n}
								onClick={() => onButtonClick(n)}
								className={n === activePage ? "active" : ""}>
								{n}
							</StyledPaginationButton>
						);
					})}

					<StyledPaginationButton
						disabled={nextButtonDisabled}
						onClick={() => (nextButtonDisabled ? null : onButtonClick(activePage + 1))}>
						{">>"}
					</StyledPaginationButton>
				</StyledPaginationButtons>
			</StyledRightContent>
		</StyledPagination>
	);
};

export default PaginationControls;
