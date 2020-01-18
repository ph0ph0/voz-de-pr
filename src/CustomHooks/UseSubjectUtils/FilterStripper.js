//This function removes null values from an object, and if the object is empty, returns null
//It is used to create the filter that is passed to dDB.

export const filterStripper = filter => {
  let strippedFilter = Object.entries(filter).reduce(
    (acc, [k, v]) => (v == null ? acc : { ...acc, [k]: v }),
    {}
  );
  if (
    Object.entries(strippedFilter).length === 0 &&
    strippedFilter.constructor === Object
  ) {
    window.log(`Filter was empty, nulling`);
    strippedFilter = null;
  }
  return strippedFilter;
};
