import React from 'react';
import H1 from './H1.js';
import styled from 'styled-components';
import { colors, spacing, verticalSpacing } from "../constants/css-variables.js";

const TitleBlock = styled.div`
    background-color: ${colors.blue};
    margin: ${verticalSpacing.med};
    box-shadow: 1em 0.5em ${colors.navy};
`;

const Title = ({children}) => (
    <TitleBlock>
        <H1>{children}</H1>
    </TitleBlock>
);

export default Title;