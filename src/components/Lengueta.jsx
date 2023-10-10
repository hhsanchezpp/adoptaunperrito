import  Badge  from 'react-bootstrap/Badge'

const Lengueta = ({color_bg,palabra}) => {
  return (
    <div>
        <Badge bg={color_bg}>{palabra} </Badge>
    </div>
  )
}
export default Lengueta