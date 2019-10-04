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

\+ fix

```
cp dist/electron-builder.yaml node_modules/electron-webpack/electron-builder.yml
```

# Test

```
yarn start
# or
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
rm -R {dist,prime,snap,stage}
```
