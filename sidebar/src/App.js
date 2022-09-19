import './App.css';
import TocRoundedIcon from '@mui/icons-material/TocRounded';
function App(){
  return (
    <div className="App">
      <div className='sidebar_container'>
        <div className='sidebar'>
          <div className='lines_icon'>
            <TocRoundedIcon/>
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