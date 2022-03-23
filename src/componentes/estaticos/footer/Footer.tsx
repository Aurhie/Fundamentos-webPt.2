import react from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';


function Footer()
{
return (
    <>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box style={{ backgroundColor: "#4B0082", height: "120px" }}>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Me siga nas redes sociais! </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">    
                        <a href="https://www.instagram.com/aurhiezz/" target="_blank">
                            <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/aurora-lúcia-marques-989aba226/" target="_blank">
                            <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                        </a>
                    </Box>
                </Box>
                <Box style={{ backgroundColor: "#8A2BE2", height: "60px" }}>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2021 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" href="https://github.com/Aurhie">
                            <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">GITHUB</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </>
)
}

export default Footer;