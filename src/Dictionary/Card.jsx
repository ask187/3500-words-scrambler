import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import _ from "lodash";

const card = (word, callWordApi, randomColor) => {
  return <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} gutterBottom>
      </Typography>
      <Typography style={{ color: `#${randomColor}` }} variant="h5" component="div">
        {`#${word?.item}`}<br></br>{`${_.capitalize(word?.value)}`}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      </Typography>
      <Typography>
        <br />
      </Typography>
    </CardContent>
    <CardActions style={{ flexDirection: "column" }}>
      <Button onClick={callWordApi} size="small">Next</Button>
    </CardActions>
  </React.Fragment>
}

export default ({ word, callWordApi }) => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <Box sx={{ boxShadow: `7px 8px 13px 0px #${randomColor}`, minWidth: 275, textAlign: 'center' }}>
      <Card variant="elevation">{card(word, callWordApi, randomColor)}</Card>
    </Box>
  );
}