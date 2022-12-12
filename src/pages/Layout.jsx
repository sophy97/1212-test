import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return ( 
        <div>
            <NavLink style={ ({isActive})=> isActive ? {color:"green"}:{color:"black"} } to='/'>Home | </NavLink>
            <NavLink style={ ({isActive})=> isActive ? {color:"green"}:{color:"black"} } to='/about'>About | </NavLink>
            <NavLink style={ ({isActive})=> isActive ? {color:"green"}:{color:"black"} } to='/product'>Product </NavLink>
            <hr />
            {/* 각 페이지들이 출력될 공간 */}
            <Outlet />
        </div>
    );
}

export default Layout;