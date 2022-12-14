import { Grid, Typography } from '@mui/material'
import { useState } from 'react'
import CharacterCard from './components/CharacterCard'
import LazyButton from './components/LazyButton'
import Time from './components/Time'
import Footer from './components/Footer'
import info from './data/info'

function App() {
  const [now, setNow] = useState(new Date())
  setInterval(() => setNow(new Date()), 1e3)
  return (
    <>
      <Typography mt={5} textAlign="center" variant="h3">
        告白實行委員會生日倒計時
      </Typography>
      <Time.Provider value={now}>
        <LazyButton />
        <Grid container spacing={{ lg: 2, xs: 1 }} padding={2}>
          {info.map(i => (
            <Grid item lg={4} md={6} sm={12} key={i.name}>
              <CharacterCard
                name={i.name}
                avatar={i.avatar}
                bgColor={i.bg_color}
                popupImage={i.popupImage}
                birthday={i.birthday}
              />
            </Grid>
          ))}
        </Grid>
      </Time.Provider>
      <div style={{ height: '100px' }} />
      <Footer />
    </>
  )
}

export default App
