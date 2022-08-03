import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import _ from "lodash";

const openTabs = (word) => {
  // window.open(`https://www.google.com/search?q=${word}+meaning`, "_blank")
  window.open(`https://mnemonicdictionary.com/word/${word}`, "_blank").focus();
}
const card = (word, callWordApi, randomColor) => {
  return <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} gutterBottom>
      </Typography>
      <Typography style={{ color: `#${randomColor}` }} variant="h5" component="div">
        {`#${word?.item}`}<br></br><a onClick={() => openTabs(word.value)}>{`${_.capitalize(word?.value)}`}</a>
      </Typography>
      <Typography sx={{ mb: 1.5 }} >
      </Typography>
      <Typography>
        <br />
      </Typography>
    </CardContent>
    <CardActions style={{ flexDirection: "column" }}>
      <Button onClick={() => callWordApi()} size="small">Next</Button>
    </CardActions>
  </React.Fragment>
}

export default ({ word, callWordApi }) => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div>
      <Box sx={{ borderRadius: '100px', boxShadow: `1px 5px 13px 0px #${randomColor}`, minWidth: 500, maxWidth: "500px", textAlign: 'center' }}>
        <Card style={{ backgroundColor: 'transparent', borderRadius: '100px' }} variant="elevation">{card(word, callWordApi, randomColor)}</Card>
      </Box>
      <iframe style={{ marginTop: "50px", width: "500px", height: "500px" }} src={`https://www.google.com/search?igu=1&q=${word.value}+meaning`} />
    </div>
  );
}