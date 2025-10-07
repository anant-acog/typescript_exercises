## RUN
pnpm dev       # dev mode (auto-restart on change)
pnpm build && pnpm start

## Installing & Using modules
### runtime dependency
pnpm add zod

### dev-only types (if needed)
pnpm add -D @types/lodash

## any vs unknown
- any bypass type checking
- unknown forces you to check type before using it

### ctrl + D to select and edit all instances of a particular word
### shift + alt then drag mouse for column wise selection