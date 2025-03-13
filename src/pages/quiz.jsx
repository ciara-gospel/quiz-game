
import Quizcard from "../components/quizcard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {useParams} from 'react-router'
import { useDispatch, useSelector } from "react-redux";
import { addResponse } from "../features/counter/quizSlice"; 

export default function Quiz () {
  const {number: num} =useParams()
  const number = parseInt(num, 10)
  const [time,setTime]=useState(20)
  const dispatch = useDispatch()
  const navigate = useNavigate ();

   const tabQuestion = useSelector((state) => state.quiz.tabQuestion)

  const handleNext = (question, response) => {
    setTime (20)
    const newQuestion = { ...question, yours: response };
    dispatch(addResponse(newQuestion))
    if (number === 10) {
     return navigate("/ScorePage");
    }
      navigate (`/Quiz/${number + 1}`);

    }
  

  useEffect (() => {
    if (time > 0) {
      const t = setInterval (() => {
        setTime ((prevTime) => prevTime-1)
      },1000);
      return () => clearInterval (t)
    } else if (time === 0){
      handleNext (tabQuestion[number],"")
    }
  },)

  return (
    <Quizcard
      next = {handleNext}
      question = {tabQuestion[number-1]}
      totalQuestion = {tabQuestion.length}
      number = {number}
      time = {time}
    />
  );
}
