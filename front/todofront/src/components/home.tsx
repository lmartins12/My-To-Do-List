import './home.css'
import {Link} from 'react-router-dom'; 

import {RiMoonFill} from 'react-icons/ri'; //moon icon, to represent @vivalaclara, the moon awaits the rocket <3
import { FaRocket} from 'react-icons/fa'; // rocket icon, to represent @lmartins12, the rocket is heading towards the moon <3

const Home = () =>{
    return(
        
        <div className='fullscreen'>
            <div className='githubicons'> 
                <Link to='https://github.com/lmartins12'><FaRocket className='ghicon'/></Link>
                <Link to='https://github.com/vivalaclara'><RiMoonFill className='ghicon' /></Link>
            </div>
            <h1 className='title'> MY TO-DO LIST</h1>
            <h2 className='subtitle'> by M²Tech</h2>
            <button className='newbttn'>NEW TASK</button>
            </div>
    )
}

export default Home;
