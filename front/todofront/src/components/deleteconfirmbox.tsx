import './box.css';

const DeleteTask = () =>{
    return(
        
       <div className='box'>
            <header className='boxheader'> 
                <h1 className='boxtitle'>DELETE TASK</h1>
            </header>
            <div className='boxcontainer'> 
                <p className='message'>Are you sure you want to delete this task?</p>
                <div className='bttnscontainer' >
                    <button className='boxbttn'>YES</button> 
                    <button className='boxbttn'>NO</button> 
                 </div>
               
            </div>
       </div>
    )
}

export default DeleteTask;