import ong_logo from "assets/ong-logo.png"

const DATA = {
  name: "ONG'S NAME",
  /**
    * #TODO
    * description will likely to be in a `.txt` file or smth like that
    * and then parsed + saved into this string
    * we can also use yml or json to easily import the values
  */
  description: "ONG'S DESCRIPTION",
  email: "ONG'S EMAIL",
  phone: "ONG'S PHONE",
  address: "ONG'S ADDRESS",
  social: {
    facebook: "ONG'S FACEBOOK",
    instagram: "ONG'S INSTAGRAM",
  },
  logo: ong_logo,
  styles: {
    colors: {
      primary: '#D9D9D9', //color for navbar, footer, inputs,
      card: '#5D5F60', //color for cards and accordion
      button: '#2A2A2A', //color for buttons and borders
      buttonLang: '#474849', //color for button to change languaje
      fontColorPrimary: '#000000',
      fontColorSecondary: '#FFFFFF',
    }
  },
  getHelp : {
    accordions : [
      {
        title: 'ONG #1', //title that the accordion will receive
        description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimd minim“', //description that the accordion will receive
        isOpen: true, //an optional parameter that sets the accordion open or close, depends on value
      },
      {
        title: 'ONG #2',
        description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimd minim“'
      }
    ]
  }
}

export default DATA;
