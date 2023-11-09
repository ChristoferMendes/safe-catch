export function hasError<T>(result: T | null, error: unknown): result is null {
  return result === null && error !== null
}
