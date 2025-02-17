import { ErrorResult, Result } from "./types";

export async function tryCatchPromise<TResult, TError>(
  promise: Promise<TResult> | PromiseLike<TResult>,
) {
  try {
    const data = await promise;

    return [null, data] as Result<TResult>;
  } catch (e) {
    return [e, null] as ErrorResult<TError>;
  }
}
