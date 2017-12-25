import React from 'react';
import styled from 'styled-components';
import { colors, spacing, verticalSpacing } from "../constants/css-variables";

const P = styled.p`
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    font-family: Arial;
    padding: ${spacing.med};
    margin: ${verticalSpacing.med};
`;

export default ({backgroundColor=colors.navy, color=colors.aqua, children, ...props,}) => (
    <P {...{...props, backgroundColor, color}}>{children}</P>
);