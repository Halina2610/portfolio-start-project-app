import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/button/Button";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact with me</SectionTitle>
            <StyledForm>
                <Field placeholder={"Name"}></Field>
                <Field placeholder={"Email"}></Field>
                <Field as={"textarea"} placeholder={"Enter message..."}></Field>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  min-height: 100vh;
  background-color: chartreuse;
`
const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`
const Field = styled.input`
`
