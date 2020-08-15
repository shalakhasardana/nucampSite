import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';}

function Home(props) {
  return (
    <div className="container">
      <h4>Home</h4>
    </div>
  );
}

function Home(props) {
  return (
      <div className="container">
          <div className="row">
              <div className="col-md m-1">
                  <RenderCard item={props.campsite} />
              </div>
              <div className="col-md m-1">
                  <RenderCard item={props.promotion} />
              </div>
              <div className="col-md m-1">
                  <RenderCard item={props.partner} />
              </div>
          </div>
      </div>
  );
}

export default Home;
