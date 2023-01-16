
# Ines Chuaqui - E-commerce/portfolio app w/ React Redux Toolkit

(ines-chuaqui-preview.netlify.app)

## Introduction

An e-commerce/artist portfolio app created to:
- Present the artist's work and enable sale of prints online
- Consolidate/expand my knowledge on Typescript and React, and learn Redux Toolkit

## Main Features

- Gallery w/ lightbox
- Login/User Dashboard
- Shop
- Cart
- Contact Form
- Checkout

## Technologies

- Typescript, Javascript, HTML, CSS
- React Redux Toolkit (v1.8.6)
- Styled Components (v5.3.6)
- Netlify (v1.42.1)
- Firebase (Auth, Firestore) (v9.12.0)
- Stripe (v10.16.0)
- Jest (v27.5.1)
- React Testing Library (v13.4.0)

## Sources

This project builds on the following course I completed: [complete-react-developer](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/). The code from my initial project on that course has been greatly expanded/rewritten. Some highlights:

- Rewritten store/reducers/slices using RTK/Thunks rather than Redux-saga, making the app more modern, readable, with less boilerplate.
- User dashboard with order history, ability to change user settings and delete the account. 
- Modal and expanded state logic for selecting product sizes, quantity (rather than simple add to cart)
- Added gallery route with lightbox feature using [lightboxjs](https://github.com/silvia-odwyer/lightbox.js).
- Contact route and submittable form
- Landing page
- CSS styles (Styled Components) mostly from scratch, implementing an explicit design system and global styles (see general.styles.tsx)
- Reduced janky UX
- Improved error handling
- Responsive down to 320px
- Testing (Jest, React Testing Library) (in progress)

## Status

App is in preview, pending additional copy/image assets from the artist.
Testing is in progress.
You can visit the site at: [ines-chuaqui-preview.netlify.app](https://ines-chuaqui-preview.netlify.app/)

## Additional Info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.
