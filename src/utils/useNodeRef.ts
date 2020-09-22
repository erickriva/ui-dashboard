import { useCallback, useEffect, useState } from "react";
import { useWindowSize } from "./useWindowSize";

export const useNodeRef = (): [any, Element | null, DOMRect | null] => {
	const [node, setNode] = useState<Element | null>(null);
	const [rect, setRect] = useState<DOMRect | null>(null);

	const { windowWidth, windowHeight } = useWindowSize();

	const nodeRef = useCallback(
		(node: any) => {
			setNode(node);
			setRect(node?.getBoundingClientRect());
		},
		[windowWidth, windowHeight]
	);

	return [nodeRef, node, rect];
};
