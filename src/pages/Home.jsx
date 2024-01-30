
import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Sidenavbar from '../componebt/Sidenavbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const Home = () => {
  return (
    <div>
      <Box height={70}/>
<Box sx={{ display: 'flex' }}>
<Sidenavbar/>
<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
<Grid container spacing={2}>
  <Grid item xs={8}>
  <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={4}>
   
  </Grid>
  
</Grid>
 
</Box>
</Box>
    </div>
  )
}

export default Home