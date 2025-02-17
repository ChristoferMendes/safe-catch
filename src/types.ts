type Result<T> = [null, T];
type ErrorResult<E> = [E, null];

export { Result, ErrorResult };
