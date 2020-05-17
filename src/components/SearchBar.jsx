import React, { Component } from "react";
import styled from "styled-components";
import { ResultsConsumer } from "../components/context";

class SearchBar extends Component {
  render() {
    return (
      <ResultsConsumer>
        {(value) => {
          const { verifyNews } = value;
          return (
            <SearchBarWrapper>
              <section>
                <div className="s130">
                  <form>
                    <div className="inner-form">
                      <div className="input-field first-wrap">
                        <div className="svg-wrapper">
                          <svg
                            xmlns="public/icon2.png"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                          </svg>
                        </div>
                        <input
                          id="search"
                          type="text"
                          placeholder=" fake news detector"
                        />
                      </div>
                      <div className="input-field second-wrap">
                        <button
                          className="btn-search"
                          type="button"
                          onClick={() => verifyNews()}
                        >
                          SEARCH
                        </button>
                      </div>
                    </div>
                    <span className="info">ex. enter news article</span>
                  </form>
                </div>
              </section>
            </SearchBarWrapper>
          );
        }}
      </ResultsConsumer>
    );
  }
}

export default SearchBar;

const SearchBarWrapper = styled.div`
  html {
    line-height: 1.15;
    /* 1 */
    -ms-text-size-adjust: 100%;
    /* 2 */
    -webkit-text-size-adjust: 100%;
    /* 2 */
  }

  /* Sections
     ========================================================================== */
  /**
   * Remove the margin in all browsers (opinionated).
   */
  body {
    margin: 0;
  }

  /**
   * Add the correct display in IE 9-.
   */
  article,
  aside,
  footer,
  header,
  nav,
  section {
    display: block;
  }

  /**
   * Correct the font size and margin on  elements within  and
   *  contexts in Chrome, Firefox, and Safari.
   */
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  /* Grouping content
     ========================================================================== */
  /**
   * Add the correct display in IE 9-.
   * 1. Add the correct display in IE.
   */
  figcaption,
  figure,
  main {
    /* 1 */
    display: block;
  }

  /**
   * Add the correct margin in IE 8.
   */
  figure {
    margin: 1em 40px;
  }

  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
  hr {
    box-sizing: content-box;
    /* 1 */
    height: 0;
    /* 1 */
    overflow: visible;
    /* 2 */
  }

  pre {
    font-family: monospace, monospace;
    /* 1 */
    font-size: 1em;
    /* 2 */
  }

  /* Text-level semantics
     ========================================================================== */
  /**
   * 1. Remove the gray background on active links in IE 10.
   * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
   */
  a {
    background-color: transparent;
    /* 1 */
    -webkit-text-decoration-skip: objects;
    /* 2 */
  }

  /**
   * 1. Remove the bottom border in Chrome 57- and Firefox 39-.
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */
  abbr[title] {
    border-bottom: none;
    /* 1 */
    text-decoration: underline;
    /* 2 */
    text-decoration: underline dotted;
    /* 2 */
  }

  b,
  strong {
    font-weight: inherit;
  }

  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    /* 1 */
    font-size: 1em;
    /* 2 */
  }

  /**
   * Add the correct font style in Android 4.3-.
   */
  dfn {
    font-style: italic;
  }

  /**
   * Add the correct background and color in IE 9-.
   */
  mark {
    background-color: #ff0;
    color: #000;
  }

  /**
   * Add the correct font size in all browsers.
   */
  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
     ========================================================================== */
  /**
   * Add the correct display in IE 9-.
   */
  audio,
  video {
    display: inline-block;
  }

  /**
   * Add the correct display in iOS 4-7.
   */
  audio:not([controls]) {
    display: none;
    height: 0;
  }

  /**
   * Remove the border on images inside links in IE 10-.
   */
  img {
    border-style: none;
  }

  /**
   * Hide the overflow in IE.
   */
  svg:not(:root) {
    overflow: hidden;
  }

  /* Forms
     ========================================================================== */
  /**
   * 1. Change the font styles in all browsers (opinionated).
   * 2. Remove the margin in Firefox and Safari.
   */
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: sans-serif;
    /* 1 */
    font-size: 100%;
    /* 1 */
    line-height: 1.15;
    /* 1 */
    margin: 0;
    /* 2 */
  }

  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */
  button,
  input {
    /* 1 */
    overflow: visible;
  }

  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */
  button,
  select {
    /* 1 */
    text-transform: none;
  }

  button,
  html [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
    /* 2 */
  }

  /**
   * Remove the inner border and padding in Firefox.
   */
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
   * Restore the focus styles unset by the previous rule.
   */
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
   * Correct the padding in Firefox.
   */
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    /* 1 */
    color: inherit;
    /* 2 */
    display: table;
    /* 1 */
    max-width: 100%;
    /* 1 */
    padding: 0;
    /* 3 */
    white-space: normal;
    /* 1 */
  }

  /**
   * 1. Add the correct display in IE 9-.
   * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */
  progress {
    display: inline-block;
    /* 1 */
    vertical-align: baseline;
    /* 2 */
  }

  /**
   * Remove the default vertical scrollbar in IE.
   */
  textarea {
    overflow: auto;
  }

  /**
   * 1. Add the correct box sizing in IE 10-.
   * 2. Remove the padding in IE 10-.
   */
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    /* 1 */
    padding: 0;
    /* 2 */
  }

  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  [type="search"] {
    -webkit-appearance: textfield;
    /* 1 */
    outline-offset: -2px;
    /* 2 */
  }

  /**
   * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
   */
  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    /* 1 */
    font: inherit;
    /* 2 */
  }

  /* Interactive
     ========================================================================== */
  /*
   * Add the correct display in IE 9-.
   * 1. Add the correct display in Edge, IE, and Firefox.
   */
  details,
  menu {
    display: block;
  }

  /*
   * Add the correct display in all browsers.
   */
  summary {
    display: list-item;
  }

  /* Scripting
     ========================================================================== */
  /**
   * Add the correct display in IE 9-.
   */
  canvas {
    display: inline-block;
  }

  /**
   * Add the correct display in IE.
   */
  template {
    display: none;
  }

  /* Hidden
     ========================================================================== */
  /**
   * Add the correct display in IE 10-.
   */
  [hidden] {
    display: none;
  }

  html {
    height: 100%;
  }

  fieldset {
    margin: 0;
    padding: 0;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    -webkit-padding-before: 0;
    -webkit-padding-start: 0;
    -webkit-padding-end: 0;
    -webkit-padding-after: 0;
    border: 0;
  }

  legend {
    margin: 0;
    padding: 0;
    display: block;
    -webkit-padding-start: 0;
    -webkit-padding-end: 0;
  }

  /*===============================
  =            Choices            =
  ===============================*/
  .choices {
    position: relative;
    margin-bottom: 24px;
    font-size: 16px;
  }

  .choices:focus {
    outline: none;
  }

  .choices:last-child {
    margin-bottom: 0;
  }

  .choices.is-disabled .choices__inner,
  .choices.is-disabled .choices__input {
    background-color: #eaeaea;
    cursor: not-allowed;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .choices.is-disabled .choices__item {
    cursor: not-allowed;
  }

  .choices[data-type*="select-one"] {
    cursor: pointer;
  }

  .choices[data-type*="select-one"] .choices__inner {
    padding-bottom: 7.5px;
  }

  .choices[data-type*="select-one"] .choices__input {
    display: block;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #dddddd;
    background-color: #ffffff;
    margin: 0;
  }

  .choices[data-type*="select-one"] .choices__button {
    background-image: url("../../icons/cross-inverse.svg");
    padding: 0;
    background-size: 8px;
    height: 100%;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -10px;
    margin-right: 25px;
    height: 20px;
    width: 20px;
    border-radius: 10em;
    opacity: 0.5;
  }

  .choices[data-type*="select-one"] .choices__button:hover,
  .choices[data-type*="select-one"] .choices__button:focus {
    opacity: 1;
  }

  .choices[data-type*="select-one"] .choices__button:focus {
    box-shadow: 0px 0px 0px 2px #00bcd4;
  }

  .choices[data-type*="select-one"]:after {
    content: "";
    height: 0;
    width: 0;
    border-style: solid;
    border-color: #333333 transparent transparent transparent;
    border-width: 5px;
    position: absolute;
    right: 11.5px;
    top: 50%;
    margin-top: -2.5px;
    pointer-events: none;
  }

  .choices[data-type*="select-one"].is-open:after {
    border-color: transparent transparent #333333 transparent;
    margin-top: -7.5px;
  }

  .choices[data-type*="select-one"][dir="rtl"]:after {
    left: 11.5px;
    right: auto;
  }

  .choices[data-type*="select-one"][dir="rtl"] .choices__button {
    right: auto;
    left: 0;
    margin-left: 25px;
    margin-right: 0;
  }

  .choices[data-type*="select-multiple"] .choices__inner,
  .choices[data-type*="text"] .choices__inner {
    cursor: text;
  }

  .choices[data-type*="select-multiple"] .choices__button,
  .choices[data-type*="text"] .choices__button {
    position: relative;
    display: inline-block;
    margin-top: 0;
    margin-right: -4px;
    margin-bottom: 0;
    margin-left: 8px;
    padding-left: 16px;
    border-left: 1px solid #008fa1;
    background-image: url("../../icons/cross.svg");
    background-size: 8px;
    width: 8px;
    line-height: 1;
    opacity: 0.75;
  }

  .choices[data-type*="select-multiple"] .choices__button:hover,
  .choices[data-type*="select-multiple"] .choices__button:focus,
  .choices[data-type*="text"] .choices__button:hover,
  .choices[data-type*="text"] .choices__button:focus {
    opacity: 1;
  }

  .choices__inner {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    background-color: #f9f9f9;
    padding: 7.5px 7.5px 3.75px;
    border: 1px solid #dddddd;
    border-radius: 2.5px;
    font-size: 14px;
    min-height: 44px;
    overflow: hidden;
  }

  .is-focused .choices__inner,
  .is-open .choices__inner {
    border-color: #b7b7b7;
  }

  .is-open .choices__inner {
    border-radius: 2.5px 2.5px 0 0;
  }

  .is-flipped.is-open .choices__inner {
    border-radius: 0 0 2.5px 2.5px;
  }

  .choices__list {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  .choices__list--single {
    display: inline-block;
    padding: 4px 16px 4px 4px;
    width: 100%;
  }

  [dir="rtl"] .choices__list--single {
    padding-right: 4px;
    padding-left: 16px;
  }

  .choices__list--single .choices__item {
    width: 100%;
  }

  .choices__list--multiple {
    display: inline;
  }

  .choices__list--multiple .choices__item {
    display: inline-block;
    vertical-align: middle;
    border-radius: 20px;
    padding: 4px 10px;
    font-size: 12px;
    font-weight: 500;
    margin-right: 3.75px;
    margin-bottom: 3.75px;
    background-color: #00bcd4;
    border: 1px solid #00a5bb;
    color: #ffffff;
    word-break: break-all;
  }

  .choices__list--multiple .choices__item[data-deletable] {
    padding-right: 5px;
  }

  [dir="rtl"] .choices__list--multiple .choices__item {
    margin-right: 0;
    margin-left: 3.75px;
  }

  .choices__list--multiple .choices__item.is-highlighted {
    background-color: #00a5bb;
    border: 1px solid #008fa1;
  }

  .is-disabled .choices__list--multiple .choices__item {
    background-color: #aaaaaa;
    border: 1px solid #919191;
  }

  .choices__list--dropdown {
    display: none;
    z-index: 1;
    position: absolute;
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    top: 100%;
    margin-top: -1px;
    border-bottom-left-radius: 2.5px;
    border-bottom-right-radius: 2.5px;
    overflow: hidden;
    word-break: break-all;
  }

  .choices__list--dropdown.is-active {
    display: block;
  }

  .is-open .choices__list--dropdown {
    border-color: #b7b7b7;
  }

  .is-flipped .choices__list--dropdown {
    top: auto;
    bottom: 100%;
    margin-top: 0;
    margin-bottom: -1px;
    border-radius: 0.25rem 0.25rem 0 0;
  }

  .choices__list--dropdown .choices__list {
    position: relative;
    max-height: 300px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    will-change: scroll-position;
  }

  .choices__list--dropdown .choices__item {
    position: relative;
    padding: 10px;
    font-size: 14px;
  }

  [dir="rtl"] .choices__list--dropdown .choices__item {
    text-align: right;
  }

  @media (min-width: 640px) {
    .choices__list--dropdown .choices__item--selectable {
      padding-right: 100px;
    }
    .choices__list--dropdown .choices__item--selectable:after {
      content: attr(data-select-text);
      font-size: 12px;
      opacity: 0;
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
    [dir="rtl"] .choices__list--dropdown .choices__item--selectable {
      text-align: right;
      padding-left: 100px;
      padding-right: 10px;
    }
    [dir="rtl"] .choices__list--dropdown .choices__item--selectable:after {
      right: auto;
      left: 10px;
    }
  }

  .choices__list--dropdown .choices__item--selectable.is-highlighted {
    background-color: #f2f2f2;
  }

  .choices__list--dropdown .choices__item--selectable.is-highlighted:after {
    opacity: 0.5;
  }

  .choices__item {
    cursor: default;
  }

  .choices__item--selectable {
    cursor: pointer;
  }

  .choices__item--disabled {
    cursor: not-allowed;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    opacity: 0.5;
  }

  .choices__heading {
    font-weight: 600;
    font-size: 12px;
    padding: 10px;
    border-bottom: 1px solid #f7f7f7;
    color: gray;
  }

  .choices__button {
    text-indent: -9999px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }

  .choices__button:focus {
    outline: none;
  }

  .choices__input {
    display: inline-block;
    vertical-align: baseline;
    background-color: #f9f9f9;
    font-size: 14px;
    margin-bottom: 5px;
    border: 0;
    border-radius: 0;
    max-width: 100%;
    padding: 4px 0 4px 2px;
  }

  .choices__input:focus {
    outline: 0;
  }

  [dir="rtl"] .choices__input {
    padding-right: 2px;
    padding-left: 0;
  }

  .choices__placeholder {
    opacity: 0.5;
  }

  /*=====  End of Choices  ======*/
  input,
  button {
    font-family: "Poppins", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  .s130 {
    min-height: 100vh;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    background: url("../images/Searchs_130.png");
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 15px;
  }

  .s130 form {
    width: 100%;
    max-width: 790px;
    padding-top: 24vh;
  }

  .s130 form .inner-form {
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
    border-radius: 34px;
    overflow: hidden;
    margin-bottom: 30px;
  }

  .s130 form .inner-form .input-field {
    height: 68px;
  }

  .s130 form .inner-form .input-field input {
    height: 100%;
    background: transparent;
    border: 0;
    display: block;
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #000;
  }

  .s130 form .inner-form .input-field input.placeholder {
    color: #222;
    font-size: 16px;
  }

  .s130 form .inner-form .input-field input:-moz-placeholder {
    color: #222;
    font-size: 16px;
  }

  .s130 form .inner-form .input-field input::-webkit-input-placeholder {
    color: #222;
    font-size: 16px;
  }

  .s130 form .inner-form .input-field input:hover,
  .s130 form .inner-form .input-field input:focus {
    box-shadow: none;
    outline: 0;
  }

  .s130 form .inner-form .input-field.first-wrap {
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    background: #d9f1e3;
  }

  .s130 form .inner-form .input-field.first-wrap input {
    -ms-flex-positive: 1;
    flex-grow: 1;
  }

  .s130 form .inner-form .input-field.first-wrap .svg-wrapper {
    min-width: 80px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .s130 form .inner-form .input-field.first-wrap svg {
    width: 36px;
    height: 36px;
    fill: #222;
  }

  .s130 form .inner-form .input-field.second-wrap {
    min-width: 216px;
  }

  .s130 form .inner-form .input-field.second-wrap .btn-search {
    height: 100%;
    width: 100%;
    white-space: nowrap;
    font-size: 16px;
    color: #fff;
    border: 0;
    cursor: pointer;
    position: relative;
    z-index: 0;
    background: #00ad5f;
    transition: all 0.2s ease-out, color 0.2s ease-out;
    font-weight: 300;
  }

  .s130 form .inner-form .input-field.second-wrap .btn-search:hover {
    background: #009451;
  }

  .s130 form .inner-form .input-field.second-wrap .btn-search:focus {
    outline: 0;
    box-shadow: none;
  }

  .s130 form .info {
    font-size: 15px;
    color: #ccc;
    padding-left: 26px;
  }

  @media screen and (max-width: 992px) {
    .s130 form .inner-form .input-field {
      height: 50px;
    }
  }

  @media screen and (max-width: 767px) {
    .s130 form .inner-form .input-field.first-wrap .svg-wrapper {
      min-width: 40px;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: center;
      justify-content: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 0 10px;
    }
    .s130 form .inner-form .input-field.first-wrap svg {
      width: 26px;
      height: 26px;
      fill: #222;
    }
    .s130 form .inner-form .input-field.second-wrap {
      min-width: 100px;
    }
    .s130 form .inner-form .input-field.second-wrap .btn-search {
      font-size: 13px;
    }
  }
`;