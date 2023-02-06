import { Avatar, Button, Card, CardContent, Typography } from '@mui/material'
import { useContext, ReactNode } from 'react'
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

	const happy_birthday  = info
		.filter(i => isSameDate(now, i.birthday))
		.map(i => {
			return (
				<div className="lazy-list-item" key={i.name}>
					<Avatar alt={i.name} src={i.avatar} />
					<div className="lazy-list-item__name">{i.name}</div>
				</div>
			)
		})

	const upcoming = info
		.filter(i => !isSameDate(now, i.birthday))
		.sort((i, u) => compareDate(i.birthday, u.birthday))
		.slice(0, 5)
		.map(i => {
			return (
				<div className="lazy-list-item" key={i.name}>
          <Avatar alt={i.name} src={i.avatar} />
          <div className="lazy-list-item__name">{i.name}</div>
          <div className="lazy-list-item__date">{i.birthday[0]} 月 {i.birthday[1]} 日</div>
				</div>
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
  		<Card id="lazy-infocard">
				<CloseButton onClose={() => setOpen(false)} />
  			<CardContent>
  				<Typography component="div" variant="h5" my={2}>
	  				本日壽星
	  			</Typography>
          {happy_birthday.length ? <BirthdayList>{happy_birthday}</BirthdayList> : '無'}
  			</CardContent>
  			<CardContent>
  				<Typography component="div" variant="h5">
	  				即將到來
	  			</Typography>
          {upcoming.length ? <UpcomingList>{upcoming}</UpcomingList> : '無'}
  			</CardContent>
  		</Card>
  	</Popup>
  	</div>
  )
}

interface WrapperProps {
  children: ReactNode
}

function BirthdayList(props: WrapperProps) {
  return <div id="birthday-list">{props.children}</div>
}

function UpcomingList(props: WrapperProps) {
  return <div id="upcoming-list">{props.children}</div>
}
