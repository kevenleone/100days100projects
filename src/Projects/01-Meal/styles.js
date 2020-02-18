import styled from 'styled-components'

function handleContainer({soft}) {
  if (soft) {
    return `
      line-height: 55px;
      justify-content: center;
    `
  }
  return `
    padding-top: 20px;
    line-height: 30px;
  `
}

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  ${handleContainer}
`

export const Content = styled.div`
  display: flex;
  padding: 50px;
`;

export const Image = styled.img`
  width: 264px;
  height: 264px;
`;

export const Col = styled.div`
  background-color: red;
  width: 100%;
`;

export const H1 = styled.h1`
  font-size: 33px;
  font-weight: 500;
`
export const H2 = styled.h2`
  font-size: 22px;
  font-weight: 300;
`

export const Button = styled.button`
  background-color: #33C3F0;
  border-radius: 6px;
  color: #fff;
  padding: 10px 30px;
  
  text-transform: uppercase;
  font-weight: 600;
`

export const Ingredients = styled.div``;