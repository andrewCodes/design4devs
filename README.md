# design4devs - website

As part of my front-end development training plan I watched a video tutorial by [Jonas Schmedtmann](https://twitter.com/jonasschmedtman) called [Web Design for Web Developers](https://www.udemy.com/course/web-design-secrets/). Rather than simply taking notes I decided to use my notes as the content for a website. This is that website.

__Note__: this is an incomplete project and still under active development.

## Table of Contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Branching](#branching)
* [Website Content](#website-content)
* [Future Development](#future-development)
* [Further Information](#further-information)

## General info
This website is a collection of simple tips and guidelines to help web developers improve their design skills.
	
## Technologies
Project is created with:
* HTML
* Sass (SCSS)
* CSS Grid
* BEM (Block Element Modifier methodology)
	
## Setup
To run this project locally, use npm:

```
$ cd ../design4devs
$ npm run start
```

Please check `package.json` for useful scripts.

## Branching
I only have one master branch, "__main__". __Main__ only ever contains deployable code. As development work takes place (for example adding a new section) this always happens on a separate branch taken from the most recent commit point on __main__. When work on a branch is complete and tested, the commits on that branch are merged back on to __main__ and the development branch is deleted.

Only complete and tested work is merged into __main__.

Each development branch will have a precise and limited scope (a new section for example).

## Website Content
* Newsletter sign up form (currently not hooked up)
* Tips & Guidelines
  * Typography
  * Colours
  * Images
  * Icons
  * Spacing
  * Inspiration
  * UX
  * Conversion

## Future Development

As noted, this project is still under construction. Once completed the following changes will have been implemented:
* All sections of Tips & Guidelines included
* Navigation between sections
* Newsletter sign up form will confirm successful submission of form, add the user's details to a database and send the user a welcome email

## Further Information

### Author
Me - Andrew Long
[Me on Twitter](https://twitter.com/_TooAndrew)
[Me on LinkedIn](https://linkedin.com/andrewrklong)

### Inspiration
Jonas Schmedtmann's "Web Design for Wed Developers" short video course on Udemy
[Course link](https://www.udemy.com/course/web-design-secrets/)
[Jonas on Twitter](https://twitter.com/jonasschmedtman)
[Website](https://codingheroes.io)

### Using this project
You can use this website for both personal and commercial use, but please don't claim it as your own design. If you do use the design please include a credit to me in the website footer when doing so and send me a link to your website so I can show it to potential employers / clients! The credit should simply read: "Design by Andrew Long". You can send me the link at andrewlongswork@gmail.com. Thank you!
