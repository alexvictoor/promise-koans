
// Your code below (Hint: setTimeout)
// Should return a promise that will be rejected only after the given delay expressed in milliseconds
const waitForDelay = (delayInMs: number) => Promise.reject('TODO');



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
      await waitForDelay(30_000);
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
