import { useState } from 'react'

const black = 'hsl(0, 0%, 0%)'
const grey = 'hsl(0, 0%, 30%)'

interface CloseButtonProps {
    onClose: () => void
}

function CloseButton(props: CloseButtonProps) {
  const [color, setColor] = useState(black)
  return (
    <button
  		style={{ 
  			position: 'absolute',
  			width: '50px', 
  			height: '50px',
  			border: 'none', 
  			outline: 'none', 
  			backgroundColor: 'transparent',
        color: color,
  			opacity: 0.9,
  			fontSize: '30px',
  			margin: '0', 
        top: '0',
        left: '0',
  			cursor: 'pointer'
  		}}
  		onClick={props.onClose}
      onMouseEnter={() => setColor(grey)}
      onMouseLeave={() => setColor(black)}
  	>
  		&times;
  	</button>
	)
}

export default CloseButton