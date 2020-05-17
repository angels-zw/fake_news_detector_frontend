import React, { Component } from "react";
import styled from "styled-components";
import ResultList from "./ResultList";

export default function ResultColumns({ value }) {
  const { results } = value;

  return (
    <ModalContainer>
      <div id="modal" className="container">
        <div className="row text-center">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">url</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">name</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">headline</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">stance</p>
          </div>
        </div>
        <ResultList value={value} />
      </div>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: white;
    width: 70%;
  }
`;
