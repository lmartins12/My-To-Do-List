import styled from "styled-components";
import './task.css'

const TaskButton = styled.button`
background-color:  #434554;
color: white;
font-size: 1.5rem;
font-family: 'Roboto';
font-weight: bolder;
text-shadow:rgba(111, 124, 242, 0.9) 0px 1px 3px, rgba(111, 124, 242, 0.9) 0px 1px 2px;
border-radius: 50%;
border: 1px transparent;
margin: 10px;
padding: 5px;
`;

const Task = () => {
return(
    <div className="taskcontainer"> 
        <div className="tasktxt">
            <h1 className="tasktitle"> TASK TITLE </h1>
            <p className="taskdescription"> task description </p> 
        </div>
        <div className="taskbuttons">
            <TaskButton> ✓ </TaskButton>
            <TaskButton> ✎</TaskButton>
            <TaskButton> ⨉ </TaskButton>
        </div>
        
    </div>
)
}

export default Task; 