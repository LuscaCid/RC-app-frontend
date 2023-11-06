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
      localStorage.setItem('@Robercapas:user', JSON.stringify(user))
      localStorage.setItem('@Robercapas:token', token)
      
      setData({user , token})
      
    } catch (error) {
      if(error.response) alert(error.response.data.message)
      else alert('não foi possivel fazer login')
    }
  }
  
  function signOut(){
    localStorage.removeItem('@Robercapas:user')
    localStorage.removeItem('@Robercapas:token')
    setData({})
  }
  
  useEffect(()=>{
    const token = localStorage.getItem('@Robertcapas:user') 
    const user =  localStorage.getItem('@Robertcapas:token')
    if(token && user) {
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