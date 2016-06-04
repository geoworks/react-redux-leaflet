export default function arrayDiff(oldArray = [], newArray = []) {
  return {
    additions: newArray.filter(e => oldArray.indexOf(e) === -1),
    deletions: oldArray.filter(e => newArray.indexOf(e) === -1),
  };
}
