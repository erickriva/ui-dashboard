import React, { useEffect, useMemo } from "react";
import Alert from "../../components/Alert";
import { StyledPopupAlert } from "../../components/Alert/styles";
import { VisualType } from "../../theme/types";
import { v4 as uuid } from "uuid";

type AlertPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface AlertItemWithoutId {
	visualType?: VisualType;
	title?: string;
	description: string;
	time?: number;
	position?: AlertPosition;
}

interface AlertItem extends AlertItemWithoutId {
	id: string;
}

type AlertItems = {
	[name in AlertPosition]: AlertItem[];
};

interface AlertContextProps {
	createAlert: (alert: AlertItemWithoutId) => void;
}

export const AlertContext = React.createContext<AlertContextProps>({
	createAlert: alert => {}
});

export const AlertContextProvider: React.FC = ({ children }) => {
	const [alerts, setAlerts] = React.useState<AlertItems>({
		"bottom-left": [],
		"bottom-right": [],
		"top-left": [],
		"top-right": []
	});

	const createAlert = (alert: AlertItemWithoutId) => {
		const alertPosition = alert.position ?? "bottom-right";

		if (alerts[alertPosition].length > 3) alerts[alertPosition].pop();

		const newAlert = { ...alert, id: uuid() };
		setAlerts({ ...alerts, [alertPosition]: [newAlert, ...alerts[alertPosition]] });
	};

	const deleteAlert = ({ id, position = "bottom-right" }: AlertItem) => {
		setAlerts({ ...alerts, [position]: alerts[position].filter(t => t.id !== id) });
	};

	return (
		<>
			<StyledPopupAlert>
				{alerts["bottom-right"].map(alert => {
					return <Alert key={alert.id} {...alert} onClose={() => deleteAlert(alert)} />;
				})}
			</StyledPopupAlert>
			<AlertContext.Provider value={{ createAlert }}>{children}</AlertContext.Provider>
		</>
	);
};
