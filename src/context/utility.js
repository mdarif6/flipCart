export const sortedByLowAndHighPrice = (items, sortingname) => {
  if (sortingname === "LOW_TO_HIGH") {
    return items.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (sortingname === "HIGH_TO_LOW") {
    return items.sort((a, b) => Number(b.price) - Number(a.price));
  } else {
    return items;
  }
};

export const filteredByCategory = (items, categoryname) => {
  if (categoryname.length !== 0) {
    return items.filter((item) => {
      if (categoryname.indexOf(item.category) !== -1) {
        return true;
      } else {
        return false;
      }
    });
  } else {
    return items;
  }
};

export const filteredBySize = (items, sizename) => {
  if (sizename.length !== 0) {
    return items.filter((item) => {
      if (sizename.indexOf(item.size) !== -1) {
        return true;
      } else {
        return false;
      }
    });
  } else {
    return items;
  }
};

export const filteredByBrandName = (items, brandname) => {
  if (brandname.length !== 0) {
    return items.filter((item) => {
      if (brandname.indexOf(item.companyName) !== -1) {
        return true;
      } else {
        return false;
      }
    });
  } else {
    return items;
  }
};
