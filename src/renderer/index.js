'use strict'

const html = `
  <h1>Привет мир!</h1>
  <p>
    Мы используем Node ${process.versions.node},
    Chrome ${process.versions.chrome},
    и Electron ${process.versions.electron}.
  </p>
`

document.querySelector('#app').innerHTML = html
