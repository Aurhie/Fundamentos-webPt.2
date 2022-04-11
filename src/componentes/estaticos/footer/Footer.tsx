import react from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';


function Footer() {
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );

    var FooterComponent;

    if (token != '') {
        FooterComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className='text'>Me siga nas redes sociais! </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://github.com/Aurhie" target="_blank">
                            <GitHubIcon className='redes' />
                        </a>
                        <a href="https://www.linkedin.com/in/aurora-lúcia-marques-989aba226/" target="_blank">
                            <LinkedInIcon className='redes' />
                        </a>
                        <a href="https://www.instagram.com/aurhiezz/" target="_blank">
                            <InstagramIcon className='redes' />
                        </a>
                    </Box>
                </Box>
                <Box className='box2'>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="right" gutterBottom className='text' >Copyright © 2022 by LuLuLand's</Typography>
                    </Box>
                    <Box>
                        <Typography variant="subtitle2" gutterBottom className='text' align="right">All Rights reserved</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    }
    return (
        <>
            {FooterComponent}
        </>
    )
}

export default Footer;