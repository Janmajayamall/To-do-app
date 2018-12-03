import React from 'react';
import { List, ListItem, Body, Text, Content, Right} from 'native-base';
import {TouchableOpacity, View} from 'react-native';
import {} from 'react-native-easy-grid';



class ListGiven extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
       
            <ListItem 
                style={{marginRight:20}}>
              <Body>
                <Text>Topic</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Text>View</Text>
                </TouchableOpacity>
              </Right>
            </ListItem>
        )
    }
}

export default ListGiven;