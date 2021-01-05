import React from 'react';
import { Card } from 'react-bootstrap';
import Img from '../../assets/svg-5.svg';
import { CardContainer, Container } from './Styles';

function About() {
  return (
    <Container>
      <CardContainer>
        <Card style={{ width: '800px' }} className="bg-dark text-white text-center">
          <Card.Img src={Img} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Sobre mim</Card.Title>
            <Card.Text>Aspirante a desenvolvedor web</Card.Text>
            <Card.Text>Em busca de oportunidade para colocar em prática o que venho aprendendo em soluções reais</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </CardContainer>
    </Container>
  )
}

export default About
