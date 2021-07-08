<!-- Please update value in the {}  -->

<h1 align="center">Imagen Uploader Challenge 1 for fullstack</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://{client-nixu.onrender.com}">
      Demo
    </a>
    <span> | </span>
    <a href="https://{github.com/SprintWithCarlos/image-uploader-devchallenges}">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot1](https://github.com/SprintWithCarlos/image-uploader-devchallenges/blob/main/1.png)
![screenshot2](https://github.com/SprintWithCarlos/image-uploader-devchallenges/blob/main/2.png)
![screenshot3](https://github.com/SprintWithCarlos/image-uploader-devchallenges/blob/main/3.png)

I really enjoyed this challenge, I decided to replicate the mockups and instead focus all my energy in programming. I used Render for deployment, the experience has been great even though I still have to figure out how to do a monorepo deployment. I also used Filebase for storing the images, I'm really happy with the result.

Thanks Thu this is a great idea, I'm motivated to keep doing these challenges and sharing my experience. I finished almost 24 hours after starting, all the code done by myself, only React. State management done using hooks (useContext, useReduce, useState).
It seems easy but is not :-D

I also used sass instead of css to save time. I check most typical breakpoints and it worked, although if you find something wrong please contact me or submit a PR with your solution.

The last button dispatches a reset action to go back to first screen. I consider this a better design solution that refreshing the browser. I have included a "Text" component done by myself that listens to pointer up and gives the user the option to change the selected text to clipboard. It could be easily adapted to copy the link when clicking the button.
For icons I use fontawesome instead of material icons. It can be easily changed.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [Node](https://nodejs.org/)
- [Filebase](https://filebase.com/)
- [Render](https://render.com/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx) was to build an application to complete the given user stories.

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/SprintWithCarlos/image-uploader-devchallenges

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example -->

Regarding image uploading, it's very important to set the content type if you are using multer. Otherwise the type is set by default to application/octet-stream.
More information [here](https://www.npmjs.com/package/multer-s3)

## Contact

- Website [Sprint With Carlos](https://{sprintwithcarlos.github.io/})
- GitHub [@sprintwithcarlos](https://{github.com/sprintwithcarlos})
- Twitter [@sprintwithcarl1](https://{twitter.com/sprintwithcarl1})
