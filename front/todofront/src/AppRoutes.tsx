import {Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Task from './components/task';


const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/task" element={<Task></Task>}></Route>
         </Routes>
    )
}
export default AppRoutes;
