import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact with me</SectionTitle>
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
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`
const Call = styled.p`
    text-align: center;
    width: 470px;
    margin: -20px auto 20px;
`

const Field = styled.input`
`
