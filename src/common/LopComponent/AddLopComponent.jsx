import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {axios} from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import LopService from '../../Service/LopService';
export const AddLopComponent = () => {
  const [tenLop, setTenLop] = useState('')
  const {id} = useParams()
  const navigate  = useNavigate()
  useEffect(()=>{
    getById(id)
  }, [id])
  const addLop = (e) =>{
    e.preventDefault();
   const lop = {tenLop}
   LopService.createLop(lop).then((response) =>{
    navigate('/lop')
   }).catch(error =>{console.log(error);})
  }
  const getById = (id) =>{
    LopService.getById(id).then((response) =>{
       setTenLop(response.data.tenLop)
    }).catch(error=>{console.log(error);})
  }
  
  return (
    <div>
       {
        id && <h1>Sửa thông tin lớp</h1> || <h1>Thêm mới lớp</h1>
       }
        <form>
            <label htmlFor='tenlop'>Tên lớp: </label>
            <input type='text' name='tenlop' id = 'tenlop' value={tenLop} onChange = {(e)=> setTenLop(e.target.value)}/><br/>
            <button type='submit' onClick={addLop}>Lưu</button>
            <button><Link to='/lop'>Hủy</Link></button> 
        </form>
    </div>
  )
}
