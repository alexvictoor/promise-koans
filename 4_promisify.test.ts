import { readFile  } from 'fs';

// Your code below 
// promisify should transform any legacy asynchronous function to a function returning a Promise
// See NodeJs doc archive: https://nodejs.org/docs/v0.1.101/api.html
const promisify = (fn: Function) => (...args: any[]): Promise<any> => {
  return new Promise((resolve, reject) => {
    fn(...args, (error, data) => {
      console.log(data);
    });
    reject('TODO');
  });
}
 

//////////////////////////////////////////////////

describe("Promisify any legacy api", () => {

  
  it("should promisify access (Happy path)", async () => {
    // given
    const file = './package.json';
    // When
    const read = promisify(readFile);
    const content = await read(file, 'UTF-8');
    // then
    expect(content).toBeDefined();
  });

  it("should promisify access (Error path)", async () => {
    // given
    const file = './packaaage.json';
    // When
    const read = promisify(readFile);
    // then
    await expect(read(file, 'UTF-8')).rejects.toBeDefined();
  });

});
