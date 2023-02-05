
// Your code below (Hint: setTimeout)
const solutionWaitForDelay = (delayInMs: number) => new Promise(resolve => setTimeout(resolve, delayInMs));



//////////////////////////////////////////////////

describe("Wait for a delay", () => {

  const advanceTimersByTime = (timeInMs: number) => {
    return new Promise((resolve) =>
      setImmediate(() => {
        jest.advanceTimersByTime(timeInMs);
        resolve(undefined);
      })
    );
  };
  it("should wait for a given delay", async () => {
    // given
    jest.useFakeTimers({ legacyFakeTimers: true });
    let jobDone: boolean = false;
    const task = async () => {
      await solutionWaitForDelay(30_000);
      jobDone = true;
    }
    // when
    task();
    // then
    expect(jobDone).toBe(false);
    await advanceTimersByTime(30_000);
    expect(jobDone).toBe(true);
    
  });

});
