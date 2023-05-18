//aquí se pueden colocar los tipos que necesitemos
type ChildrenProps = {
  children: React.ReactNode
}

// the image property is mandatory, but the rest are not, to be able to do the validations
// in the different views
type CardProps = {
  image: string;
  title?: string;
  description?: string;
  buttonArrow?: boolean; //What this property does is validate if there is a button on the image, which is an arrow.
  buttonMore?: boolean, //this property validates if the "More" button should be enabled
}
