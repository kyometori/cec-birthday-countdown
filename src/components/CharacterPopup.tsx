import { Card, CardMedia } from '@mui/material'
import Popup from 'reactjs-popup'

interface Info {
	isOpen: boolean
	onClose: () => void
	name: string
	img: string
}

export default function CharacterCard(props: Info) {

	return (
    <Popup open={props.isOpen} closeOnDocumentClick onClose={props.onClose}>
    	<Card sx={{ opacity: 0.9 }}>
    		<CardMedia
	        component="img"
	        image={props.img}
	        alt={props.name}
	      />
    	</Card>
    </Popup>
   )
}