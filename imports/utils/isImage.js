import getFileExtension from './getFileExtension';

export default fileName => {
  const ext = getFileExtension(fileName).toLowerCase();

  return ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'gif' || ext === 'bmp';
};
