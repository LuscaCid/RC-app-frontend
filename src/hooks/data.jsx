import { useState, createContext, useEffect, useContext } from "react";
import { api } from "../services/api";

const dataContext = createContext({})// passo um objeto vazio pois vai entrar um objeto la
//passando para o contexto da aplicacao o conteudo que sera buscado a apartir da busca
function DataProvider({children}){
    const [OSs, setOSs] = useState([
        {
            phoneModel : "xiaomi",
            created_at : "19/18",
            OSs_id : 3
        },
        {
            phoneModel : "xiaomi",
            created_at : "19/18",
            OSs_id : 3
        },
        
    ])//um objeto sera passado aqui dentro e sera renderizdo
    const [observacoes, setObservacoes] = useState([
        {
            obs : "lucas eh muito malucaooo",
            created_at : "18/11/2023"
        }
    ])
    //requisicoes serao feitas aqui
    return(
        <dataContext.Provider value = {{
            OSs,
            observacoes
            }}>
            {children}
        </dataContext.Provider>
    )
}

function useData (){
    const context = useContext(dataContext)
    return context
}

export {useData, DataProvider}