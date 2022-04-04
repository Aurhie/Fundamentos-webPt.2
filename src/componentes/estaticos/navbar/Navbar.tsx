import react from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Actions';

function Navbar() {
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        alert('Usúario deslogado.')
        history.push('/login')
    }

    var NavbarComponent;

    if (token != '') {
        NavbarComponent = <AppBar position="static">
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
    }
    return (
        <>
            {NavbarComponent}
        </>
    )
}

export default Navbar;