import { Addcommunity } from "../components/Addcommunity";
import { useContext } from "react";
import { AppContext } from "../App";

export const Community = ()=>{
    const {community , setCommunity} = useContext(AppContext);

    return (
        <div>
            <h1>Create your community</h1>
            
            <Addcommunity setCommunity={setCommunity} community={community}/>
            
            <div>
                {community.map((element,index)=>{
                    return(<h1>{element}</h1>);
                })}
                
            </div>

            
        </div>
    
    )
}