# valtown-fets-client

This is a client leveraging [`feTS`](https://github.com/ardatan/feTS) to create an API client for Val Town. The Val Town [openapi spec](https://www.val.town/docs/openapi.yaml) is used to generate `api.ts`. 

# Usage
```ts
import { NormalizeOAS, createClient } from "fets";
import { api } from "./api";

const token = "<YOUR TOKEN>";

const client = createClient<NormalizeOAS<typeof api>>({
  endpoint: "https://api.val.town",
});

const resp = await client["/v1/alias/{username}/{val_name}"].get({
  params: { username: "nbbaier", val_name: "hello" },
  headers: { Authorization: `Bearer ${token}` },
});

const me = await resp.json();
console.log(me);
```

# Todo 
- [ ] Publishing to NPM
- [ ] Automated generation of `api.ts` when the spec changes
