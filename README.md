# sturke.github.io
I began learning how to write HTML in 1996. I bought a book and taught myself how to build a website. I still didn't know exactly what I wanted to do with this knowledge yet. I was running a landscaping business at the time and didn't devote a lot of time to HTML. It was more of a late night hobby. Later in 2010, I went to college and got my AAS in Graphic Design and took many web design and web development classes as well as one intro to javascript programming class. I graduated in 2014 with honors. Unfortunately, I have not been working in the field and the although the process is still fundamentally the same, the tools and popular languages have moved forward and now I am playing catch up. Some things look like they have improved significantly for the better. Other improvements in the technology are escaping my grasp for now. 

2020 and 2021 have been a challenge with the Covid-19 pandemic and political circus surrounding it. I want to work from home and this pandemic is my motivation to finally enter this field, stay safe from the pandemic, and to explore and expand my mind, talents, abilities, and skills. 

In November of 2022, I reached out to see if our local meet-up for Free Code Camp was active. We've been meeting most weeks since then. I have learned a lot. Each week is kind of like drinking from a firehose. One of the guys is really excited about Svelte. I'm going to practice using Svelte to rebuild this page.  


# Svelte Starter

[![](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/shinokada)


This Svelte starter template provides a comprehensive foundation for developing with Svelte and Vite, including preconfigured support for TailwindCSS, Flowbite-Svelte, and Svelte-Spa-Router. Additionally, it includes a sample implementation of fetching data from a backend API, making it easy to integrate with your own server-side infrastructure.

## Installation

```bash
git clone git@github.com:shinokada/svelte-starter.git my-app
cd my-app
pnpm i
```

Update dependencites:

```sh
pnpm update
pnpm i flowbite-svelte@latest flowbite@latest
```
ERR 
So I ran:
```sh
npm update flowbite-svelte
```

## Backend API env value

Update your backend API value in `.env`:

```text
API_ENDPOINT=http://localhost:3000/api
API_SECRET=1234
```

## Start a local server

```bash
npm run dev
```
## Local Server is working! 09/27/2023
Now I just need to work on learning which files to modify to my needs.

## How to use this for GitHub page

```
npm run build
npm run deploy
```

This will deploy your GitHub page to `https://<username>.github.io/<repository name>` URL. Don’t forget to change the username and repository name to your personal Github username and repository.
It may take a couple of minutes. You can check the progress in GitHub Actions tab.


## Warp AI
Question: I want to learn Svelte.

That's great! Svelte is a modern JavaScript framework for building user interfaces. Here are some steps to get started with learning Svelte:

1. Install Node.js: Svelte requires Node.js to be installed on your machine. You can download and install it from the official Node.js website (https://nodejs.org).

2. Create a new Svelte project: Open your terminal and run the following command to create a new Svelte project:
   ```bash
   npx degit sveltejs/template {{project-name}}
   ```

   Replace `{{project-name}}` with the desired name for your project.

3. Navigate to the project directory: Change your current directory to the newly created project directory:
   ```bash
   cd {{project-name}}
   ```

4. Install dependencies: Run the following command to install the project dependencies:
   ```bash
   npm install
   ```

5. Start the development server: Once the dependencies are installed, start the development server with the following command:
   ```bash
   npm run dev
   ```

   This will start a local development server and open your Svelte app in your default browser.

6. Explore the project structure: Svelte follows a component-based architecture. Take a look at the project structure and explore the `src` directory, which contains the main Svelte components.

7. Learn Svelte syntax: Svelte has its own syntax for building components. Familiarize yourself with the Svelte syntax by reading the official documentation (https://svelte.dev/docs).

8. Build your first Svelte app: Start by modifying the existing Svelte components or creating new ones. Experiment with the Svelte syntax and see how it affects the rendered output.

9. Deploy your Svelte app: Once you're ready to deploy your Svelte app, run the following command to build a production-ready version:
   ```bash
   npm run build
   ```

   This will generate optimized static files in the `public` directory, which you can deploy to a web server.

10. Continue learning: Svelte has a vibrant community and plenty of resources available. Explore the official documentation, join forums or communities, and build more complex projects to further enhance your Svelte skills.

Remember to practice regularly and build small projects to reinforce your learning. Good luck on your Svelte journey!