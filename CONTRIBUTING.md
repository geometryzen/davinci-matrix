## Contributing

### Building

Open a terminal window.

Clone the davinci-matrix repo:
```
git clone git://github.com/geometryzen/davinci-matrix.git
```

Change to the repo directory:
```
cd davinci-matrix
```

Install Dependencis:
```
yarn install
```
to install the tooling dependencies (For this you need to have [Node.js](http://nodejs.org) installed).

## Making Changes

Make your changes to the TypeScript files in the _src_ directory.

## Testing

```
karma start
```

## Versioning

The following files should be changed.

```
package.json
```

## Git

```
git add --all
git commit -m '...'
git tag -a 1.2.3 -m '...'
git push origin master --tags
npm publish
```