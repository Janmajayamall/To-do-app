import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import {Container, Drawer, Icon, Card } from 'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid'


//import firebase from 'react-native-firebase';

//importing componenets
import ListGiven from './src/list'
import Weather from './weather.js';
//import Todos from './src/lst.js';

export default class App extends React.Component {

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  componentDidMount(){
  }
  
  render() {
    
    return (
 
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        tapToClose={true}
        openDrawerOffset={0.2}
        content={<ListGiven/>}
        onClose={() => this.closeDrawer()} >
      <View
          style={{marginTop:40, marginLeft:10}}>
        <TouchableOpacity
            onPress={this.openDrawer}>
            <Text
              left>Menu</Text>
        </TouchableOpacity>
        <View
          style={{alignItems:'center',
                  marginBottom:20}}>
          <Text 
            style={{fontSize:25}}>
            Hello Janmajaya Mall!
          </Text>
        </View>
        <Card><Weather/></Card>
        <ListGiven/>
        
        
      </View>      
      </Drawer>
     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


