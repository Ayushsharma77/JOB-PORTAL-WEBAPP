import app from "./app.js";
import { pathToFileURL } from "node:url";

// Vercel invokes the exported Express app as a serverless function. Keep the
// listener for local `npm start` / `npm run dev` use only.
const isDirectExecution =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (isDirectExecution && process.env.VERCEL !== "1") {
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server running at port ${port}`);
  });
}

export default app;
