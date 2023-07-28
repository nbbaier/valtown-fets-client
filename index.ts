import { ClientPlugin, NormalizeOAS, createClient } from "fets";
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
