import React from 'react';

import ButtonComponent from '../../../components/ButtonComponent/ButtonComponents';
import MainBannerContainer from '../BannerLayoutContainer'


const MainBannerComponent = () => {
  return (
      <>
        <MainBannerContainer title="Vamos encontrar seu assento?" auxiliarClass="MainBannerComponent">
          <div className="MainBannerContainer__block">
            <img src="../assets/images/dr_tupan.png" alt="logo da Toupan, o melhor para sua casa"/>

            <div className="MainBannerContainer__block--buttons">
              <ButtonComponent className="primary">
                <div className="icon-area bordered">
                  <span>?</span>
                </div>

                <div>
                  <h3>Conheça o modelo</h3>
                </div>
              </ButtonComponent>
              
              <ButtonComponent className="danger">
                <div className="icon-area">
                  <span>?</span>
                </div>

                <div>
                  <h3>Não conheço o modelo</h3>
                  Ajude-me a encontra-lo
                </div>
              </ButtonComponent>
            </div>
          </div>
        </MainBannerContainer>
      </>
  )
}

export default MainBannerComponent;
