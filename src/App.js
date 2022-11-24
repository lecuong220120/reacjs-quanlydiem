
import './App.css';
import { Navbar } from './common/Navbar';

import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import { Home } from './common/Home';
import { Error } from './common/Error';
import DiemThiComponent from './common/DiemThiComponent/DiemThiComponent';
import LopComponent from './common/LopComponent/LopComponent';
import SinhVienComponent from './common/SinhVienComponent/SinhVienComponent';
import MonHocComponent from './common/MonHocComponent/MonHocComponent';
import { AddLopComponent } from './common/LopComponent/AddLopComponent';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/diemthi' element ={<DiemThiComponent/>} />
        <Route path='/lop' element ={<LopComponent/>} />
        <Route path='/addLop' element ={<AddLopComponent/>} />
        <Route path='/editLop/:id' element ={<AddLopComponent/>} />
        <Route path='/sinhvien' element ={<SinhVienComponent/>} />
        <Route path='/monhoc' element ={<MonHocComponent/>} />
        <Route path='*' element = {<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
