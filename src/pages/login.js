import './pages.css';
import { FaUserAlt } from "react-icons/fa";
import { IconContext } from "react-icons"; 
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
export const Login = ()=>{

    const schema = yup.object().shape({
        Username: yup.string().min(8).max(12).required(),
        Password: yup.string().min(6).required(),// when can also add the rejex
        CPassword: yup
        .string()
        .oneOf([yup.ref("Password"),null]) // the value should be same as password
        .required(), 

    })

    const {register,handleSubmit, formState :{errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data)=>{
        console.log(data);
    };


    return (
        <div className='Container'>
            
            <IconContext.Provider value={{ className: "user-react-icons" }}>
            <FaUserAlt />
            </IconContext.Provider>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='innerContainer'>
                    <div className=' labels'>
                        <label>Username</label>
                    </div>
                    <input placeholder='Put Your Username' {...register("Username")}/>
                    <div className='labels'>
                        <label>Password</label>
                    </div>
                    <input placeholder='Password' type='password' {...register("Password")}/>
                    <div className='labels'>
                        <label>Confirm Password</label>
                    </div>
                    <input placeholder='Confirm Password' type='password' {...register("CPassword")}/>
                    <p>{[errors.Username?.message,errors.Password?.message,errors.CPassword?.message]}</p> 
                </div>
                <input type="Submit" id="submit"/>
            </form>
            
            
            
        </div>
    )
}