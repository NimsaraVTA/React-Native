import { StyleSheet, View, TextInput, Button} from 'react-native';
import React, { useState } from 'react';

export default function Addtodo({submitHandler}) {

    const [text,setText] = useState('');

    const changeHandler = (val) => {

        setText(val);

    }

    const pressHandler = () => {
        submitHandler(text);
        setText('');
    }

    return (

        <View>

            <TextInput

                placeholder='Add Todo...'
                onChangeText={changeHandler}
                style={styles.input}
                value={text}

            />

            <Button onPress={pressHandler} title='Add Todo' color='coral' />
        </View>

        )

}

const styles = StyleSheet.create({

    input: {
        marginTop: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',

    }

});
