import styled from "styled-components"

const WellComeComponent = styled.div`
      
`

const WelcomeScreen = () => {
      

      return (
            <WellComeComponent>
                  <div className="rectangle" />
                  <div className="word">TO-DO LIST</div>
                  <div className="power">made by doublesevenspot</div>
            </WellComeComponent>
      )
}

export default WelcomeScreen