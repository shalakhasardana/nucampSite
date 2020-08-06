import React, { Component } from 'react'

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {    
        };
    }

    render() {
        const directory = this.props.campsites.map(campsite =>{
            return (
                <div className="col">
                    <img src={campsite.image} alt={campsite.name} />
                    <h2>{campsite.name}</h2>
                    <p>{campsite.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                {/* Use props and state */}
                {/* <ExampleParentComponent/> */}
            </div>
        );
    }
}

{/*
class ExampleParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state ={
            number: 333
        }
    }
    render() {
        return <ExampleChildComponent number={this.state.number} greeting="Hello World" />;
    }
}

class ExampleChildComponent extends Component{
    render(){
    return <div>{this.props.number} {this.props.greeting}</div>
    }
}

*/}

export default Directory;