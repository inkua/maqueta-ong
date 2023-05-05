import Accordion from "@Component/Accordion"

const GetHelp = () => {
  //data for tests
  const data = [
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

  return (
    <div className="container my-5">
      <Accordion data={data[0]} />
      <Accordion data={data[1]} />
    </div>
  )
}

export default GetHelp
