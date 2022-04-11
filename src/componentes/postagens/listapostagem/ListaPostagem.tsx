import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Postagem from '../../../models/Postagem';
import './ListaPostagem.css';
import { busca } from '../../../services/Services';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';

function ListaPostagem() {
  const [postagem, setPostagem] = useState<Postagem[]>([])
  let history = useHistory();
  const token= useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == '') {
      toast.error('Você precisa estar logado.', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
})
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
                {postagens.titulo}
              </Typography>
              <Typography variant="body2" component="p">
                {postagens.texto}
              </Typography>
              <Typography variant="body2" component="p">
                {postagens.tema?.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>

                <Link to={`/formularioPostagem/${postagens.id}`} className="text-decorator-none" >
                  <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small' color="primary" >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to={`/deletarPostagem/${postagens.id}`} className="text-decorator-none">
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