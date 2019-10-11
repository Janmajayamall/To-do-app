import React from 'react';
import {View} from 'react-native';
//using redux
import {connect} from 'react-redux'

//import screens
import AllNotes from './allNotes';
import NewNote from './addNew'


//import firebase from 'react-native-firebase';

//import Todos from './src/lst.js';

class MainScreen extends React.Component {

  
  
  render() {
    
    switch(this.props.screen){

        case('ALL_NOTES'):
            return (
                <AllNotes/>
            )
        case('NEWNOTE'):
            return (
                <NewNote/>
            )
        default:
                return(
                    <View>
                        
                    </View>
                )
    }

    
  }
}

const mapStateToProps = (state) => {
    return(
        {
            screen: state.screen
        }
    )
}

export default connect(mapStateToProps, undefined)(MainScreen)
