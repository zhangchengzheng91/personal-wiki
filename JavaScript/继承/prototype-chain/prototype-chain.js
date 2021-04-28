function Marvel() {
  this.category = 'Marvel Comics'
}

Marvel.prototype.getCategory = function() {
  return this.category
}

function IronMan() {
  this.name = 'Tony'
}

IronMan.prototype = new Marvel()
IronMan.prototype.getName = function() {
  return this.name
}

module.exports = {
  Marvel,
  IronMan,
}

//var instance = new IronMan()
//instance.getCategory() // 'fruits'
//instance.getName() // 'apple'
//instance.__proto__ === Marvel.prototype // false
//instance.__proto__ === IronMan.prototype // true
