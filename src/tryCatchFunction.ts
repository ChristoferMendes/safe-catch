import { ErrorResult, Result } from "./types";

export function tryCatchFunction<TReturn, TError>(fn: () => TReturn) {
  try {
    const data = fn();

    return [null, data] as Result<TReturn>;
  } catch (e) {
    return [e, null] as ErrorResult<TError>;
  }
}
