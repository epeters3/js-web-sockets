import React from 'react';
import styled from 'styled-components';
import { colors } from './constants/css-variables';

import Title from "./Components/Title";
import OneFieldForm from "./Components/OneFieldForm";
import P from "./Components/P";
import SocketIO from "./Components/SocketIO";
import PArray from "./Components/PArray";

const Main = styled.main`
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const App = () => (
    <Main>
        <Title>Let's Play With Web Sockets! ⚡</Title>
        <P>Lets send messages!</P>
        <SocketIO>
            {({emit, data}) => ([
                <PArray paragraphs={data} />,
                <OneFieldForm placeholder="Type your message here..." onSubmit={emit}/>
            ])}
        </SocketIO>
    </Main>
);

export default App;