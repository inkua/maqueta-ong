import Accordion from "@Component/Accordion"
import DATA from 'data/ong'

const GetHelp = () => {
  //data for tests
  const data = DATA.getHelp.accordions

  return (
    <div className="container my-5">
      <Accordion data={data[0]} />
      <Accordion data={data[1]} />
    </div>
  )
}

export default GetHelp
