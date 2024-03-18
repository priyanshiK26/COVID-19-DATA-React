import Sidebar from './Sidebar';
import Topbar from './Topbar';



function Navbar() {

    return (<>
        <div className='relative'>
            <Sidebar />
            <Topbar />
        </div>
    </>)
}

export default Navbar;
