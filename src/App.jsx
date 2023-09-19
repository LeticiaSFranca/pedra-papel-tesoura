import { Fragment, useState } from 'react'

import './App.css'

import Papel from './assets/moves/papel.png'
import Pedra from './assets/moves/pedra.png'
import Tesoura from './assets/moves/tesoura.png'

function App() {
  const [winner, setWinner] = useState('')
  const [possibleMoves, setPossibleMoves] = useState([
    {
      type: 'papel',
      label: 'Papel',
      wins: 'pedra',
      loses: 'tesoura'
    },
    {
      type: 'pedra',
      label: 'Pedra',
      wins: 'tesoura',
      loses: 'papel'
    },
    {
      type: 'tesoura',
      label: 'Tesoura',
      wins: 'papel',
      loses: 'pedra'
    }
  ])

  const makeMove = playerMove => {
    const minimumMachineMoveNumber = 1
    const maximumMachineMoveNumber = 3

    const randomMachineMove =
      Math.floor(
        Math.random() *
          (maximumMachineMoveNumber - minimumMachineMoveNumber + 1)
      ) + minimumMachineMoveNumber

    let machineMoveType = ''

    switch (randomMachineMove) {
      case 1:
        machineMoveType = 'papel'
        break
      case 2:
        machineMoveType = 'pedra'
        break
      case 3:
        machineMoveType = 'tesoura'
        break
    }

    if (machineMoveType === playerMove) {
      setWinner('Empate')
      return
    }

    const playerMoveValidation = possibleMoves.find(
      currentMove => currentMove.type === playerMove
    )

    const isPlayerTheWinner = playerMoveValidation.wins === machineMoveType

    if (isPlayerTheWinner) {
      setWinner('Jogador Ganhou')
      return
    }

    setWinner('Computador Ganhou')
  }

  return (
    <Fragment>
      <div className="tudo">
        {winner && <h1>{winner}</h1>}

        <h3>Letícia França | 3D1</h3>

        <button onClick={() => makeMove('papel')}>
          <img src={Papel} />
        </button>

        <button onClick={() => makeMove('pedra')}>
          <img src={Pedra} />
        </button>

        <button onClick={() => makeMove('tesoura')}>
          <img src={Tesoura} />
        </button>
      </div>
    </Fragment>
  )
}

export default App
