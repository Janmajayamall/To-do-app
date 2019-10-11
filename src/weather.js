import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, ImageBackground  } from 'react-native';

class Weather extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      latitude: null,
      longitude: null,
      error: null,
      located: false,
    };
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          located: true,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }



  render(){
    if (this.state.located && this.state.isLoading){
      fetch('https://api.openweathermap.org/data/2.5/weather?lat='+this.state.latitude+'&lon='+this.state.longitude+'&appid=bb38655100632e79625476d1bd763898')
        .then((response) => response.json())
        .then((responseJson) => {
  
          this.setState({
            isLoading: false,
            dataSource: responseJson,
          }, function(){
  
          });
  
        })
        .catch((error) =>{
          console.error(error);
        });
    }
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <ImageBackground source={ this.state.dataSource.weather[0].description=='few clouds' ? require('../images/few_clouds.jpg') : require('../images/cl.jpg')} style={{width:'100%'}}>
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold'}} >Today's weather is {this.state.dataSource.weather[0].description} , with {(this.state.dataSource.main.temp-273.15).toFixed(0)}°C</Text>
        {console.log(this.state.dataSource)}
      </View>
      </ImageBackground>
    );
  }
}

export default Weather;