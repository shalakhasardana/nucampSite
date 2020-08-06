import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {    
        };
    }

    render() {
        const directory = this.props.campsites.map(campsite =>{
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
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