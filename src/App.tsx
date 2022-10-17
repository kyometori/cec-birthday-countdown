import { Grid, Typography } from '@mui/material'
import { useState } from 'react'
import CharacterCard from './components/CharacterCard'
import Time from './components/Time'
import info from './data/info'

function App() {
  const [now, setNow] = useState(new Date())
  // setInterval(() => setNow(new Date()), 1e3)
  return (
    <>
      <Typography my={5} textAlign="center" variant="h3">
        告白實行委員會生日倒計時
      </Typography>
      <Time.Provider value={now}>
        <Grid container spacing={{ lg: 2, xs: 1 }}>
          {info.map(i => (
            <Grid item lg={4} md={6} sm={12} key={i.name}>
              <CharacterCard
                name={i.name}
                avatar={i.avatar}
                bgColor={i.bg_color}
                birthday={i.birthday}
              />
            </Grid>
          ))}
        </Grid>
      </Time.Provider>
      <div style={{ height: '200px' }} />
    </>
  )
}

export default App
