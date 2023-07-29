import { NormalizeOAS, createClient } from "fets";
import { api } from "valtown-api-types";

const token = "<YOUR TOKEN>";

const client = createClient<NormalizeOAS<typeof api>>({
  endpoint: "https://api.val.town",
});

const getVal = async (username: string, val_name: string) => {
  const response = await client["/v1/alias/{username}/{val_name}"].get({
    params: { username: username, val_name: val_name },
    headers: { Authorization: `Bearer ${token}` },
  });
  if (response.status != 200) {
    return `${response.status}: ${response.statusText}`;
  }
  return response.json();
};

const me = await getVal("nbbaier", "hello");
console.log(me);
