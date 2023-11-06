import {createContext ,useContext, useEffect, useState} from "react"
import { api } from "../services/api"
const AuthContext = createContext({})

function AuthProvider({children}){
  
  const [data , setData] = useState({})
 
  async function signIn({username, password}){
    
    try{
      
      const res = await api.post('/sessions', {username , password })

      const { user, token } = res.data
      api.defaults.headers.authorization = `Bearer ${token}`
      console.log(user)
      localStorage.setItem('@Robertcapas:user', JSON.stringify(user))
      localStorage.setItem('@Robertcapas:token', token)
      
      setData({user , token})
      
    } catch (error) {
      if(error.response) alert(error.response.data.message)
      else alert('não foi possivel fazer login')
    }
  }
  
  function signOut(){
    localStorage.removeItem('@Robertcapas:user')
    localStorage.removeItem('@Robertcapas:token')
    setData({})
  }
  
  useEffect(()=>{
    const user = localStorage.getItem('@Robertcapas:user') 
    const token =  localStorage.getItem('@Robertcapas:token')
    if(token && user) {
      console.log(token, user, 'tem')
      setData({
        user : JSON.parse(user),
        token
      })
    }

  }, [])


  return (
    <AuthContext.Provider value = {{
      signOut, 
      signIn,
      user : data.user}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth}