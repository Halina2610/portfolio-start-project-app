import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {SocialIconsList} from "../../../components/SocialIconsList";

export const Contacts = () => {
    return (
        <StyledContacts id={"section4"}>
            <SectionTitle>Contact with me</SectionTitle>
            <Container>
                <Call>
                    Please fill out the form on this section to contact with me or <a
                    href={"mailto:vievamaxa@gmail.com"}>send me an email</a>. I will answer you as soon as I receive
                    your message.
                    <SocialIconsList/>
                </Call>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
`;

const Call = styled.p`
  max-width: 580px;
  text-align: center;
  margin: 20px auto;

  a {
    color: ${Theme.colors.accent};
    font-weight: 700;

    &:hover {
      border-bottom: 2px solid ${Theme.colors.accent};
    }
  }
`;