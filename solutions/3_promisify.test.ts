import { access  } from 'fs';

// Your code below 
const solutionExists = (path: string): Promise<void> => new Promise((resolve, reject) => access(path, error => {
  if (error) {
    reject(error);
  } else {
    resolve();
  }
}))
 

//////////////////////////////////////////////////

describe("Promisify a legacy api", () => {

  
  it("should promisify access (Happy path)", async () => {
    // given
    const file = './package.json';
    // When
    // then
    await solutionExists(file);

  });

  it("should promisify access (Error path)", async () => {
    // given
    const file = './packaaage.json';
    // When
    // then
    await expect(solutionExists(file)).rejects.toBeDefined();
  });

});
