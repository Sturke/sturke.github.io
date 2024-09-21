# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

### Sept 20 
I finally got deployed to gh-pages branch. [Sean Coughlin's Blog](https://blog.seancoughlin.me/publishing-a-sveltekit-app-to-github-pages) was instrumental in helping me understand and get this done. The only thing that got jammed up was the part in his page where he added vitePreprocess. That threw all kinds of errors. I removed it and it works. I also used his advise on his post [Deploying to GitHub Pages using gh-pages](https://blog.seancoughlin.me/deploying-to-github-pages-using-gh-pages). 