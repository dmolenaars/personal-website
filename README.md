
![Logo](./media/github-repo-logo.png)

[![Project License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dmolenaars/personal-website/LICENSE.md)

# personal-website

An easily customizable personal website, created using pure ReactJS and a sprinkle of SCSS. 

Feel free to use it as is, or as an inspiration for your own designs!

[Visit the website](https://wwww.danielmolenaars.com)

## Getting started
Install the necessary dependencies using `npm`:

`npm install`

To run the app locally on port 3000, run the following command:

`npm start`

## Architecture
The website consists of the two following main components:

- `Hero`
- `Content`

The `Hero` contains the main header, a typed subheader, as well as a coding animation that can be enabled.

The `Content` component contains all the useful information about me, including an introduction, the organizations I've worked for, and my contact details. 

A parallax effect creates a fixed view of the main page and allows the Content container to slide over the Hero when scrolling down, creating the illusion of a single page website.

## Customization
You can customize the following components:

*Hero*

The `Hero` component contains two props: `mainHeader` and `subHeader`. The main header is the first block of text displayed after the page has loaded. The subheader is typed on the first rendering of the webpage.

*Content*

The main content can be found inside of the `Body` component, which in turn is stored in the `Content` container.

In the `Body` component, two important variables can be found: `introduction`, which contains some personal information, and `data`, which is a list of headers and bulletpoints that contain links to other websites. This component can be used to generate a list of your contact details, for example.