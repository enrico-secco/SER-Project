export const convertFileToBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const writeFile = new FileReader();
    writeFile.readAsDataURL(file);
    writeFile.onload = () => {
      resolve(writeFile.result);
    };
    writeFile.onerror = (error) => {
      reject(error);
    };
  });
};
