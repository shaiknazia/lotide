
  
const middle = function(array) {
  if (array.length <= 2) {
    return ('there is no middle.')
  } else if(array.length % 2 === 0) {
    return (`Middles are ${array[(array.length/2) - 1]} and ${array[array.length/2]}`)
  } else {
    return (`Middle is ${array[Math.floor(array.length/2)]}`)
  }
}






module.exports = middle;

