import { createContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import DATA from 'data/ong.json';

const DataContext = createContext(DATA);

const DataProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [data, setData] = useState(DATA);
  const [languaje, setLanguaje] = useState("English");

  //this effect will be to update the data making a request to the API
  useEffect(() => {
    setData(DATA);
  }, [languaje])

  return (
    <DataContext.Provider value={data}>
      { children}
    </DataContext.Provider>
  )
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { DataContext };
export default DataProvider;
