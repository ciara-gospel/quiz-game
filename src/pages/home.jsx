
import Welcomecard from "../components/welcomecard";
import { useNavigate } from "react-router";
import { useEffect, useState } from 'react'
import { getQuestion } from "../services/script";
import { useDispatch } from "react-redux";
import { setQuestion } from "../features/counter/quizSlice";

export default function Home () {
  const navigate = useNavigate ()
  const [isLoading,setIsLoading] = useState (false)

  const handleNaviagte = () => {
    navigate ("/Quiz/1")
    
  }
        const dispatch = useDispatch();
       
  

  useEffect (() => {
    handleGetQuextion ()
  },)

  const handleGetQuextion = () => {
    getQuestion().then (data => {
      if (data) {
        dispatch(setQuestion(data))
        setIsLoading (true)
      }
    })
  }

  return ( <Welcomecard isLoading = {isLoading} navig = {handleNaviagte}/>
  )
}
