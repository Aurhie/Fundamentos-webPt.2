import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Postagem from '../../../models/Postagem';
import './ListaPostagem.css';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Services';

function ListaPostagem() {
  const [postagem, setPostagem] = useState<Postagem[]>([])
  const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  useEffect(() => {
    if (token == '') {
      alert('Você precisa estar logado.')
      history.push('/login')
    }
  }, [token])

  async function getPostagem() {
    await busca('/postagens', setPostagem, {
      headers: { 'authorization': token }
    })
  }

  useEffect(() => {
    getPostagem()
  }, [postagem.length])

  return (
    <>
      {
        postagem.map(postagens =>(
        <Box m={2} >
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Postagens
              </Typography>
              <Typography variant="h5" component="h2">
                Título
              </Typography>
              <Typography variant="body2" component="p">
                Texto da Postagem
              </Typography>
              <Typography variant="body2" component="p">
                Tema
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>

                <Link to="" className="text-decorator-none" >
                  <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small' color="primary" >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to="" className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
        ))}
    </>
    );
}

export default ListaPostagem;