import { useState } from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  View, TextInput, 
  ScrollView,
  FlatList,
} from 'react-native';
import { StatusBar, statusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()},
    ])
    endAddGoalHandler()
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    } )
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
      <Button 
        title='Add New Goal' 
        color={'#b180f0'}
        onPress={startAddGoalHandler}
      />
        <GoalInput 
          onAddGoal={addGoalHandler} 
          onCancel={endAddGoalHandler}
          isVisible={modalIsVisible}
        />
        <View style={styles.goalsContainer}>
            <FlatList 
              data={courseGoals} 
              renderItem={(itemData) => {
                return <GoalItem 
                  id={itemData.item.id}
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                />
              }} 
              keyExtractor={(item,index) => {
                return item.id
              }}
              alwaysBounceVertical={false} 
            />
        </View>
      </View>
    </>
  );
}

/********************************/

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer : {
    flex: 5
  }
  });