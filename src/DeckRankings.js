import React from 'react';

const DeckRankings = (props) => {
  let decks = props.decks.sort((a, b) => {
    if (a.wins / (a.wins + a.losses) < b.wins / (b.wins + b.losses)) { return 1; }
    if (a.wins / (a.wins + a.losses) > b.wins / (b.wins + b.losses)) { return -1; }
    return 0;
  })
  return (
  <div className="list-group">
    {decks.map(deck =>
    <div className="list-group-item" key={deck.name}>
      {deck.name} - {Math.round((deck.wins / deck.gamesPlayed * 100), -2) || 0}%
    </div>
    )}
  </div>
  )
}

export default DeckRankings;
