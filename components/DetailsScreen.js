import React from 'react'
import { View, Text, FlatList} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux'
import { getWeatherDetails } from '../actions/weatherActions';

class DetailsScreen extends React.Component {
  componentDidMount(){
    this.props.getWeatherDetails(this.props.navigation.state.params.item.id)
  }

  renderDetailsItem = (item,index) => {
    const iconCode = item.weather[0].icon;
    var iconurl = "https://openweathermap.org/img/w/" + iconCode + ".png";
    return (
      <View>
        <Card
          title={item.dt_txt}
          image={{ uri: iconurl }}
        >
          <Text style={{marginBottom: 10}}>
            {item.weather[0].description}
          </Text>
        </Card>
      </View>
    )
  }

  render() {
    const {locationDetails} = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
          <FlatList
            data={locationDetails}
            renderItem={({ item, index }) => this.renderDetailsItem(item, index.toString() )}
            keyExtractor={(item, index) => index.toString()}
          />
      </View>
    );
    }  
  }

  function mapStateToProps (state) {
    return {
      locationDetails: state.weatherReducers.locationDetails
    }
  }
  
  function mapDispatchToProps (dispatch) {
    return {
        getWeatherDetails: (id) => dispatch(getWeatherDetails(id)),
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DetailsScreen)