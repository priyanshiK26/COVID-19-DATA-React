import CoronavirusIcon from '@mui/icons-material/Coronavirus';

import WidgetsIcon from '@mui/icons-material/Widgets';
import SickIcon from '@mui/icons-material/Sick';
import ScienceIcon from '@mui/icons-material/Science';
import PaymentsIcon from '@mui/icons-material/Payments';
import SmsIcon from '@mui/icons-material/Sms';

import SettingsIcon from '@mui/icons-material/Settings';

function Sidebar() {

    // const left = '100px'
    // const top = '17px'

    return (
        <div
            className={` hidden fixed top-0 left-0 w-[30px] sm:w-[100px] h-[105vh] sm:h-screen sm:flex flex-col justify-between items-center p-8 bg-[#3325ae]`}
        >
            <div>
                <CoronavirusIcon className=' text-white cursor-pointer' fontSize='large' />
            </div>
            <div className='flex flex-col'>
                <WidgetsIcon className=' text-white mt-3 cursor-pointer' fontSize='medium' />
                <SickIcon className=' text-white mt-3 cursor-pointer' fontSize='medium' />
                <ScienceIcon className=' text-white mt-3 cursor-pointer' fontSize='medium' />
                <PaymentsIcon className=' text-white mt-3 cursor-pointer' fontSize='medium' />
                <SmsIcon className=' text-white mt-3 cursor-pointer' fontSize='medium' />
            </div>
            <div>
                <SettingsIcon className=' text-white cursor-pointer' fontSize='large' />
            </div>
        </div >
    )
}


export default Sidebar;