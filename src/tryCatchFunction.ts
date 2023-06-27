import { ErrorResult, Result } from "./types";

export function tryCatchFunction<TReturn, TError>(fn: () => TReturn) {
  try {
    const data = fn();

    return [data, null] as Result<TReturn>;
  } catch (e) {
    return [null, e] as ErrorResult<TError>;
  }
}
