import { readFile  } from 'fs';

// Your code below 
const solutionPromisify = (fn: Function) => (...args: any[]): Promise<any> => {
  return new Promise((resolve, reject) => {
    fn(...args, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}
 

//////////////////////////////////////////////////

describe("Promisify any legacy api", () => {

  
  it("should promisify access (Happy path)", async () => {
    // given
    const file = './package.json';
    // When
    const read = solutionPromisify(readFile);
    const content = await read(file, 'UTF-8');
    // then
    expect(content).toBeDefined();
  });

  it("should promisify access (Error path)", async () => {
    // given
    const file = './packaaage.json';
    // When
    const read = solutionPromisify(readFile);
    // then
    await expect(read(file, 'UTF-8')).rejects.toBeDefined();
  });

});
