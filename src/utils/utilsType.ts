export type RequireProps<T, TRequired extends keyof T> = Exclude<T, TRequired> & Required<Pick<T, TRequired>>;
