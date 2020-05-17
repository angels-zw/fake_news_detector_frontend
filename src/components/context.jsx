import React, { Component } from "react";
import { results } from "../data";
const ResultsContext = React.createContext();

class ResultsProvider extends Component {
  state = {
    results: [],
  };

  verifyNews = () => {
    this.setResults();
  };

  setResults = () => {
    let tempResults = [];
    results.forEach((item) => {
      const singleItem = { ...item };
      tempResults = [...tempResults, singleItem];
    });
    this.setState(() => {
      return { results: tempResults };
    });
  };

  render() {
    return (
      <ResultsContext.Provider
        value={{
          ...this.state,
          verifyNews: this.verifyNews,
        }}
      >
        {this.props.children}
      </ResultsContext.Provider>
    );
  }
}

const ResultsConsumer = ResultsContext.Consumer;

export { ResultsProvider, ResultsConsumer };
