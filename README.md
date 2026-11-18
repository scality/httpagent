# HttpAgent

HttpAgent is a library on top of the native `http` and `https` NodeJS Agents
to enforce consistent, still configurable networking configuration for Scality
micro services.

What HttpAgent is:

- A wrapper enforcing, by default, both `keepAlive` and `maxSockets` options.
- A centralized way of handling Http(s) Agents, while supporting consistent
  environment variables across components.
- A library that can be extended with more standard configurations.

What HttpAgent is not:

- An all-in-one library for networking-related code.

## Formatting

Prettier formatting of the whole repository is checked in CI. Run it before
pushing:

```bash
yarn run prettier --write .
```
