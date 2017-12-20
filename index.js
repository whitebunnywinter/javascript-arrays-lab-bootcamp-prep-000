const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var newArray =[...kittens]
  newArray.push(name)
  return newArray
}

function prependKitten(name) {
  var newArray =[...kittens]
  newArray.unshift(name)
  return newArray  
}


function removeLastKitten()(name) {
  var newArray =[...kittens]
  newArray.unshift(name)
  return newArray  
}