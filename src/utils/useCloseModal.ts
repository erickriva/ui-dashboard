import { useCallback, useEffect, useState } from "react";

export const useCloseModal = (
	onClose: (ev: any) => void,
	contentNode?: Element | null
): [any, Element | null, DOMRect | null] => {
	const [node, setNode] = useState<Element | null>(null);
	const [rect, setRect] = useState<DOMRect | null>(null);

	const nodeRef = useCallback((node: any) => {
		setNode(node);
		setRect(node?.getBoundingClientRect());
	}, []);

	useEffect(() => {
		if (!node) return;

		const onClick = (event: any) => {
			if (node?.contains(event.target)) return;
			if (contentNode?.contains(event.target)) return;
			if (event.key && event.key !== "Escape") return;

			onClose(event);
		};

		document.addEventListener("click", onClick);
		document.addEventListener("keydown", onClick);

		return () => {
			document.removeEventListener("click", onClick);
			document.removeEventListener("keydown", onClick);
		};
	}, [node, contentNode, onClose]);

	return [nodeRef, node, rect];
};
