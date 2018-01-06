import React from 'react';
import styled from 'styled-components';
import { colors, spacing, opaqueColor } from '../constants/css-variables';

const Button = styled.button`
    background-color: ${colors.teal.val(0,0,-10,0)}; /* Make it 10% darker than teal*/
    color: ${colors.white};
    padding: ${spacing.small} ${spacing.med};
    border: none;
    cursor: pointer;
    box-shadow: 0 ${spacing.xsmall} ${spacing.xsmall} ${colors.teal.val(0,-20, -10, 0)};
    border-radius: ${spacing.xsmall};
`;

export default Button;