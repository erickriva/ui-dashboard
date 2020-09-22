import React, { useRef, useEffect } from "react";

import { Container, Content } from "./styles";

interface Props {
	show: boolean;
	onEscPress?: () => void;
}
const Modal: React.FC<Props> = ({ show, onEscPress, children }) => {
	const contentRef = useRef<HTMLDivElement>(null);

	const closeModal = (event: any) => {
		const node = contentRef.current;
		const { key } = event;

		if (key != null && key !== "Escape") return;

		if (node && !node.contains(event.target)) {
			if (onEscPress) onEscPress();
		}

		// console.log(event);
	};

	useEffect(() => {
		if (show) {
			if (onEscPress) {
				document.addEventListener("click", closeModal, true);
				document.addEventListener("keydown", closeModal, true);
			}
		} else {
			document.removeEventListener("click", closeModal, true);
			document.removeEventListener("keydown", closeModal, true);
		}

		return () => {
			document.removeEventListener("click", closeModal, true);
			document.removeEventListener("keydown", closeModal, true);
		};
	}, [show]);

	if (!show) return null;
	return (
		<Container>
			<Content ref={contentRef}>{children}</Content>
		</Container>
	);
};

export default Modal;
