import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import { Container,  Text, ListItem} from 'native-base';
import {connect} from 'react-redux'

import {changeScreen} from './../store/Actions/actions'

class Menu extends React.Component {
    constructor(props){
       super(props);

    }

    render(){
        return(
            <Container>
                <Image source={{uri:'https://images.unsplash.com/photo-1532911557891-d12f6b98dddc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}} style={{height:250, width:300}}/>
                <Text style={{backgroundColor:'#E8E8E8', padding:8, fontSize:14 }}>NOTES</Text>
                    <TouchableOpacity 
                        onPress={()=>{
                            this.props.closeTheDrawer();  
                            this.props.changeScreen('ALL_NOTES');    
                        }}
                        style={{marginLeft:10, borderBottomColor:'#E8E8E8', borderBottomWidth:1, padding:5, paddingBottom:10, paddingTop:10}}>                        
                            <Text>All</Text>                        
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=>{
                            this.props.closeTheDrawer(); 
                            this.props.changeScreen('NEWNOTE');    
                        }}
                        style={{marginLeft:10, borderBottomColor:'#E8E8E8', borderBottomWidth:1, padding:5, paddingBottom:10, paddingTop:10}}>                        
                            <Text>Add New</Text>
                    </TouchableOpacity>
            </Container>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return({
        changeScreen: (screenName) => {dispatch(changeScreen(screenName))}
    })
}


export default connect (undefined, mapDispatchToProps)(Menu);

// style={{paddingTop:35}