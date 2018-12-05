export default fileName => fileName.slice(((fileName.lastIndexOf('.') - 1) >>> 0) + 2);
