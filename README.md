# vastarx
Simple reactive state library

## Install

```bash
npm install @vasta/rx
```

## Usage

```ts
import { VastaRX } from '@vasta/rx';

const id = VastaRX.listen('key', (value) => {
	console.log('Updated value:', value)
})

const newValue = 1
VastaRX.publish('key', newValue)

VastaRX.unlisten(id)

```
## Package Build

```bash
$ npm run build
$ npm publish --access public
```