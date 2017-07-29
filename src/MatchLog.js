import React from 'react';
import MatchForm from './MatchForm';

const MatchLog = (props) => (
  <table className="table table-striped">
    <thead>
      <tr className="top-row">
        <th>Deck 1</th>
        <th>Deck 2</th>
        <th>Winner</th>
        <th>Played First</th>
        <th>Deck 1 pilot</th>
        <th>Deck 2 pilot</th>
      </tr>
    </thead>
    <tbody>
      {
        props.createNewMatch ?
          <MatchForm
            onChange={props.onChange}
            submitMatch={props.submitMatch}
            decks={props.decks}
            newMatch={props.newMatch}
          />
          :
          <tr></tr>
      }
      {props.matches.map(match =>
        <tr key={match.id}>
          <td>{match.deck1}</td>
          <td>{match.deck2}</td>
          <td>{match.winner}</td>
          <td>{match.playedFirst}</td>
          <td>{match.deck1Pilot}</td>
          <td>{match.deck2Pilot}</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default MatchLog;
