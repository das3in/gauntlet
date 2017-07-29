import React from 'react';

const SelectInput = (props) => (
  <select
    className="form-control"
    name={props.name}
    onChange={props.onChange}>
    <option hidden>{props.hiddenValue}</option>
    {props.options.map(option =>
      <option value={option.name} key={option.name}>{option.name}</option>
    )}
  </select>
)

export default SelectInput;
