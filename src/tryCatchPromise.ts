import { ErrorResult, Result } from "./types";

export async function tryCatchPromise<TResult, TError>(
  promise: Promise<TResult> | PromiseLike<TResult>
) {
  try {
    const data = await promise;

    return [data, null] as Result<TResult>;
  } catch (e) {
    return [null, e] as ErrorResult<TError>;
  }
}
