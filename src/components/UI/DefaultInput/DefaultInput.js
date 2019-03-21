import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => {
    return (
        <TextInput
            {...props}
            style={[styles.input, props.style]}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#eee',
        margin: 8,
        padding: 5
    }
});

export default defaultInput;