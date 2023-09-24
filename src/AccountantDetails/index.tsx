import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import {
  CardHeaderDescription,
  CardHeaderTitle,
  CardHeaderWrapper,
  CardWrapper,
  StyledAppendix,
  StyledButton,
  StyledCard,
  StyledDescription,
  StyledLabel,
  StyledLink,
} from '../Card/styles';
import { DetailsWrapper } from './styles';
import { ContainedButton } from '../AccountantList/styles';

const AccountantDetails = () => {
  const location = useLocation();
  const { picture, name, email, cell, gender } = location.state;

  return (
    <>
      <DetailsWrapper>
        <StyledCard>
          <CardWrapper>
            <CardHeaderWrapper>
              <img src={picture.medium} alt='zdjęcie księgowego' width={64} height={64}></img>
              <div>
                <CardHeaderTitle>{gender === 'female' ? 'Twoja księgowa' : 'Twój księgowy'}</CardHeaderTitle>
                <CardHeaderDescription>
                  {name.first} {name.last}
                </CardHeaderDescription>
              </div>
            </CardHeaderWrapper>
            <div>
              <StyledLabel>
                Email:
                <StyledLink href={`mailto:${email}`} underline={true}>
                  {email}
                </StyledLink>
              </StyledLabel>
            </div>
            <div>
              <StyledLabel>
                Telefon:
                <StyledLink href={`tel:${cell}`}>{cell}</StyledLink>
              </StyledLabel>
            </div>
            <div>
              <StyledLabel>
                Średnia cena netto usługi / m-c
                <StyledDescription>
                  350,00
                  <StyledAppendix>PLN</StyledAppendix>
                </StyledDescription>
              </StyledLabel>
            </div>
            <StyledButton>Zamów</StyledButton>
          </CardWrapper>
        </StyledCard>
        <Link to={'/'} tabIndex={-1}>
          <ContainedButton>Powrót</ContainedButton>
        </Link>
      </DetailsWrapper>
    </>
  );
};
export { AccountantDetails };
