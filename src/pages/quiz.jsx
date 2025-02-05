
import Quizcard from "../components/quizcard";
import { useState, useContext,useEffect } from "react";
import { DataContext } from "../context/context";
import { useNavigate } from "react-router";
import {useParams} from 'react-router'

export default function Quiz () {
  const {number: num} =useParams()
  const number = parseInt(num, 10)
  const [time,setTime]=useState(20)
  const { tabQuestions, setTabReponse, tabReponse } =
    useContext (DataContext);
  const navigate = useNavigate ();

  const handleNext = (question, response) => {
    setTime (20)
    const newQuestion = { ...question, yours: response };
    setTabReponse ([...tabReponse, newQuestion]);
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
      handleNext (tabQuestions[number],"")
    }
  },)

  return (
    <Quizcard
      next = {handleNext}
      question = {tabQuestions[number-1]}
      totalQuestion = {tabQuestions.length}
      number = {number}
      time = {time}
    />
  );
}
