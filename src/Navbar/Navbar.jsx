import Sidebar from './Sidebar';
import Topbar from './Topbar';



function Navbar({ days, setDays }) {

    // For Big Devices =>
    // const left = '100px'
    // const top = '17px'


    return (<>
        <div className='relative'>
            <Sidebar />
            <Topbar days={days} setDays={setDays} />
        </div>
    </>)
}

export default Navbar;
