import './pages.css';
import Axios from 'axios';
import { useQuery } from '@tanstack/react-query';
export const Home = ()=>{
    const {data , refetch , isLoading} = useQuery(["cat"],()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=>res.data);
    }); 
    if(isLoading) {
        return <h1>Loading...</h1>
    }
    
    return (
        <div className='MainC'>
            <div className="sDiv">
                <img src='https://content.i4cp.com/images/image_uploads/0000/2380/corporate-volunteerism-hero.jpg?1488559596' alt='its gpood' />
            </div>
            <div className="fDiv">
                <div>
                    <h1>Create your own Community.</h1>
                    <h2>Create your own DAO community. And Upscale your organization. Reach Investors Easily.</h2>
                    <p>{data?.fact}</p>
                    <button onClick={refetch}>Add Community</button>
                </div>
            
            </div>
            
        </div>
    )
    
}