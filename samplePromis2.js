function myAsync1() {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('async1')
    }, 3000)
  })
  return p
}

function myAsync2() {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('async2')
    }, 2000)
  })
  return p
}

function myAsync3() {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('async3')
    }, 1000)
  })
  return p
}

function myAsync4() {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      throw new Error('forced error')
    }, 3000)
  })
  return p
}

function start() {
  myAsync1().then((result) => {
    console.log(result)
  }).then(myAsync2().then((result) => {
    console.log(result)
  })).then(myAsync3().then((result) => {
    console.log(result)
  }))
    .then(myAsync4().then((result) => {
      console.log(result)
    }))
}

start()
