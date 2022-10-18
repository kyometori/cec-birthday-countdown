import { Card, CardMedia } from '@mui/material'
import Popup from 'reactjs-popup'

interface Info {
	isOpen: boolean
	onClose: () => void
	name: string
	img: string
}

interface CloseButtonProps {
	onClose: () => void
}

export default function CharacterCard(props: Info) {

	return (
    <Popup open={props.isOpen} closeOnDocumentClick onClose={props.onClose}>
    	<Card sx={{ opacity: 0.9 }}>
    		<CloseButton onClose={props.onClose} />
    		<CardMedia
	        component="img"
	        image={props.img}
	        alt={props.name}
	      />
    	</Card>
    </Popup>
   )
}

function CloseButton(props: CloseButtonProps) {
    return (
    	<button
    		style={{ 
    			position: 'absolute',
    			width: '50px', 
    			height: '50px',
    			border: 'none', 
    			backgroundColor: 'white',
    			opacity: 0.9,
    			fontSize: '30px',
    			// borderRadius: '50%',
    			margin: '0', 
    			padding: '10px',
    			cursor: 'pointer'
    		}}
    		onClick={props.onClose}
    	>
    		&times;
    	</button>
  	)
}