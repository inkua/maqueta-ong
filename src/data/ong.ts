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
}

export default DATA;
