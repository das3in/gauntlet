import React, { Component } from 'react';
import MatchupTable from './MatchupTable';
import DeckRankings from './DeckRankings';
import MatchLog from './MatchLog';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      decks: [
        {
          name: "PoeMaz",
          wins: 0,
          losses: 0,
          gamesPlayed: 0,
          id: 1,
          FunKar: {
            wins: 0,
            losses: 0,
            gamesPlayed: 0
          },
          Palpatine: {
            wins: 0,
            losses: 0,
            gamesPlayed: 0
          },
          EmoKids: {
            wins: 0,
            losses: 0,
            gamesPlayed: 0
          }
        },
        {
          name: "FunKar",
          wins: 0,
          losses: 0,
          gamesPlayed: 0,
          id: 2,
          PoeMaz: {
            wins: 0,
            losses: 0,
            gamesPlayed: 0
          },
          Palpatine: {
            wins: 0,
            losses: 0,
            gamesPlayed: 0
          },
          EmoKids: {
            wins: 0,
            losses: 0,
            gamesPlayed: 0
          }
        },
        {
          name: "Palpatine",
          wins: 0,
          losses: 0,
          gamesPlayed: 0,
          id: 3,
          PoeMaz: {
            wins: 0,
            losses: 0,
            gamesPlayed: 0
          },
          FunKar: {
            wins: 0,
            losses: 0,
            gamesPlayed: 0
          },
          EmoKids: {
            wins: 0,
            losses: 0,
            gamesPlayed: 0
          }
        },
        {
          name: "EmoKids",
          wins: 0,
          losses: 0,
          gamesPlayed: 0,
          id: 4,
          PoeMaz: {
            wins: 0,
            losses: 0,
            gamesPlayed: 0
          },
          FunKar: {
            wins: 0,
            losses: 0,
            gamesPlayed: 0
          },
          Palpatine: {
            wins: 0,
            losses: 0,
            gamesPlayed: 0
          }
        },
      ],
      matches: [],
      newMatch: {
        id: 0,
        deck1: {},
        deck2: {},
        winner: {},
        playedFirst: {},
        deck1Pilot: "",
        deck2Pilot: "",
        notes: ""
      },
      createNewMatch: false
    };

    this.toggleMatchForm = this.toggleMatchForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submitMatch = this.submitMatch.bind(this);
  }

  toggleMatchForm() {
    this.setState({ createNewMatch: !this.state.createNewMatch })
  }

  onChange(e) {
    let newMatch = Object.assign({}, this.state.newMatch);
    newMatch[e.target.name] = e.target.value;
    newMatch.id = newMatch.id + 1
    this.setState({ newMatch: newMatch })
  }

  findDeck(findDeck) {
    return this.state.decks.find(deck => deck.name === findDeck);
  }

  submitMatch() {
    let newMatchList = this.state.matches;
    newMatchList.push(this.state.newMatch);

    this.setState({ matches: newMatchList }, () => {
      const deck1 = this.findDeck(this.state.newMatch.deck1);
      const deck2 = this.findDeck(this.state.newMatch.deck2);

      deck1.gamesPlayed ++;
      deck2.gamesPlayed ++;

      console.log(deck1[deck2.name]["wins"])

      if (this.state.newMatch.winner === deck1.name) {
        deck1.wins ++;
        deck1[deck2.name]["wins"] ++;
        deck1[deck2.name]["gamesPlayed"] ++;
        deck2.losses ++;
        deck2[deck1.name]["losses"] ++;
        deck2[deck1.name]["gamesPlayed"] ++;
      } else {
        deck2.wins ++;
        deck1[deck2.name]["losses"] ++;
        deck1[deck2.name]["gamesPlayed"] ++;
        deck1.losses ++;
        deck2[deck1.name]["wins"] ++;
        deck2[deck1.name]["gamesPlayed"] ++;
      }

      const newDecks = this.state.decks.map((deck, index) => {
        if(index !== deck1 || index !== deck2) {
          return deck
        };
        return [deck1, deck2]
      })

      this.setState({ createNewMatch: false, decks: newDecks })
    });
  }

  render() {
    const { decks, matches, newMatch, createNewMatch } = this.state;

    return (
      <div className="container">
        <h1 className="text-center">Gauntlet</h1>
        <div className="row">
          <div className="col-md-8">
            <h3 className="text-center">Matchup Table</h3>
            <MatchupTable decks={decks} />
          </div>
          <div className="col-md-4">
            <h3 className="text-center">Overall Rankings</h3>
            <br />
            <DeckRankings decks={decks} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3>Match Log - <span><button className="btn btn-primary" onClick={this.toggleMatchForm}>New Match</button></span></h3>
            <MatchLog
              createNewMatch={createNewMatch}
              onChange={this.onChange}
              submitMatch={this.submitMatch}
              decks={decks}
              matches={matches}
              newMatch={newMatch}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
