function myAsync1(callback) {
  setTimeout(() => {
    callback(null, 'async1')
  }, 3000)
}

function myAsync2(callback) {
  setTimeout(() => {
    callback(null, 'async2')
  }, 2000)
}

function myAsync3(callback) {
  setTimeout(() => {
    callback(null, 'async3')
  }, 1000)
}

function myAsync4(callback) {
  setTimeout(() => {
    try {
      // lets say something happened
      throw new Error('forced error')
    } catch (err) {
      return callback(err)
    }
  }, 3000)
}

function start() {
  myAsync1((err, c) => {
    myAsync2((err, c) => {
        myAsync3((err, c) => {
            myAsync4((err, c) => {
                console.log(err)
            })
            console.log(c)
        })
        console.log(c)
    })
    console.log(c)
  })
}

start()
