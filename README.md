[![Deployed](https://github.com/inkua/maqueta-ong/actions/workflows/nextjs.yml/badge.svg?branch=main)](https://github.com/inkua/maqueta-ong/actions/workflows/nextjs.yml)

# ONGs-Template

▶️This project is a web template developed with Next.js and TypeScript, specifically designed for non-governmental organizations. It provides a foundational structure for future web projects  and includes a JSON file named `ong.json` for adding specific ONGs information.

[MAIN] is deployed [here](https://inkua.github.io/maqueta-ong/)

## Design link at Figma

Link: https://www.figma.com/file/idsSDiMUJJJ7IwkkUZWtk5/Web-inkua?node-id=0-1

## How to start  

Clone the repository
``` console
$ git clone https://github.com/inkua/maqueta-ong.git
```
Install the dependencies
``` console
$ npm install
```
Start the server
``` console
$ npm run dev
```
## Customizing  Theme and Colors 🟦 🟨 🟩 🟥

You can customize the theme and colors for your ONG's website by editing the `styles` object in the `ong.json` file. Here's an example of the `styles` section in `ong.json`:

```json
"styles": {
  "colors": {
    "primary": "#D9D9D9",
    "card": "#5D5F60",
    "button": "#2A2A2A",
    "buttonLang": "#474849",
    "form": {
      "container": "#E9E7E7",
      "input": "#CBC9C9"
    },
    "fontColorPrimary": "#000000",
    "fontColorSecondary": "#FFFFFF"
  }
}
```
You can modify the color codes to match your ONG's branding  and design preferences.

## ONG Information Structure✅

The `ong.json` file contains vital information for all pages, including Home, About Us, News, Volunteer, Get Help, and DONATE. This includes details such as the organization's name, description, contact information, and more.

Make sure to fill out ✏️ this file with the relevant details of your organization for each page. You can customize the content and expand this project to meet the specific needs of your ONG. Good luck with your web project!

```
my-ong-website/
│
├── src/
|   |__ |__...
│   │
│   ├── data/
│   │   ├── ong.json ◀️ Here your information ONG
│   │
│   ├── pages/
│   │   ├── about-us
│   │   ├── contact-us
│   │   ├── ...
│   │
├── .gitignore
├── package.json
├── README.md
├── ...
```
