import "./app.postcss";


import App from "./App.svelte";
import NavGlobal from "./NavGlobal.svelte";


const nav = new NavGlobal({
  target: document.getElementById("NavGlobal"),
});
const app = new App({
  target: document.getElementById("app"),
});

export default app;
