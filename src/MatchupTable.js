import React from 'react';

const MatchupTable = (props) => {
  const calcPercent = (deck, decks, index, increment) => {
    return Math.round(deck[decks[index - (index - increment)].name]["wins"] / deck[decks[index - (index - increment)].name]["gamesPlayed"] * 100, -2) || 0
  }

  return (
  <table className="table table-default">
    <thead>
      <tr className="top-row">
        <th></th>
        {props.decks.map(deck =>
          <th key={deck.name}>{deck.name}</th>
        )}
      </tr>
    </thead>
    <tbody>
      {props.decks.map((deck, index) =>
        <tr key={deck.name}>
          <th>{deck.name}</th>
            {
              index === 0 ?
              <td style={index === 0 ? {backgroundColor: "yellow"} : {}}>50%</td>
                :
              <td style={calcPercent(deck, props.decks, index, 0) >= 50 ? {backgroundColor: "#00FF00"} : {backgroundColor: "red"}}>
                {calcPercent(deck, props.decks, index, 0)}%
              </td>
            }
            {
              index === 1 ?
              <td style={index === 1 ? {backgroundColor: "yellow"} : {}}>50%</td>
                :
              <td style={calcPercent(deck, props.decks, index, 1) >= 50 ? {backgroundColor: "#00FF00"} : {backgroundColor: "red"}}>
                {calcPercent(deck, props.decks, index, 1)}%
              </td>
            }
            {
              index === 2 ?
              <td style={index === 2 ? {backgroundColor: "yellow"} : {}}>50%</td>
                :
              <td style={calcPercent(deck, props.decks, index, 2) >= 50 ? {backgroundColor: "#00FF00"} : {backgroundColor: "red"}}>
                {calcPercent(deck, props.decks, index, 2)}%
              </td>
            }
            {
              index === 3 ?
              <td style={index === 3 ? {backgroundColor: "yellow"} : {}}>50%</td>
                :
              <td style={calcPercent(deck, props.decks, index, 3) >= 50 ? {backgroundColor: "#00FF00"} : {backgroundColor: "red"}}>
                {calcPercent(deck, props.decks, index, 3)}%
              </td>
            }
        </tr>
      )}
    </tbody>
  </table>
  )
}

export default MatchupTable;
