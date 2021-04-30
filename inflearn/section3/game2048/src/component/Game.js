import React, {useState} from 'react';
import times from 'lodash/times';
import { getInitialTileList } from '../util/tile';
import { MAX_POS } from '../constant';


export default function Game() {
  const [tileList, setTileList] = useState([getInitialTileList])
  return (
    <div className="game-container">
      <div className="grid-container">
        {times(MAX_POS, index => {
          <div key={index} className="grid-row"></div>
          {times(MAX_POS, index2 => {
            <div key={index2} className="grid-cell"></div>
          })}
        })}
        </div>
      <div className="tile-container">
        {tileList.map(item => (
          <div key={item.id} className={`tile tile-${item.value} tile-position-${item.x}-${item.y}`}>
            <div className="tile-inner">2</div>
          </div>
        ))}
        <div className="tile tile-2 tile-position-4-2 tile-new">
          <div className="tile-inner">2</div>
        </div>
      </div>
    </div>
  );
}

