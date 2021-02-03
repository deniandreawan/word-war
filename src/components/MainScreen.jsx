import React from "react";
import PropTypes from "prop-types";

const MainScreen = ({ initGame }) => (
  <div className="beater__main fadeIn">
    <h1 className="beater__main-title">Word War</h1>
    <p className="beater__main-subtitle">
      Do you have what is takes to become the fastest and accurate typist? Type every single word
      correctly in a given time limit to become a word beater master!
    </p>
    <button className="button--primary button--big" onClick={initGame}>
      Start Game
    </button>

    <div className="copyright">
      <span>
        Made by &nbsp;
        <a href="https://github.com/deniandreawan" target="_blank" rel="noreferrer">
          Deni Andreawan
        </a>
        &nbsp; | &nbsp; Using music from &nbsp;
        <a href="https://www.youtube.com/watch?v=OrPEoqp4sjg" target="_blank" rel="noreferrer">
          Alumo Music on Youtube
        </a>
      </span>
    </div>
  </div>
);

MainScreen.propTypes = {
  initGame: PropTypes.func,
};

export default MainScreen;
