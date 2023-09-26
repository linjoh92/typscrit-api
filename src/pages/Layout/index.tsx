import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import { NavLink } from "react-router-dom"

const Layout = ()=> {
    
    return <>
      <Header/>
       <div className="menu">
         <NavLink to="/">Home</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink to="/pokemon">Pokemon</NavLink>
       </div>
       <div className="container">
          <div className="sidebar"></div>
          <div className="main-content">
            <Outlet />
          </div>
       </div>
    </>
}

export default Layout