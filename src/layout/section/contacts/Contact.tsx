import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
                <SectionTitle>Contact with me</SectionTitle>
            <Container>
                <Call>
                    Please fill out the form on this section to contact with me or send me an email. I will answer you as soon as I receive your message.
                </Call>
                    <StyledForm>
                        <Field placeholder={"Name"}></Field>
                        <Field placeholder={"Email"}></Field>
                        <Field as={"textarea"} placeholder={"Enter message..."}></Field>
                        <Button type={"submit"}>Send message</Button>
                    </StyledForm>
                </Container>

        </StyledContacts>
    );
};

const StyledContacts = styled.section`

`

const StyledForm = styled.form`
  max-width: 580px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  
  textarea {
    resize: none;
  } 
  
  ${Button} {
    margin: 0 auto;
  }
`

const Field = styled.input`
  width: 100%;
  padding: 10px;
  font-family: "poppins", sans-serif;
  background-color: ${Theme.colors.secondaryBg};
  border: 2px solid ${Theme.colors.primaryBg};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  
  &::placeholder {
    font-family: "poppins", sans-serif;
  }

  &:nth-child(3) {
    height: 70px;
  }
`

const Call = styled.p`
    text-align: center;
    width: 470px;
    margin: -20px auto 20px;
`