import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  margin-bottom: 48px;
  position: relative;
  border: 1px solid ${colors.pink};
  height: 100%;

  .capa {
    width: 472px;
    height: 217px;
  }
`

export const Titulos = styled.div`
  width: 472px;
  hegth: 217px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
`

export const Avaliacao = styled.div`
  display: flex;
  width: 55px;
  heigth: 21px;
  justify-content: space-between;
  align-items: center;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.pink};
`

export const Text = styled.p`
  color: ${colors.pink};
  font-size: 14px;
  margin: 16px 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
