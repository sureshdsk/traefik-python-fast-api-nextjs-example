import React from 'react'


export default class HomePage extends React.Component {
	constructor(props) {
    super(props);
    this.state = {app: 'default'};
  }

  componentDidMount() {
  	fetch('/python')
      .then(response => response.json())
      .then(data => {
      	console.log(data)
      	this.setState({ app: data['app'] })
  });


  }

    render() {
        return (
            <div>
                Test {this.state.app}
            </div>
        )
    }
}
