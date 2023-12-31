import { useState } from 'react';
import { 
    View, 
    StyleSheet, 
    TextInput, 
    Button, 
    Modal,
    Image
} from 'react-native'

const GoalInput = ({onAddGoal, onCancel, isVisible}) => {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    const addGoalHandler = () => {
        /* Disables button on empty input */
        if (enteredGoalText.trim() === '') {
            return;
        }
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal visible={isVisible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image 
                    style={styles.image} 
                    source={require('../assets/images/goal.png')}
                />
                <TextInput 
                style={styles.textInput} 
                placeholder='Your course goal' 
                onChangeText={goalInputHandler}
                value={enteredGoalText}
                />
                <View style={styles.bottonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title='Add Goal'
                            onPress={addGoalHandler}
                            color={'#b180f0'}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title='Cancel'
                            onPress={onCancel}
                            color={'#f31282'}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        padding: 16,
        paddingBottom: 24,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        fontSize: 18,
        width: '100%',
        padding: 12
    },
    bottonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    },
    image: {
        width: '40%',
        height: '20%',
        margin: 20
    }
});

export default GoalInput