import React from 'react';
import styled from 'styled-components';
import { colors, spacing, verticalSpacing } from "../constants/css-variables";

const Input = styled.input`
    height: 2em;
    border: none;
    outline: none;
    background-color: ${colors.teal.val()};
    padding: ${spacing.small} ${spacing.med};
    box-shadow: 0 ${spacing.xsmall} ${spacing.xsmall} ${colors.teal.val(0,-20, -10, 0)};
    border-radius: ${spacing.xsmall};
`;

const TextInput = ({children, ...props}) => (
    <Input {...props} type="text">{children}</Input>
);

export default TextInput;