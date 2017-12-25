import React from 'react';
import styled from 'styled-components';
import { colors, spacing, verticalSpacing } from "../constants/css-variables";

const Input = styled.input`
    height: 2em;
    border: none;
    outline: none;
    background-color: ${colors.teal};
    padding: ${spacing.small} ${spacing.med};
`;

const TextInput = ({children, ...props}) => (
    <Input {...props} type="text">{children}</Input>
);

export default TextInput;