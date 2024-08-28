import "./app.postcss";
import "./SturkeTest.svelte";

import App from "./App.svelte";
import NavGlobal from "./NavGlobal.svelte";
import SturkeTest from "./SturkeTest.svelte";
import Card from "./components/Card.svelte";


const nav = new NavGlobal({
  target: document.getElementById("NavGlobal"),
});
const sturlo = new SturkeTest ({
  target: document.getElementById("Hello"),
});
const app = new App({
  target: document.getElementById("app"),
});
export { nav, sturlo, Card };
export default app;
