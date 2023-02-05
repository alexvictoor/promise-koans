// Your code below 
// Should return a decorate functions with logs on each stage (PENDING, REJECTED, RESOLVED)
// Hint: Promise.resolve(), Promise.reject(), promise.then(onfulfilled, onrejected)
const debugAsync = <T>(fn: () => Promise<T>) => fn;



//////////////////////////////////////////////////

describe("Debug logs", () => {

  let history: string[] = [];
  const realConsoleLog = console.log;
  beforeEach(() => {
    console.log = (input: string) => {
      realConsoleLog(input);
      history.push(input); 
    }
  })
  afterEach(() => {
    history = [];
    console.log = realConsoleLog;
  })

  it("should log (happy path)", async () => {
    // given
    const task = debugAsync(() => Promise.resolve(42));
    // when
    const result = await task();
    // then
    expect(history[0]).toMatch('PENDING');
    expect(history[1]).toMatch('RESOLVED 42');
    expect(result).toBe(42);
  });

  it("should log (error path)", async () => {
    // given
    const task = debugAsync(() => Promise.reject(42));
    // when
    // then
    await expect(task).rejects.toBeDefined();
    expect(history[0]).toMatch('PENDING');
    expect(history[1]).toMatch('REJECTED 42');
  });

});
