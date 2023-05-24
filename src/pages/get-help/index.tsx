import Accordion from "@Component/Accordion"
import DATA from 'data/ong'

const GetHelp = () => {
  //data for tests
  const data = DATA.getHelp.accordions

  return (
    <div className="container my-5">
      {data.map((item, index) => (
        <Accordion key={index} data={item} />
      ))}
    </div>
  )
}

export default GetHelp
