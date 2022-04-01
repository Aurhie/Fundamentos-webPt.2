import react from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css';

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function goLogout() {
        setToken('')
        alert('Usúario deslogado.')
        history.push('/login')
    }
    return (
        <>
            <AppBar position="static">
                <Toolbar className='navCor'>
                    <Box mx={1} className='cursor imgLogo'></Box>
                    <Box display='flex' justifyContent='start'>
                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} className='cursor' >
                                <Typography variant="h5" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/postagens' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h5" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/temas' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h5" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/formularioTema' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h5" color="inherit">
                                    Cadastrar tema
                                </Typography>
                            </Box>
                        </Link>


                            <Box mx={1} className='cursor' onClick={goLogout} >
                                <Typography variant="h5" color="inherit">
                                    logout
                                </Typography>
                            </Box>

                    </Box>
                </Toolbar>
            </AppBar >
        </>
    )
}

export default Navbar;