# SafeCatch

`SafeCatch` is an NPM library written in TypeScript that provides two utility functions, `tryCatchPromise` and `tryCatchFunction`, to simplify error handling in asynchronous and synchronous code. This library aims to make error handling more concise and readable by encapsulating the try-catch logic within these functions.
## Installation

You can install `SafeCatch` using npm:

```shell

npm install safe-catch
```

## Usage
### `tryCatchPromise`

The `tryCatchPromise` function is designed for handling errors in asynchronous operations wrapped in Promises.

```typescript
/* imports... */
import { tryCatchPromise } from "safe-catch";

function fetchData() {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1')
}

async function example() {
  const [result, error] = await tryCatchPromise(fetchData());

  if (error) {
    return console.error("An error occurred:", error);
  } 

  return console.log("Data fetched:", await result.data);
  
}

example();
```



In the example above, `tryCatchPromise` is used to handle the asynchronous operation `fetchData()`. It returns a tuple `[data, error]`, where `data` contains the result of the successful operation or `null` if an error occurred, and `error` contains the error object or `null` if the operation was successful.
### `tryCatchFunction`

The `tryCatchFunction` is designed for handling errors in synchronous functions.

```typescript

import { tryCatchFunction } from "safe-catch";

function divide(a: number, b: number) {
  if (b === 0) {
    throw new Error("Division by zero");
  }

  return a / b;
}

function example() {
  const [result, error] = tryCatchFunction(() => divide(10, 2));

  if (error) {
    return console.log('Something went wrong :(', error)
  }

  return console.log('Result', result)
}

example();
```



In the above example, `tryCatchFunction` wraps the synchronous function `divide`. It also returns a tuple `[result, error]`, where `result` contains the return value of the function if it executed successfully, or `null` if an error occurred. The `error` variable holds the error object or `null` if the function was executed without any errors.
## Benefits of Using SafeCatch 
1. **Code Simplicity:**  By encapsulating the try-catch logic within the utility functions, `SafeCatch` eliminates the need for writing repetitive and verbose try-catch blocks. This leads to cleaner and more readable code. 
2. **Type Safety**: Built with TypeScript, SafeCatch leverages the static typing capabilities of the language. The utility functions tryCatchPromise and tryCatchFunction allow developers to define the expected return types and error types explicitly. This enables better type checking at compile-time, reducing the chances of runtime errors and providing enhanced code reliability.
3. **Reduced Boilerplate:**  The library handles the error handling boilerplate code, such as creating try-catch blocks and checking for errors. This allows developers to focus on the core logic of their functions, resulting in more concise and maintainable code. 
4. **Consistent Error Handling:**  `SafeCatch` promotes a consistent approach to error handling across asynchronous and synchronous code. It provides a uniform way to handle errors, making the codebase easier to understand and maintain.
## Conclusion

`SafeCatch` is a TypeScript library that simplifies error handling in asynchronous and synchronous code by encapsulating the try-catch logic within utility functions. It helps improve code readability, reduces boilerplate, and promotes consistent error handling practices. By using `SafeCatch`, developers can write cleaner and more maintainable code while effectively handling errors.