import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../constants/css-variables';
import P from './P';

const Section = styled.section`
    background-color: ${colors.white};
    padding: 0 ${spacing.med};
    margin: 0 ${spacing.lg};
`;

const PArray = ({paragraphs=[], ...props}) => {

    if (paragraphs.length > 0) {
        return (
            <Section {...props}>
                {paragraphs.map(txt => <P backgroundColor={colors.silver} color={colors.navy}>{txt}</P>)}
            </Section>
        );
    } else {
        return null;
    }
};

export default PArray;