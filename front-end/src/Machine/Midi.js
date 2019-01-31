import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Pad from './Pad';

export default class Midi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sounds: [
        { name: 'Sound 1', file: 'sound1.mp3', className: 'inactive' },
        { name: 'Sound 2', file: 'sound2.mp3', className: 'inactive' },
        { name: 'Sound 3', file: 'sound3.mp3', className: 'inactive' },
        { name: 'Sound 4', file: 'sound4.mp3', className: 'inactive' },
        { name: 'Sound 5', file: 'sound5.mp3', className: 'inactive' },
        { name: 'Sound 6', file: 'sound6.mp3', className: 'inactive' },
        { name: 'Sound 7', file: 'sound7.mp3', className: 'inactive' },
        { name: 'Sound 8', file: 'sound8.mp3', className: 'inactive' }
      ]
    };
  }

  handlePadIn(item) {
    const index = this.state.sounds.indexOf(item);
    let newSound = item;
    newSound.className = 'padActive';
    let newArray = this.state.sounds.splice(index, 0, newSound);

    console.log(newArray);
    console.log(this.state.sounds);
  }

  handlePadOut(item) {
    item.className = 'inactive';
    console.log(`${item.name} UP`);
  }

  render() {
    return (
      <div className="midi">
        {this.state.sounds.map((sound, index) => {
          return (
            <Pad
              key={index}
              name={sound.name}
              file={sound.file}
              padClass={sound.className}
              handlePadIn={() => {
                this.handlePadIn(sound);
              }}
              handlePadOut={() => {
                this.handlePadOut(sound);
              }}
            />
          );
        })}
      </div>
    );
  }
}
