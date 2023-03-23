import {useState} from "react";


export const Addcommunity = (props)=>{
    const [newCommunity , setNewCommunity] = useState('');
    const updateValue =()=>{
        props.setCommunity([...props.community,newCommunity]);
    }

    return (
        <div>
                <input onChange={(event)=>{setNewCommunity(event.target.value)}}/>
                <button onClick={updateValue}>Add community</button>
            </div>
    )
}