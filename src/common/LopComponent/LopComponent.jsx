import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { lop_url } from '../../constants'
import { Link } from 'react-router-dom'
const LopComponent = () => {
    const [lops, setLops] = useState([])
    
    const fetchLop = async(url) => {
        try {
            const response = await axios.get(url)
            setLops(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchLop(lop_url);
    },[])
    

  return (
    <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', alignItems:'center'}}>
        <Link to='/addLop' className='btn btn-success'>Them moi</Link>
        <h1>Quan ly danh sach lop</h1>
    <table style={{border: '1px solid', width:'500px'}}>
        <tr>
            <th>Ma lop</th>
            <th>Ten lop</th>
            <th colSpan={2}>Action</th>
        </tr>
        <tr>
            {lops.map((lop) => (
            <div key={lop.id}>
                <td>{lop.id}</td>
                <td>{lop.tenLop}</td>
                <td><button type='button' className='btn btn-success'><Link to={`/editLop/${lop.id}`}>Sửa</Link></button></td>
                <td><button type='button' className='btn btn-danger' >xoa</button></td>
            </div>
        
            ))}
        </tr>

    </table>
    </div>

  )
}

export default LopComponent