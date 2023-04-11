import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlacesFetch } from "./redux/placesState";
import './App.css';
import { AutoComplete } from 'antd';


function App() {
  const places = useSelector(state => state.places?.places);

  const dispatch = useDispatch();


  const [value, setValue] = useState('');
  const [anotherOptions, setAnotherOptions] = useState([]);


  const onSelect = (data) => {
    setValue(data)
  };

  useEffect(() => {
    let countriesArray = places.map((str, index) => ({ value: str, id: index + 1 }));
    setAnotherOptions(countriesArray)
  }, [places])
  const onSearch = (data) => {
    if (data) {
      dispatch(getPlacesFetch(data))
    }
  };
  const onChange = (data) => {
    setValue(data);

  };


  return (
    <div className="App">
      <div>Search for Places</div>
      <br></br>
      <AutoComplete
        value={value}
        options={anotherOptions}
        style={{ width: 200 }}
        onSelect={onSelect}
        filterOption={true}
        onSearch={(value) => onSearch(value)}
        onChange={onChange}
        placeholder="Search places"
      />
      <br></br>
      <div>Country Selected: {value}</div>


    </div>
  );
}

export default App;
