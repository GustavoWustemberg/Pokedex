import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import "./style.css";

export default function PokemonCard({pokemonImage, pokemonName, pokemonType}) {
  const typeHandler = () => {
    if(pokemonType[1]){
      return pokemonType[0].type.name + " | " + pokemonType[1].type.name
    }
    return pokemonType[0].type.name
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pokemonImage}
          alt="Pokemon"
        />
        <CardContent>
          <Box className='name-type'>
            <Typography gutterBottom variant="h5" component="div">
              {pokemonName}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              {typeHandler()}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
