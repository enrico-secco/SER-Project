export const convertFileToBase64 = (file?: File) => {
  console.log(file);
  return new Promise<any>((resolve, reject) => {
    const writeFile = new FileReader();
    if (file) {
      writeFile.readAsDataURL(file);
      writeFile.onload = () => {
        if (writeFile.result) {
          resolve(writeFile.result);
        }
        resolve(null);
      };
    }
    resolve(null);
    writeFile.onerror = (error) => {
      reject(error);
    };
  });
};
