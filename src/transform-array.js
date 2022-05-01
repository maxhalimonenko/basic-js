function transform(arr) {
  
  if (!Array.isArray(arr)) {throw new Error("'arr' parameter must be an instance of the Array!")}
  if (!arr.length) {return []}
  let array = [...arr]
  for (let i = 0; i < array.length; i++) {
    if (array[i] == '--double-next') {
     array[i] = array[i + 1]
    }
    if (array[i] == '--double-prev') {
     array[i] = array[i - 1]
    }
    if (array[i] == '--discard-next') {
     array[i] = null
     array[i + 1] = null
    }
    if (array[i] == '--discard-prev') {
     array[i] = null
     array[i - 1] = null
    }
  }
  return array.filter(el => el != null)
 }
 
 module.exports = {
   transform
 };