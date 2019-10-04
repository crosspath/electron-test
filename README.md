# Prepare

For new code:

```
yarn init
yarn add electron@latest electron-builder@20.0.1 electron-webpack@2.6.2 webpack --dev
yarn add source-map-support
```

For existing code:

```
yarn install
```

# Test

```
# for projects without Webpack
yarn start
# this template, with Webpack
yarn dev
```

# Build

```
yarn dist --linux snap
```

# Install

```
sudo snap install dist/electron-test_1.0.0_amd64.snap --dangerous
which electron-test
# => /snap/bin/electron-test
```

# Run

```
electron-test --no-sandbox
```

# Remove

```
sudo snap remove electron-test
```

# Remove files for building sources

```
rm -R {dist,node_modules,prime,snap,stage}
```
