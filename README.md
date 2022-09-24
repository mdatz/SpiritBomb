# SpiritBomb - A Qwik Component Library ⚡️

<p align='center'>
    <img src="https://user-images.githubusercontent.com/26133178/192087450-aef9929a-5e2f-4b4c-aae9-f1fc55f84c10.gif"></img>
</p>

<p align='center'>Using the power of open source, let's pool our energy and create an amazing component library for this new and exciting framework!</p> 

<p align='center'>"<i>Power comes in response to a need, not a desire.</i>" - Goku</p>

<hr></hr>

- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik Github](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)
- [Partytown](https://partytown.builder.io/)
- [Mitosis](https://github.com/BuilderIO/mitosis)
- [Builder.io](https://www.builder.io/)

---

## Project Structure

Inside of you project, you'll see the following directories and files:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── index.ts
```

- `src/components`: Recommended directory for components.

- `index.ts`: This is the entry point of your component library, make sure all the public components are exported from this file.

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). For Qwik during development, the `dev` command will also server-side render (SSR) the output. The client-side development modules loaded by the browser.

```
npm run dev
```

> Note: during dev mode, Vite will request many JS files, which does not represent a Qwik production build.

## Production

The production build should generate the production build of your component library in (./lib) and the typescript type definitions in (./lib-types).

```
npm run build
```
