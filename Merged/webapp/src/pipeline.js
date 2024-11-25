import React from 'react';
export class Pipeline extends React.Component {
  state = { hidden: true }
  toggle = () => {
    this.setState(prevState => ({ hidden: !prevState.hidden }))
  };

render() {
  if (this.props.prediction)
    return (
      <div className="pipeline">
        <p className="show" onClick={this.toggle}>
          {this.state.hidden ? 'Show' : 'Hide'} Text Processing Summary <span role="img" aria-label="Show pipeline">🡇</span></p>

        <div className="output" hidden={this.state.hidden}>
          <div>
            <h2>Original News Article</h2>
            {this.props.original}
          </div>
          <div>
            <h2>Preprocessed Text</h2>
            {this.props.preprocessed}
          </div>
          <div>
            <h2>Pos-Tagged Text</h2>
            {this.props.pos_tagged}
          </div>
        </div>
      </div>
    )

  return null
}
}