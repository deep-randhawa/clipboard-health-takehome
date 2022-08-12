# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
/**
 * 1.
 * If I understand it correctly, SHA3-512 will always return a 512 bit hash-string.
 * This equals to 128 hex characters.
 * Hence the following code is redundant
 * ```
 * if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
 *   candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
 * }
 * ```
 * ^^ It has been removed.
 *
 *
 * 2. The hash function can be refactoried into its own function. This reduces code duplication
 * and also promotes easier readibility
 *
 * 3. Use of ternary operators improve readability.
 * 
 * 4. `candidate` is initialized with `0` (trivialPartitionKey) without 
 *      creating a separate variable.
 *
 * 5. Pulling the (!event) condition to the top allows us to not worry about the
 *      invalid case throughout the rest of the function.
 * 
 */