# Photosnap

This project is based on a frontend challenge provided by [Frontend Mentor](https://www.frontendmentor.io/).

You can inspect the hosted project [here](https://photosnap-nine.vercel.app/).

## How to run:

First you need to install your node_modules. In order to do so, run `yarn install` or `npm install`.

After your node_modules have finished downloading, you can run `yarn dev` or `npm run dev` to run the application in development mode on your machine. The default port is 3000.

## Used Tech

For this project I chose the following technologies.

Frontend:

- Next.js
- Styled Components
- Typescript

Code Quality:

- Stylelint
- Eslint
- Prettier

CI/CD and Hosting

- Github actions
- Vercel

Testing:

- Jest
- Cypress

## What I want to improve:

There are a couple of components which need improvement as to be more representative to the provided design.
Furthermore, I need to fix a bug where the menu doesn't close after clicking on a meun link (on mobile only).
I'm having issues writing jest tests for components which include SVG's or images, as jest complains about not being able to render the component correctly. Need to read up on that a little more.
Also, I need to read up on writing meaningful cypress tests. I can't think of anything besides visiting every page and toggling the menu open and close and play around with the tab / switch on the pricing page.
Lastly, I'd like to make some improvments concerning a11y (adding aria-labels, keyboard controls etc.) and performance (lazy loading images would probably be a huge benefit since the page is packed with images).
