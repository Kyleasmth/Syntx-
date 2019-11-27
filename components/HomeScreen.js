import React from 'react';
import { View,FlatList,StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { getWeather } from '../actions/weatherActions';
// import '../weather-icons';

class HomeScreen extends React.Component {
  componentDidMount(){
    this.props.getWeather();
  }

  renderItem = (item,index) => {
    const iconCode = item.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    return (
        <ListItem
            title={item.name}
            subtitle={item.sys.country}
            leftAvatar={{ source: { uri: iconurl } }}
            key={index}
            onPress={() => {
              this.props.navigation.navigate('Details',{item:item}) 
            }}
        />
    )
  }

  render() {
    const {locations} = this.props.locations;
    return (
      <View >
        <FlatList
          data={locations}
          renderItem={({ item, index }) => this.renderItem(item, index.toString() )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }  
}

function mapStateToProps (state) {
  return {
    locations: state.weatherReducers
  }
}

function mapDispatchToProps (dispatch) {
  return {
      getWeather: () => dispatch(getWeather()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
