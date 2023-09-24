import React from 'react';
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
} from './styles';
import { AccountantType } from '../AccountantList/types';
import { Link } from 'react-router-dom';

export const Card = ({ accountant: { picture, name, email, cell, gender } }: { accountant: AccountantType }) => {
  return (
    <>
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
          <Link to={`/ksiegowi/${email}`} state={{ picture, name, email, cell, gender }} tabIndex={-1}>
            <StyledButton>Dowiedz się więcej</StyledButton>
          </Link>
        </CardWrapper>
      </StyledCard>
    </>
  );
};
