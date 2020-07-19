const chunkArray = (arr, len) => {
  // Init Chunk array
  const chunkedArray = [];

  // Loop through arr
  arr.forEach((val) => {
    // Get last element
    const last = chunkedArray[chunkedArray.length - 1];

    // Check if last and last length is equal to chunk len
    if (!last || last.length === len) {
      chunkedArray.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArray;
};

module.exports = chunkArray;
