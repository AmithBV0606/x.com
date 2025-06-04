import { initServer } from "./app";

async function init() {
  const app = await initServer();
  app.listen(4000, () => console.log(`Server started on PORT 4000`));
}

init();