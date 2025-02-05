
import Welcomecard from "../components/welcomecard";
import { useNavigate } from "react-router";
import { useEffect, useContext,useState } from 'react'
import { getQuestion } from "../services/script";
import { DataContext } from "../context/context";

export default function Home () {
  const navigate = useNavigate ()
  const [isLoading,setIsLoading] = useState (false)

  const handleNaviagte = () => {
    navigate ("/Quiz/1")
    
  }

  const {setQuestions} = useContext (DataContext)

  useEffect (() => {
    handleGetQuextion ()
  },)

  const handleGetQuextion = () => {
    getQuestion().then (data => {
      if (data) {
        setQuestions (data)
        setIsLoading (true)
      }
    })
  }

  return ( <Welcomecard isLoading = {isLoading} navig = {handleNaviagte}/>
  )
}
