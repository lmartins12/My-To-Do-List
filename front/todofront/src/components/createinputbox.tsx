import './box.css';

const CreateTask = () =>{
    return(
        
       <div className='box'>
            <header className='boxheader'> 
                <h1 className='boxtitle'>CREATE NEW TASK</h1>
            </header>
            <div className='boxcontainer'> 
                <input type="text" className='inptaskname' placeholder='TASK NAME' />
                <input type="text" className='inptaskdesc' placeholder='ENTER YOUR DESCRIPTION' /> 
                <div className='bttnscontainer' >
                    <button className='boxbttn'>SAVE</button> 
                    <button className='boxbttn'>CANCEL</button> 
                 </div>
               
            </div>
       </div>
    )
}

export default CreateTask;