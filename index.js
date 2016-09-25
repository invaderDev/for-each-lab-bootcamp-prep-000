function iterativeLog(array){
  array.forEach(item => {
    console.log(`${array.indexOf(item)}: ${item}`)
  })
}

function iterate(callback){
  array = [];
  callback(array);
  return array
}

function doToArray(array, callback){
  array.forEach(callback)
}
