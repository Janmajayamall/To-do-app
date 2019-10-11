import React from 'react';
import {Text, } from 'native-base';
import {View} from 'react-native';

class ListGiven extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
              <View style={{borderWidth:2, borderRadius:2, padding:5, borderColor:'#DCDCDC', marginRight:1}}>
                <Text style={{fontSize:15}}>{this.props.inputText}</Text>
              </View>)}}
export default ListGiven;