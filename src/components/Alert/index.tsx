import React, { useCallback, useEffect, useState } from "react";
import { Check, CheckCircleFill, ExclamationCircleFill, XCircleFill } from "react-bootstrap-icons";
import { percentage } from "../../utils/helpers";

import { StyledContainer, StyledTitle, StyledDescription, StyledContent, StyledProgressBarCountdown } from "./styles";
import { AlertProps } from "./types";

const Alert: React.FC<AlertProps> = ({ visualType = "default", title, description, onClose, time = 5000 }) => {
	const [show, setShow] = useState(true);
	const [countdown, setCountdown] = useState(time);

	useEffect(() => {
		if (countdown <= 0) setShow(false);
		const msInterval = 50;

		const interval = setTimeout(() => setCountdown(countdown - msInterval), msInterval);
		return () => clearTimeout(interval);
	}, [countdown]);

	useEffect(() => {
		if (!show) onClose();
	}, [show]);

	const getIcon = () => {
		switch (visualType) {
			case "success":
				return <CheckCircleFill />;

			case "warning":
				return <ExclamationCircleFill />;

			case "danger":
				return <XCircleFill />;

			default:
				return null;
		}
	};

	return (
		<StyledContainer visualType={visualType}>
			{getIcon()}
			<StyledContent>
				{title && <StyledTitle>{title}</StyledTitle>}
				<StyledDescription>{description}</StyledDescription>
			</StyledContent>

			<StyledProgressBarCountdown style={{ width: `${percentage(countdown, time)}%` }} />
		</StyledContainer>
	);
};

export default Alert;
