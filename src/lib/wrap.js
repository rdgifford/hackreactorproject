var wrap = function(index, arr){
  var wrappedIndex = index % arr.length
  return wrappedIndex
}

module.exports = wrap
