import React from 'react';
import firebase from 'react-native-firebase';

class Todos extends React.Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('todos');
    this.state = {
      textInput: '',
      updateTextInput(value) {
        this.setState({ textInput: value });
      }
    };
  }
  render() {
    <View>
      <ScrollView>
        <Text>To-Do List</Text>
      </ScrollView>
      <TextInput
        placeholder={'Add TODO'}
        value={this.state.textInput}
        onChangeText={(text) => this.updateTextInput(text)}
      />
      <Button
        title={'Add TODO'}
        disabled={true}
        onPress={() => {}}
      />
    </View>
  }
}

export default Todos;