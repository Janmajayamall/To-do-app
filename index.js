import React from 'react';
import {  Text, View,  TouchableOpacity } from 'react-native';
import {Drawer } from 'native-base';
//using redux
import {connect} from 'react-redux'
import MainScreen from './src/mainScreen'

//importing componenets
import Menu from './src/menu'
//import Todos from './src/lst.js';

class Index extends React.Component {

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  
render() {
    return (
        <Drawer
        ref={(ref) => { this.drawer = ref; }}
        tapToClose={true}
        openDrawerOffset={0.2}
        content={<Menu closeTheDrawer={this.closeDrawer}/>}
        onClose={() => this.closeDrawer()} >
        <View
            style={{marginTop:40, marginLeft:10}}>
        <TouchableOpacity
            onPress={this.openDrawer}>
            <Text
                left>Menu</Text>
        </TouchableOpacity>
        
        <MainScreen/>
        </View>      
        </Drawer>    
    )
  }
}

// const mapStateToProps = (state) => {
//     return(
//         {
//             screen: state.screen
//         }
//     )
// }

// export default connect(mapStateToProps, undefined)(Index)

export default Index;