# vastarx
A zero dependency, simple reactive state

## Install

```bash
npm install @vasta/rx
```

## Usage

```ts
import { VastaRX } from '@vasta/rx';

const id = VastaRX.getState('key', (value) => {
	console.log('Updated value:', value)
})

const newValue = 1
VastaRX.setState('key', newValue)

VastaRX.unListen(id)

```