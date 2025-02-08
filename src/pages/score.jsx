
import Resultcard from "../components/resultcard";
import { useMemo } from "react";
import {useNavigate} from 'react-router'
import { useDispatch, useSelector } from "react-redux";
import { ressetQuiz } from '../features/counter/quizSlice'

export default function Score () {
  const tabResponse = useSelector((state) => state.quiz.tabResponse);
  console.log("tabResponse:", tabResponse)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const score = useMemo (() => tabResponse.filter(item => item.correct_answer === item.yours).length
   , [tabResponse])

  const handleStar = () => {
    dispatch(ressetQuiz())
    navigate ("/")
  }

  return (
    <>
      <Resultcard tabResponse = {tabResponse} score={score} star = {handleStar} />
    </>
  );
}
