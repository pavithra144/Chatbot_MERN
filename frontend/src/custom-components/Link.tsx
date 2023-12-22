import {Link} from 'react-router-dom'

type LinkProps = {
    to:string,
    bg:string,
    text:string,
    textColor:string,
    onClick?:() => Promise<void>
}
const MainLink = ({to,bg,text,textColor,onClick}:LinkProps) => {
  return (
   <Link to={to} style={{background:bg, color:textColor}} onClick={onClick}>{text}</Link>
)}

export default MainLink