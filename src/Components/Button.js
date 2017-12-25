import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../constants/css-variables';

const Button = styled.button`
    background: linear-gradient(${colors.purple}, ${colors.fuchsia});
    color: ${colors.white};
    padding: ${spacing.small};
    border: none;
    cursor: pointer;
`;

export default Button;