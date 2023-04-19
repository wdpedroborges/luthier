![badge](https://img.shields.io/github/watchers/wdpedroborges/luthier?style=social)
![badge](https://img.shields.io/github/stars/wdpedroborges/luthier?style=social)
![badge](https://img.shields.io/github/license/wdpedroborges/luthier)
![badge](https://img.shields.io/badge/powered%20by-vite-blue)
![badge](https://img.shields.io/badge/powered%20by-react.js-blue)
![badge](https://img.shields.io/badge/powered%20by-typescript-blue)
![badge](https://img.shields.io/badge/powered%20by-sass.js-blue)

# Luthier
## A website that a luthier could use!

This is a website made with React.js, Typescript, Sass and MUI. It uses React Routing and Skeleton Loading. The idea is to be a website for a luthier, which is a person that makes and fixes instruments.

## Live Demo

wdpedroborges.github.io/luthier

## Features

- responsive navbar
- responsive hero
- showcase of services using tabs component from MUI
- testimonials
- footer
- about page with cards from MUI
- contact page made with MUI

## Tech

- Vite
- React.js
- Typescript
- Sass
- MUI

## Installation

Clone the repository:

```bash
git clone https://github.com/wdpedroborges/luthier
```

For production:

```sh
cd luthier
npm install
npm run dev
```

Debug in Typescript:

```bash
tsc --noEmit --watch
```

Build:

```bash
npm run build
```

## Deploy

- Add to vite.config.js:

```bash
base: "/<repo>/"
```

- Then:

```bash
npm install gh-pages --save-dev
```

- Add to package.json

```bash
 "homepage": "https://<username>.github.io/<repo>/",
  ...
  "scripts": {
...
"build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
...
```

## License

This project is licensed under the MIT License. Please see the LICENSE file for more details.