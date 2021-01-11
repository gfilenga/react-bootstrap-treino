import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f9f9f9;
  height: 970px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    svg {
      height: 400px;
      width: 700px;
    }
  }

  @media screen and (max-width: 640px) {
    svg {
      height: 300px;
      width: 600px;
    }
  }
  @media screen and (max-width: 470px) {
    svg {
      height: 200px;
      width: 500px;
    }
  }
`;

export const ImgContainer = styled.div`
    padding-right: 10%;
    color: #f9f9f9;
    background:'#f9f9f9';
`;

export const Description = styled.p`
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`;
