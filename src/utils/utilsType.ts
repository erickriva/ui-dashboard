export interface RenderProp<TChildrenProps, TElement = any> {
	(props: TChildrenProps): React.ReactElement<TElement>;
}
