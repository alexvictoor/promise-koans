import { access  } from 'fs';

// Your code below 
// Should adapt access function, which is an old school asynchronous function relying on callbacks to a function returning Promise.
// See NodeJs doc archive: https://nodejs.org/docs/v0.1.101/api.html
const exists = (path: string): Promise<void> => {
  access(path, error => console.log('You should return a rejected promise when error is defined', error))
  return Promise.reject('TODO');
}
 

//////////////////////////////////////////////////

describe("Promisify a legacy api", () => {

  
  it("should promisify access (Happy path)", async () => {
    // given
    const file = './package.json';
    // When
    // then
    await exists(file);

  });

  it("should promisify access (Error path)", async () => {
    // given
    const file = './packaaage.json';
    // When
    // then
    await expect(exists(file)).rejects.toBeDefined();
  });

});
