const { Marvel, IronMan } = require('../prototype-chain')

describe('prototype chain', () => {
  const ironMan = new IronMan()
  test('get name', () => {
    return ironMan.name
  })
})
