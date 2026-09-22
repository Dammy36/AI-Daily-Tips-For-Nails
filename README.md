# Daily Tips for Nails 💅

A small web app that gives you instant beauty and nail care tips. Type in a topic, like "brittle nails" or "cuticle care", and the app generates three short tips using AI.

**Live site:** https://damselnails-ai.netlify.app/

## Features

- Type any beauty or nail topic and get three tips back
- Shows a "Generating..." message while the tips load
- Answers appear with a typewriter animation
- Tips are signed "Damsel Nails AI" to match the studio brand

## Built with

- HTML, CSS and JavaScript (no framework)
- [SheCodes AI API](https://www.shecodes.io/) for generating the tips
- [Axios](https://axios-http.com/) for sending the API request
- [Typewriter Effect](https://www.npmjs.com/package/typewriter-effect) for the typing animation
- Deployed on Netlify

## How it works

1. The user types a topic into the form and presses submit.
2. JavaScript builds a prompt from that topic, plus instructions that ask for three short, accurate tips.
3. Axios sends the prompt to the SheCodes AI API.
4. The answer is shown on the page with a typewriter effect.

## What I learned

The hardest part was writing the prompt. Early versions returned long or off-topic answers. I kept rewriting the instructions until the app returned short, focused tips in a consistent format.

## Run it locally

1. Download or clone this repo.
2. Open `index.html` in your browser.

You don't need to install anything.
