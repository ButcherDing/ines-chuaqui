
# Ines Chuaqui - E-commerce/portfolio app w/ React Redux Toolkit

preview: https://ines-chuaqui-preview.netlify.app/

## Introduction
Freelance work for a local Vancouver artist. Pending a small number of additional assets (artwork, copy) from the artist, but all features are fully-functional.

An e-commerce/portfolio app to:
- Present the artist's work dynamically
- Facilitate sale of artist's prints online.

Developer learning goals:
- Consolidate/expand my knowledge on Typescript and React, learn Redux Toolkit, and familiarize myself with testing tools (Jest, React Testing Library)

## Main Features

- Gallery w/ lightbox ([Lightbox.js](https://www.getlightboxjs.com/docs/))
- Auth
- Shop
- Cart
- Contact Form
- Checkout

## Tech / Libraries

- Typescript, Javascript, HTML, CSS
- React Redux Toolkit (v1.8.6)
- Styled Components (v5.3.6)
- Netlify (v1.42.1) incl. serverless functions
- Firebase (Auth, Firestore) (v9.12.0)
- Stripe (v10.16.0)
- Jest (v27.5.1)
- React Testing Library (v13.4.0)
- Lightbox.js-react (v0.1.8)

## Sources

This project builds on a much smaller course project: [complete-react-developer](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/). The code from that project has been greatly expanded/rewritten. Some highlights:

- Rewritten store/reducers/slices using RTK/Thunks rather than Redux-saga, making the app more modern, readable, with less boilerplate.
- User dashboard with order history, ability to change user settings and delete the account. 
- Modals and expanded state logic for displaying details and selecting product sizes, quantity (rather than simple add to cart)
- Added gallery route with lightbox feature using [lightboxjs](https://github.com/silvia-odwyer/lightbox.js).
- Contact route and submittable form
- Landing page
- CSS styles (Styled Components) mostly from scratch, implementing an explicit design system and global styles (see src/general.styles.tsx)
- Reduced janky UX
- Improved error handling
- Responsive down to 360px
- Testing (Jest, React Testing Library) (in progress)

## Status

App is fully functional but in preview as the artist sources a print supplier. You can visit and try it out at: [ines-chuaqui-preview.netlify.app](https://ines-chuaqui-preview.netlify.app/)

The project has undergone extensive manual testing, as agreed with client. Though unit testing was never within the project's budget, I am writing these (with Jest, React Testing Library) on a pro-bono basis, as a personal project.

## Additional Info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.
