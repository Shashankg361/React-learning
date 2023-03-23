import { useContext } from "react";
import { useState,useEffect } from "react"
import { AppContext } from "../App";

export const Profile =()=>{
    const [update , setUpdate] = useState([]);
    const {community} = useContext(AppContext);
    
    useEffect(()=>{
        setUpdate(community)
    },[community])
    
    return (

        <div>
            <h1>Community which you have joined</h1>
            {update.map((element,index)=>{
                return <h1>{index+1} : {element}</h1>
            })}
        </div>
        
        
    )
    
    
}