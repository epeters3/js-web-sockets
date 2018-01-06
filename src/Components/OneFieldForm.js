import React from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import Button from './Button';
import { spacing, colors } from "../constants/css-variables";

const FormGroup = styled.div`
    display: flex;
    justify-content: center;
    margin: ${spacing.med} 0;
`;

class OneFieldForm extends React.Component {

    static defaultProps = {
        submitBtnTxt: "Submit",
        onSubmit: () => null,
        placeholder: null,
    };

    state = {
        value: ""
    };

    handleChange = (e) => this.setState({value: e.target.value});

    handleSubmit = () => {
        this.props.onSubmit(this.state.value);
        this.setState({ value: "" });
    }

    render() {
        const { placeholder } = this.props;
        const { value } = this.state;
        const leftElementStyle = {borderTopRightRadius: "0", borderBottomRightRadius: "0"};
        const rightElementStyle = {borderTopLeftRadius: "0", borderBottomLeftRadius: "0"};
        return (
            <FormGroup>
                <TextInput onChange={this.handleChange} placeholder={placeholder} value={value} style={leftElementStyle}/>
                <Button onClick={this.handleSubmit} style={rightElementStyle}>Submit</Button>
            </FormGroup>
        );
    }
}

export default OneFieldForm;