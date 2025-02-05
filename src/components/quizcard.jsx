import { PropTypes } from "prop-types";

export default function Quizcard ({
  next,
  question,
  number,
  totalQuestion,
  time,
}) {
  return (
    <div className="box">
      <div className="card-box question-box">
        <div className="row">
          <h3>
            question{" "}
            <span>
              {number}/{totalQuestion}
            </span>
          </h3>
          <h3> temps de reponse: {time} </h3>
        </div>
        <div className="row g-1 mt-1">
          <div className="col-6">
            <h4>
              category : <span> {question?.category} </span>
            </h4>
          </div>
          <div className="col-6">
            <h4>
              difficulty : <span> {question?.difficulty} </span>
            </h4>
          </div>
        </div>
        <div className="row g-1">
          <h3 className="questipn"> {question?.question} </h3>
        </div>
        <div className="row g-1 mt-2">
          <div className="col-6">
            <button
              onClick={() => next(question, "True")}
              className="btn btn-outline-success bouton"
            >
              {" "}
              True{" "}
            </button>
          </div>
          <div className="col-6">
            <button
              onClick={() => next(question, "False")}
              className="btn btn-outline-danger bouton "
            >
              {" "}
              False
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Quizcard.propTypes = {
  next: PropTypes.func.isRequired,
  question: PropTypes.object,
  number: PropTypes.number,
  totalQuestion: PropTypes.number,
  time: PropTypes.number,
};