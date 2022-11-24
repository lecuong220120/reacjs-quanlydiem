import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>Trang chu</Link></li>
        <li><Link to='/diemthi'>Diem thi</Link></li>
        <li><Link to='/lop'>Lop</Link></li>
        <li><Link to='/monhoc'>Mon hoc</Link></li>
        <li><Link to='/sinhvien'>Sinh vien</Link></li>
      </ul>
    </div>
  )
}
