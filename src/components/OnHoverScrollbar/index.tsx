import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

import { Container } from "./styles";

interface OnHoverScrollbarProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	autoHide?: boolean;
}

const OnHoverScrollbar: React.FC<OnHoverScrollbarProps> = ({ autoHide = true, className, children, ...myprops }) => {
	return (
		<Scrollbars
			autoHide={autoHide}
			autoHideTimeout={500}
			autoHideDuration={200}
			renderTrackHorizontal={props => <div {...props} className="scrollbar-track-horizontal" />}
			renderTrackVertical={props => <div {...props} className="scrollbar-track-vertical" />}
			renderThumbHorizontal={props => <div {...props} className="scrollbar-thumb-horizontal" />}
			renderThumbVertical={props => <div {...props} className="scrollbar-thumb-vertical" />}
			renderView={props => (
				<Container {...myprops} className={className} {...props} style={{ ...props.style, margin: 0 }} />
			)}>
			{children}
		</Scrollbars>
	);
};

export default OnHoverScrollbar;
