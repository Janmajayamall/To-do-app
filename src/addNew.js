import React from 'react';
import {TextInput, Text, TouchableOpacity} from 'react-native';
import {Picker, View} from 'native-base';
import {connect} from 'react-redux'
import {addNew} from './../store/Actions/actions'

class AddNew extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selected: undefined,
            inputText: ''        
        }
    }
    onValueChange = (value) => {
        this.setState({
            selected: value
          });
    }
    valueChanged = (value) =>{
        this.setState({
            inputText: value
          });
    }
    addValue = () =>{
        this.props.addNew(this.state)
        this.setState(()=>{
            return({
                selected: undefined,
                inputText: ''        
            })
        })
    }
    render(){
        return(
    <View>
            <View
                style={{flexDirection:'row'}}>
                <Picker
                mode="dropdown"
                placeholder="Select Note or Todo?"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                style={{ width: undefined,  marginLeft:70}}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange}
                >
                <Picker.Item label="Note" value="note" />
                <Picker.Item label="ToDo" value="todo" />
                </Picker>

                <TouchableOpacity
                    style={{marginLeft:75, marginTop:15}}
                    onPress={this.addValue}>
                    <Text>
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
            

            <TextInput
                value={this.state.inputText}
                onChangeText={this.valueChanged}
                placeholder='Please write here'
                multiline={true}/>
    </View>)}}

const mapDipatchToProps = (dispatch) => {
    return(
        {
            addNew: (stateVal) => (dispatch(addNew(stateVal)))})}
export default connect(undefined, mapDipatchToProps)(AddNew);