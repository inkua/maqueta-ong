import Accordion from "@Component/Accordion"
import DATA from 'data/ong'

const GetHelp = () => {
  //data for tests
  const data = DATA.getHelp.accordions

  return (
    <div className="container my-5">
      {data.map((item) => (
        <Accordion key={item.title} data={item} />
      ))}
    </div>
  )
}

export default GetHelp
