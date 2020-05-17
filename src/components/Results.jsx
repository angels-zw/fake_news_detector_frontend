import React, { Component } from "react";
import ResultColumns from "./ResultColumns";

import { ResultsConsumer } from "../components/context";
class Results extends Component {
  render() {
    return (
      <section>
        <ResultsConsumer>
          {(value) => {
            const { results } = value;
            if (results.length > 0) {
              return (
                <React.Fragment>
                  
                  <ResultColumns value={value} />
                </React.Fragment>
              );
            } else {
              return null;
            }
          }}
        </ResultsConsumer>
      </section>
    );
  }
}

export default Results;
