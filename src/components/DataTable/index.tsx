import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";

import { DataTableProps } from "./types";

import {
	StyledDataTableContainer,
	StyledTable,
	StyledTableCell,
	StyledTableRow,
	StyledTableHeader,
	StyledTableFooter,
	StyledTableBody,
	StyledTableHeaderCell
} from "./styles";
import useInfiniteScroll from "../../utils/useInfiniteScroll";

const DataTable: React.FC<DataTableProps> = ({
	data,
	columns,
	onClickRow,
	// pagination,
	isLoading,
	onLoadMore = page => {},
	hasNextPage = false
}) => {
	const showHeader = columns.some(column => column.header);

	const [page, loaderRef, scrollerRef] = useInfiniteScroll<HTMLTableSectionElement, HTMLTableRowElement>({
		hasMore: hasNextPage
	});

	useEffect(() => {
		onLoadMore(page);
	}, [page]);

	return (
		<StyledDataTableContainer>
			{/* {pagination && (
				<PaginationControls
					activePage={pagination.activePage}
					itemsPerPage={pagination.itemsPerPage}
					totalItems={pagination.totalItems}
					onButtonClick={pagination.onButtonClick}
				/>
			)} */}

			<StyledTable>
				{showHeader && (
					<StyledTableHeader>
						<StyledTableRow>
							{columns.map(eachColumn => (
								<StyledTableHeaderCell
									key={uuid()}
									size={eachColumn.size}
									horizontalAlign={eachColumn.horizontalAlign}
									verticalAlign={eachColumn.verticalAlign}>
									<b>{eachColumn.header}</b>
								</StyledTableHeaderCell>
							))}
						</StyledTableRow>
					</StyledTableHeader>
				)}

				<StyledTableBody ref={scrollerRef}>
					{data.map(eachItem => (
						<StyledTableRow key={eachItem.id ?? eachItem.key ?? uuid()}>
							{columns.map(eachColumn => {
								const columnContent =
									(eachColumn.render && eachColumn.render(eachItem)) ?? eachItem[eachColumn.property];

								return (
									<StyledTableCell
										key={uuid()}
										horizontalAlign={eachColumn.horizontalAlign}
										verticalAlign={eachColumn.verticalAlign}
										onClick={() => onClickRow && onClickRow(eachItem)}>
										{columnContent}
									</StyledTableCell>
								);
							})}
						</StyledTableRow>
					))}
				</StyledTableBody>

				<StyledTableFooter>
					{isLoading && (
						<StyledTableRow ref={loaderRef} style={{ textAlign: "center" }}>
							<StyledTableCell colSpan={99}>Loading...</StyledTableCell>
						</StyledTableRow>
					)}
				</StyledTableFooter>
			</StyledTable>
		</StyledDataTableContainer>
	);
};

export default DataTable;
