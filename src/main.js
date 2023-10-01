import "./app.postcss";
import Hello from "./Hello.svelte";
import App from "./App.svelte";

const hello = new Hello({
  target: document.getElementById("Hello"),
});
const app = new App({
  target: document.getElementById("app"),
});

export default app;
