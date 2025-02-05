
import { PropTypes } from "prop-types";

export default function Welcomecard ({ navig, isLoading}) {
  return (
    <div className="box">
      <div className="card-box">
        <div className="row">
        <h1>WELCOME TO QUIZ GAME!</h1>   
        <h2>Instructions</h2>
        </div>
        <div className="row">
        <ol>           
            <li>You have 10 questions to answers to collect points.</li>           
             <li>Select True or False to answer the question.</li>           
             <li>your scores will be display at the end of the game.</li>           
             <li>You have to score atleast(5) questions to pass.</li>           
             <li>for each questions you have 30s to answer. </li>       
        </ol>
        </div>
        <div className="row">
          {isLoading ? (
            <button onClick={() => navig()}className="btn">START</button>
          ) : (
            <button onClick={() => navig()}className="btn">START</button>
          )}

        </div>
       </div>
        </div>
  );
}

Welcomecard.propTypes = {
  navig: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};
