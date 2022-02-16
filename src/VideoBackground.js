import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    player: {
        position: 'fixed',
        width: '50%',
        zIndex: '-1',
        margin: 'auto'
    }
    
  });
//import './VideoBackground.css';
export default function VideoBackground() {
    const classes = useStyles();
  return (
    <>
      <video autoPlay loop muted className={classes.player}>
        <source
          src="https://teraret.github.io/video/backgroundppl.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </>
  )
}
