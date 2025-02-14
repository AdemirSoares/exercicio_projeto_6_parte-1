import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterBar = styled.div`
  background-color: ${colors.lightPink};
  width: 1366px;
  height: 298px;
  display: block;
  alingn-items: center;
  justify-content: center;
  margin-top: 50px;

  .logo {
    padding-top: 40px;
    padding-bottom: 32.5px;
  }

  a {
    display: flex;
    justify-content: center;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .text {
    color: ${colors.pink};
    margin-top: 80px;
    margin-bottom: 40px;
    text-align: center;
  }
}
`
