import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import ListComponent from './ListComponent';

const useStyle = makeStyles(() => ({
  paper: {
    display: 'flex',
    padding: '40px 20px 10px',
    margin: '-50px -40px 30px',
    color: 'white',
    border: '1px solid #6c63FF',
    background: 'rgba(0,0,0,.45)',
    '& .MuiButton-root': {
      backgroundColor: '#6C63FF',
      color: 'white',
      maxHeight: '50px',
      marginLeft: '20px',
      width: '150px',
      '&:hover': {
        background: '#4a41d4'
      }
    },
    '& .MuiSlider-root': {
      color: '#ff6584'
    }
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    margin: '0 15px'
  }
}));

const Suggestions = () => {
  const classes = useStyle();
  const [features, setFeatures] = useState([
    {
      feature: 'danceability',
      value: 0,
      max: 1,
      min: 0,
      steps: 0.1
    },
    {
      feature: 'energy',
      value: 0,
      max: 1,
      min: 0,
      steps: 0.1
    },
    {
      feature: 'instrumentalness',
      value: 0,
      max: 1,
      min: 0,
      steps: 0.1
    },
    {
      feature: 'liveness',
      value: 0,
      max: 1,
      min: 0,
      steps: 0.1
    },
    {
      feature: 'acousticness',
      value: 0,
      max: 1,
      min: 0,
      steps: 0.1
    },
    {
      feature: 'loudness',
      value: 0,
      max: 0,
      min: -16,
      steps: 1
    },
    {
      feature: 'speechiness',
      value: 0,
      max: 1,
      min: 0,
      steps: 0.1
    },
    {
      feature: 'valence',
      value: 0,
      max: 1,
      min: 0,
      steps: 0.1
    },
    {
      feature: 'tempo',
      value: 0,
      max: 250,
      min: 0,
      steps: 10
    }
  ]);

  const handleChange = (index, value) => {
    let array = features;
    array[index].value = value;
    setFeatures(array);
  };

  let mood = {};
  features.forEach((item) => (mood[item.feature] = item.value));
  console.log(JSON.stringify(mood));

  return (
    <>
      <Paper className={classes.paper} square>
        {features.map((features, index) => (
          <Box className={classes.box}>
            <Typography id='discrete-slider' gutterBottom>
              {features.feature}
            </Typography>
            <Slider
              defaultValue={0}
              aria-labelledby='discrete-slider'
              valueLabelDisplay='auto'
              step={features.steps}
              marks
              min={features.min}
              max={features.max}
              onChangeCommitted={(e, val) => {
                handleChange(index, val);
              }}
            />
          </Box>
        ))}
        <Button size='large'>Update</Button>
      </Paper>
      <ListComponent type='suggestions' />
    </>
  );
};

export default Suggestions;
