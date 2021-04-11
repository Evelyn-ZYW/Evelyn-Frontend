import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

//createArray is a helper function to create an array of stars that will be displayed on the page; length is number of stars in the array
const createArray = (length) => [...Array(length)]
//the Star Component
const Star = ({ selected = false, onSelect }) => {
  return (
    <FaStar
      color={selected ? "red" : "grey"}
      onClick={onSelect}
    />
  )
}
//the Rating Component
//the default property for totalStars is 5, if no value is passed
const Rating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return createArray(totalStars).map((o, i) => <Star
    key={i}
    selected={selectedStars > i}
    onSelect={() => setSelectedStars(i + 1)}
  />)
}
export default Rating;