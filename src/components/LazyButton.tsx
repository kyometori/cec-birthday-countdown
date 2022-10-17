import { Avatar, Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import { useContext } from 'react'
import Time from './Time'
import Popup from 'reactjs-popup'
import React from 'react'
import info from '../data/info'
import { compareDate } from '../utils/compareDate'
import { isSameDate } from '../utils/isSameDate'

export default function LazyButton() {

	const now = useContext(Time)

	const k = info
		.filter(i => isSameDate(now, i.birthday))
		.map(i => {
			return (
				<Stack direction="row" spacing={2} alignItems="center" my={2}>
					<Avatar alt={i.name} src={i.avatar} />
					<Typography component="div">{i.name}</Typography>
				</Stack>
			)
		})

	const j = info
		.filter(i => !isSameDate(now, i.birthday))
		.sort((i, u) => compareDate(i.birthday, u.birthday))
		.slice(0, 5)
		.map(i => {
			return (
				<React.Fragment key={i.name}>
					<Stack direction="row" spacing={2} alignItems="center" my={2}>
						<Avatar alt={i.name} src={i.avatar} />
						<Typography component="div">{i.name}</Typography>
						<Typography component="div">{i.birthday[0]} 月 {i.birthday[1]} 日</Typography>
					</Stack>
				</React.Fragment>
			)
		})

	return (
		<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
		<Popup
	    trigger={<Button
		    variant="contained" 
				color="secondary" 
				sx={{ margin: '20px 0 40px' }}
				size="large"
				disableFocusRipple
			>
				懶人包
			</Button>}
	    modal
	    closeOnDocumentClick
	  >
  		<Card sx={{ 
				display: 'flex', 
				flexDirection: 'column',
				gap: '20px', 
				padding: '15px', 
				backgroundColor: 'hsla(0, 0%, 100%, 90%)',
				width: '40vw'
			}}>
  			<CardContent>
  				<Typography component="div" variant="h5" my={2}>
	  				本日壽星
	  			</Typography>
	  			<Typography component="div" variant="h6">
		  			{k.length ? 
		  				<Grid container
		  					direction="row" 
		  					spacing={2}
		  					justifyContent="center"
		  				>
		  					{k}
		  				</Grid> : '無'}
	  			</Typography>
  			</CardContent>
  			<CardContent>
  				<Typography component="div" variant="h5">
	  				即將到來
	  			</Typography>
	  			<Typography component="div" variant="h6">
		  			{j.length ? j : '無'}
  				</Typography>
  			</CardContent>
  		</Card>
  	</Popup>
  	</div>
  )
}