import { Avatar, Button, Card, CardContent, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import { useContext } from 'react'
import Time from './Time'
import Popup from 'reactjs-popup'
import React, { useState } from 'react'
import info from '../data/info'
import { compareDate } from '../utils/compareDate'
import { isSameDate } from '../utils/isSameDate'
import CloseButton from './CloseButton'

export default function LazyButton() {
	const now = useContext(Time)
	const [open, setOpen] = useState(false)

	const g = useMediaQuery("(min-width: 600px)")

	const k = info
		.filter(i => isSameDate(now, i.birthday))
		.map(i => {
			return (
				<Stack direction="row" spacing={2} alignItems="center" my={2} key={i.name}>
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
				<Grid item lg={6} md={12} key={i.name}>
				<Stack 
					direction="row"
					spacing={{ md: 2, xs: 1 }}
					alignItems="center"
					my={2}
				>
					<Stack direction="row" spacing={{ md: 2, xs: 1 }} alignItems="center">
						<Avatar alt={i.name} src={i.avatar} />
						<Typography component="div">{i.name}</Typography>
					</Stack>
					{g && <Typography component="div">{i.birthday[0]} 月 {i.birthday[1]} 日</Typography>}
				</Stack>
				</Grid>
			)
		})

	return (
		<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
		<Button
	    variant="contained" 
			color="secondary" 
			sx={{ margin: '20px 0 40px' }}
			size="large"
			onClick={() => setOpen(true)}
			disableFocusRipple
		>
			懶人包
		</Button>
		<Popup
			open={open}
	    modal
	    closeOnDocumentClick
	    onClose={() => setOpen(false)}
	  >
  		<Card sx={{ 
				display: 'flex', 
				flexDirection: 'column',
				gap: '20px', 
				padding: '0px 50px', 
				backgroundColor: 'hsla(0, 0%, 100%, 90%)',
				width: '40vw'
			}}>
				<CloseButton onClose={() => setOpen(false)} />
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
		  			{j.length ? <Grid container>{j}</Grid> : '無'}
  				</Typography>
  			</CardContent>
  		</Card>
  	</Popup>
  	</div>
  )
}