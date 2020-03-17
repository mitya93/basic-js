module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else {
    return members.reduce((arr, item) => {
    if (typeof item === 'string') arr.push(item.trim()[0].toUpperCase());
    return arr;
  }, []).sort().join(''); }
}