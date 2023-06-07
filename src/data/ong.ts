import card from './cards.json';
import ong_logo from "assets/ong-logo.png";
import img_index from 'assets/img-index.png';
import img_volunteer_hero from 'assets/img-volunteers.png';
import img_volunteer_form from 'assets/img-volunteerForm-2.png';

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
      primary: '#D9D9D9', //color for navbar and footer
      card: '#5D5F60', //color for cards and accordion
      button: '#2A2A2A', //color for buttons and borders
      buttonLang: '#474849', //color for button to change languaje
      form: {
        container: '#E9E7E7', //color for form container
        input: '#CBC9C9', //color for inputs
      },
      fontColorPrimary: '#000000',
      fontColorSecondary: '#FFFFFF',
    }
  },
  pages: {
    indexPage: {
      dataHero: {
        title: "ONG'S NAME",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
        linkContent: 'Donate now',
        linkAction: '#',
        fillLinkButton: true,
        urlImage: img_index,
      },
      dataSlide: [
        {
          id: 1,
          image: '',
          title: 'Titulo 1',
          widthImage: 327,
        },
        {
          id: 2,
          image: '',
          title: 'Titulo 2',
          widthImage: 327,
        },
        {
          id: 3,
          image: '',
          title: 'Titulo 3',
          widthImage: 327,
        },
      ]
    },
    volunteerForm: {
      imageForm: img_volunteer_form,
      dataHero: {
        title: "Want to join us",
        description: 'BECOME A VOLUNTEER Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
        linkContent: 'Complete the form',
        linkAction: '#volunteer_form',
        urlImage: img_volunteer_hero,
      },
    }
  },
  getHelp: {
    accordions: [
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
  },
  about_us: card["about-us"],
  requeriments: card.volunteer.requirements,
  experiences: card.volunteer.experiences
}

export default DATA;
