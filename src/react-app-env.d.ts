/// <reference types="react-scripts" />

declare module "@closeio/use-infinite-scroll" {
	/// <reference types="react" />
	interface InfiniteScrollArgs {
		/** @param {boolean} options.hasMore The observer will disconnect when there are no more items to load. */
		hasMore: boolean;
		/** @param {boolean | undefined} [options.reset=false] Pass true when you're re-fetching the list and want to resets the scroller to page 0. Defaults to false. */
		reset?: boolean;
		/** @param {number | undefined} [options.distance=250] When scrolling, the distance in pixels from the bottom to switch the page. Defaults to 250. */
		distance?: number;
	}
	/**
	 * An infinite scroller based on effects.
	 * Every time the loader is `N`px to be shown, switch to a new page, load new items.
	 *
	 * @example
	 * const [items, setItems] = useState([]);
	 * const [hasMore, setHasMore] = useState(false);
	 * const [page, loaderRef, scrollerRef] = useInfiniteScroll({ hasMore });
	 *
	 * useFetchEffect(async ({ signal }) => {
	 *   const data = await myApiCall({ page }, { signal });
	 *   setHasMore(data.hasMore);
	 *   setItems(prev => [...prev, data.items]);
	 * }, [page])
	 *
	 * return (
	 *   <div ref={scrollerRef}>
	 *     {items.map(item => <div key={item.id}>{item.name}</div>)}
	 *     {hasMore && <div ref={loaderRef}>Loading…</div>}
	 *   </div>
	 * );
	 * @param {Object} [options={}]
	 * @param {boolean} options.hasMore The observer will disconnect when there are no more items to load.
	 * @param {boolean} [options.reset=false] Pass true when you're re-fetching the list and want to resets the scroller to page 0.
	 * @param {number} [options.distance=250] When scrolling, the distance in pixels from the bottom to switch the page.
	 */
	export default function useInfiniteScroll<
		ScrollElementType extends HTMLElement,
		LoaderElementType extends HTMLElement
	>({
		hasMore,
		reset,
		distance
	}: InfiniteScrollArgs): [number, React.RefObject<LoaderElementType>, React.RefObject<ScrollElementType>];
	export {};
}
