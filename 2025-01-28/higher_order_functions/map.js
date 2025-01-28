const myName = "John"
const nameArray = myName.split('')
const newName = nameArray.map(l => `${l}${l}`)
console.log(newName)

const joinedNewName = newName.join('')
console.log(joinedNewName)