import React from 'react';
import {Text} from 'react-native';
import {View, Card} from 'native-base';
import Weather from './weather'
import {connect} from 'react-redux'

//self made components
import Display from './display';

class AllNotes extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <View
                    style={{alignItems:'center',
                            marginBottom:20}}>
                    <Text 
                    style={{fontSize:25}}>
                    Hello Janmajaya Mall!
                    </Text>
                </View>
                <Card><Weather/></Card>
                <View>
                    {this.props.list.map((obj)=>{
                        return <Display inputText={obj.input}/>})}
                </View>
            </View>)}}

const mapStateToProps = (state) => {
    return(
        {
            list: state.notes
        }
    )
}
export default connect(mapStateToProps, undefined)(AllNotes);