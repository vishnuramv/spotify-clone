import React from 'react';
import './Footer.css';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__songLogo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.sndcdn.com%2Fartworks-000579665654-lhp1xj-t500x500.jpg&f=1&nofb=1" alt=""/>
                <div className="footer__songInff">
                    <h4>Senorita</h4>
                    <p>Shawn Mendes, Camila Cabello</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__icon" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__icon" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2} >
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;