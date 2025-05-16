import { Outlet } from "react-router"
import Header from "../header/Header";
import SideBar from "../sidebar/sidebar";
import Footer from "../footer/footer";
import style from "./layout.module.css"


const Layout = () => {
    return (
        <div className={style.layOutWrapper}>
            <Header/>
            <div className={style.sideBarOutlet}>
                <SideBar/>
                <Outlet/>
                {/* <Outlet/> is a placeholder that will be replaced with the child route's component
                 when the route is matched. This allows you to create nested routes, 
                 where a parent route can have multiple child routes. */}    
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;
//outlet lets you navigate through nested components; what this means is that if you have a parent component and a child component, the child component will be rendered inside the parent component. This is useful for creating layouts where you want to have a consistent header and footer across all pages, while still allowing for different content in the main area of the page.