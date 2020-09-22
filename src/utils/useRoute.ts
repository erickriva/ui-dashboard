import React from "react";
import { useOutlet, useNavigate } from "react-router-dom";

export const useRoute = (nullFallback: string): { route: string | undefined; outlet: React.ReactElement | null } => {
	const outlet = useOutlet();
	const navigate = useNavigate();

	React.useEffect(() => {
		if (outlet === null) {
			navigate(nullFallback);
		}
	}, [outlet, nullFallback]);

	const route = React.useMemo(() => {
		const key = outlet?.props?.children?.props?.path;
		if (key) return key;
	}, [outlet]);

	return { route, outlet };
};
