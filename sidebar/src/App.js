import './App.css';
import img_profile from "./assets/img/img_profile.png"
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import TocRoundedIcon from '@mui/icons-material/TocRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsRemoteRoundedIcon from '@mui/icons-material/SettingsRemoteRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

import Item from './components/item';
import {motion} from 'framer-motion';
function App(){
  return (
    <div className="App">
      <div className='sidebar_container'>
        <div className='sidebar'>
          <motion.div 
            whileHover={{
              scale:1.2,
              rotate:180,
              backgroundColor:"rgba(255, 255, 255, 0.3)",
              backdropFilter:"blur(3.5px)",
              WebkitBackdropFilter:"blur(3.5px)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
            }}
            className='lines_icon'>
            <TocRoundedIcon/>
          </motion.div>
          <div className='profile'>
            <img 
              alt="img profile"
              src={img_profile}
            />
          </div>
          <div className='groups'>
            {/* group 1 */}
            <div className='group'>
              <h3>ANALYTICS</h3>
                <Item icon={<DashboardRoundedIcon />} name={"Dashboard"}/>
                <Item icon={<BarChartRoundedIcon />} name={"Performance"}/>
            </div>
            {/* group  2 */}
            <div className='group'>
              <h3>CONTENT</h3>
                <Item icon={<AttachMoneyRoundedIcon />} name={"Sales"}/>
                <Item icon={<AssignmentTurnedInRoundedIcon />} name={"Performance"}/>
                <Item icon={<AccountCircleRoundedIcon />} name={"Customers"}/>
            </div>
            {/* group 3 */}
            <div className='group'>
              <h3>CUSTOMIZATION</h3>
                <Item icon={<SettingsRemoteRoundedIcon />} name={"Segments"}/>
                <Item icon={<ColorLensRoundedIcon />} name={"Themes"}/>
            </div>
          </div>
        </div>
      </div>
      <div className='body_container'>
        i am body 
      </div>

    </div>
  )
}

export default App;