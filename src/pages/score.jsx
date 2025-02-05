
import Resultcard from "../components/resultcard";
import { DataContext } from "../context/context";
import { useContext, useMemo } from "react";
import {useNavigate} from 'react-router'

export default function Score () {
  const { tabReponse,setTabReponse } = useContext(DataContext);
  
  const score = useMemo (() => tabReponse.filter(item => item.correct_answer === item.yours).length
   , [tabReponse])


  const navigate = useNavigate ()

  const handleStar = () => {
    setTabReponse ([])
    navigate ("/")
  }

  return (
    <>
      <Resultcard tabResponse = {tabReponse} score={score} star = {handleStar} />
    </>
  );
}
