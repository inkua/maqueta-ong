import { useContext } from 'react';
import { DataContext } from 'contexts/DataContext';

const useContextData = () => useContext(DataContext);

export default useContextData;
