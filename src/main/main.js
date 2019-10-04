'use strict'

import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import { format as formatUrl } from 'url'

const isDevelopment = process.env.NODE_ENV !== 'production'

function createWindow () {
  // Создаем окно браузера.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (isDevelopment)
    win.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
  else
    win.loadURL(
      formatUrl({
        pathname: path.join(__dirname, '..', 'renderer', 'index.html'),
        protocol: 'file',
        slashes: true
      })
    )
}

app.on('ready', createWindow)
