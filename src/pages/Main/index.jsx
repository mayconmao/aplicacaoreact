import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux'; 
import { FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';
import { signOut } from '../../store/modules/auth/actions'; 
import { Form } from '@unform/web';
import Input from '../../components/Input';

import { Container, Content, Albums, Button } from './styles';

export default function Main() {
  const dispatch = useDispatch();
  const [albums, setAlbums] = useState([]);

  async function handleAddAlbums({ title, id }, {reset}) {
    const response = await api.get(`${id}`);

    const album = response.data;   
    album['name'] = title;
    setAlbums([...albums, album]);

    reset();
  }

  const RemoveAlbums = useCallback((id) => {     
     setAlbums(state => state.filter(album => album.id !== id)) 
     console.log(id);
  }, []);

  function handleSignOut() {
    dispatch(signOut());
  }

 
  return (
    <Container>
      <button type="button" onClick={handleSignOut}>Sair</button>
      <Content>
        <Form onSubmit={handleAddAlbums}>
          <h1>Adicionar Imagens</h1>
          <Input name="title" type="text" placeholder="Title"/>
          <Input name="id" type="text" placeholder="IDImg"/>
          <button type="submit">Add</button>
        </Form>
      </Content>
      <Albums>
        <table>
          <thead>
              <tr>
                <td>Title</td>
                <td>IDIMG</td>
                <td>Image</td>
                <td>Remove</td>
              </tr>
            </thead>
            {albums.map(album => (
              <tbody key={album.id}>
                <tr>
                    <td>{album.name}</td>                    
                    <td>{album.id}</td>
                    <td><img src={album.thumbnailUrl} alt="test"/></td>
                    <td><Button onClick={() => RemoveAlbums(album.id)} type="button"><FiTrash2 /></Button></td>                           
                </tr>
              </tbody>
            ))}          
        </table>
      </Albums>
    </Container>
  );
}



