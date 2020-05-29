import React, { Component } from "react";
import { results } from "../data";
import axios from "axios";

const ResultsContext = React.createContext();

class ResultsProvider extends Component {
  state = {
    results: [],
  };

  verifyNews = () => {
    this.setResults();
  };

  postData = (query) => {
    const user = {
      name: query,
    };
    axios.post(`localhost:`, { user }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
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
          postData: this.postData,
        }}
      >
        {this.props.children}
      </ResultsContext.Provider>
    );
  }
}

const ResultsConsumer = ResultsContext.Consumer;

export { ResultsProvider, ResultsConsumer };
