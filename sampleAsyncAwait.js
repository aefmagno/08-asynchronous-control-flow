function myAsync1(callback) {
  setTimeout(() => {
    callback(null, 'async1')
  }, 3000)
}

async function myAsync2(callback) {
  setTimeout(() => {
    callback(null, 'async2')
  }, 2000)
}

async function myAsync3(callback) {
  setTimeout(() => {
    callback(null, 'async3')
  }, 1000)
}

async function myAsync4(callback) {
  setTimeout(() => {
    try {
      // lets say something happened
      throw new Error('forced error')
    } catch (err) {
      return callback(err)
    }
  }, 3000)
}

async function start() {
  await myAsync1((err, c) => {
    console.log(c)
  })

  await myAsync2((err, c) => {
    console.log(c)
  })

  await myAsync3((err, c) => {
    console.log(c)
  })

  await myAsync4((err, c) => {
    console.log(err)
  })
}

start()
