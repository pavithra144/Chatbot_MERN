import { Typography } from '@mui/material'
import openai from '../assets/openai.png'

const Logo = () => {
  return (
    <div style={{display:'flex'}}>
      <img src={openai} alt='open-ai' width={'30px'} height={'30px'}/>
      <Typography>
        <span >Chat</span>-Assistant
      </Typography>
    </div>
  )
}

export default Logo