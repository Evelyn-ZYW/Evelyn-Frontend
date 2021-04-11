import React, { Component } from 'react';
import Rating from 'comps/Rating';
import Parent from 'comps/parentToChild';

class Practice extends Component {
  state = {
    title: 'placeholder title'
  }
  changeTheWorld = (newTitle) => {
    this.setState({ title: newTitle });
  }

  render() {
    return (
      <div>
        <Parent
          changeTheWorldEvent={this.changeTheWorld.bind(this, 'new world')}
          keepTheWorldSameEvent={this.changeTheWorld.bind(this, 'same world')}
          title={this.state.title} />
      </div>
    );
  }
}
/*
const Practice = () => {
return (
  <Rating totalStars={10} />
)
}
*/

export default Practice;