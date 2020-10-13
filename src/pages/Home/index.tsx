import React, { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import DataTable from "../../components/DataTable";
import { DataTableColumn } from "../../components/DataTable/types";
import { AlertContext } from "../../contexts/AlertContext";
import DefaultLayout from "../../layouts/DefaultLayout";
import { VisualType } from "../../theme/types";

interface ApiUserResult {
	id: number;
	name: string;
	email: string;
}

const Home: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<ApiUserResult[]>([]);
	const { createAlert } = useContext(AlertContext);

	const getData = async (page: number) => {
		setIsLoading(true);

		const adata: ApiUserResult[] = [
			{ id: 1, name: "Erick Riva", email: "erickriva@hotmail.com.br" },
			{ id: 2, name: "Erick Riva", email: "erickriva@hotmail.com.br" },
			{ id: 3, name: "Erick Riva", email: "erickriva@hotmail.com.br" }
		];

		await new Promise(resolve => setTimeout(resolve, 3000));

		setData([...data, ...adata]);

		setIsLoading(false);
	};

	const columns: DataTableColumn[] = [
		{ property: "id", header: "#", size: "45px" },
		{
			property: "name",
			header: "Name"
		},
		{ property: "email", header: "Email address" }
	];

	const a = ["success", "warning", "danger"];

	return (
		<DefaultLayout>
			<DataTable
				data={data}
				columns={columns}
				isLoading={isLoading}
				hasNextPage
				onLoadMore={page => getData(page)}
				onClickRow={item =>
					createAlert({
						title: "Teste",
						description: `Item ${item.id}`,
						visualType: a[item.id - 1] as VisualType
					})
				}
			/>
		</DefaultLayout>
	);
};

export default Home;
