import {Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Task from './components/task';
import CreateTask from './components/createinputbox';
import EditTask from './components/editinputbox';
import DeleteTask from './components/deleteconfirmbox';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/task" element={<Task></Task>}></Route>
            <Route path="/nwtsk" element={<CreateTask></CreateTask>}></Route>
            <Route path="/edtsk" element={<EditTask></EditTask>}></Route>
            <Route path="/deltsk" element={<DeleteTask></DeleteTask>}></Route>
         </Routes>
    )
}
export default AppRoutes;
