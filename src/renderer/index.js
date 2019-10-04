'use strict'

const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Привет мир!</h1>
    Мы используем Node ${process.versions.node},
    Chrome ${process.versions.chrome},
    и Electron ${process.versions.electron}.
  </body>
</html>
`

document.querySelector('#app').innerHTML = html
