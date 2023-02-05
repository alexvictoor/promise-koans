// Your code below (Hint Promise.race)
const solutionWithTimeout = <T>(task: Promise<T>, timeOutInMs: number):  Promise<T> => Promise.race<T>([
  task,
  new Promise((_resolve, reject) => setTimeout(() => reject('TimeOut!'), timeOutInMs))
]);



//////////////////////////////////////////////////

describe("Promise rejected after a timeout", () => {

  const advanceTimersByTime = (timeInMs: number) => {
    return new Promise((resolve) =>
      setImmediate(() => {
        jest.advanceTimersByTime(timeInMs);
        resolve(undefined);
      })
    );
  };
  it("should reject promise when time has run out", async () => {
    // given
    jest.useFakeTimers({ legacyFakeTimers: true });
    const longTask = new Promise(resolve => setTimeout(resolve, 20_000));
    const longTaskWithTimeout = solutionWithTimeout(longTask, 10_000);
    // When
    await advanceTimersByTime(10_000);
    // then
    await expect(longTaskWithTimeout).rejects.toEqual('TimeOut!');
    
  });

});
