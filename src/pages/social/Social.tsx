import React from 'react'
import { Container, ImgContainer, Description } from './Styles';
import Badge from 'react-bootstrap/Badge'
import ImgRedesLinks from '../../components/ImgRedesLinks/ImgRedesLinks';

function Social() {
  return (
    <Container>
      <Badge variant="success">
        Redes Sociais
      </Badge>{' '}
      <Description>Tenha fácil acesso as minhas redes sociais</Description>
      <ImgContainer>
        <ImgRedesLinks />
      </ImgContainer>
    </Container>
  )
}

export default Social
