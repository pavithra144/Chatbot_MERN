import {Link} from 'react-router-dom'

type LinkProps = {
    to:string,
    bg:string,
    text:string,
    textColor:string,
    onClick?:() => Promise<void>
    className?:string;
}
const MainLink = ({to,bg,text,textColor,onClick,className}:LinkProps) => {
  return (
   <Link to={to} style={{background:bg, color:textColor}} onClick={onClick} className={className}>{text}</Link>
)}

export default MainLink