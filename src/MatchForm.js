import React from 'react';
import SelectInput from './SelectInput';

const MatchForm = (props) => (
  <tr>
    <td>
      <SelectInput
        name="deck1"
        options={props.decks}
        onChange={props.onChange}
        hiddenValue={"Deck"}
      />
    </td>
    <td>
      <SelectInput
        options={props.decks}
        name="deck2"
        onChange={props.onChange}
        hiddenValue={"Deck"}
      />
    </td>
    <td>
      <SelectInput
        options={props.decks}
        name="winner"
        onChange={props.onChange}
        hiddenValue={"Winner"}
      />
    </td>
    <td>
      <SelectInput
        options={props.decks}
        name="playedFirst"
        onChange={props.onChange}
        hiddenValue={"Played first"}
      />
    </td>
    <td>
      <input type="text" className="form-control" name="deck1Pilot" onChange={props.onChange} />
    </td>
    <td>
      <input type="text" className="form-control" name="deck2Pilot" onChange={props.onChange} />
    </td>
    <td>
      <button
        type="submit"
        className="btn btn-default"
        onClick={() => props.submitMatch()} >
        Submit
      </button>
    </td>
  </tr>
)

export default MatchForm;
