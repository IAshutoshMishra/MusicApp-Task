import React, {useEffect, useState} from 'react'
import { Text, View, SafeAreaView, FlatList, RefreshControl } from 'react-native'
import {CommonStyles} from 'styles';
import Loader from 'constants/loader';
import List from 'components/List';
import URL from "config/urls";
import {connect} from "react-redux";
import {musicData, musicDetails} from "model/action/action";

const Home = (props) => {
    const {navigation} = props;
    useEffect(() => {
        songsList()
    }, [])
    const [loader, setLoader] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const songsList = async () => {
        console.log('data')
        await fetch(URL.MichealJacksonSongs, {
          method: "get",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
        })
          .then((response) => response.json())
          .then(responseJson => {
            setLoader(false)
            setRefreshing(false)
              const resultCount = responseJson.resultCount;
              const results = responseJson.results.filter(item => item.wrapperType == "track");
              props.addList(results);
              setSongCount(resultCount);
          })
          .catch((err) => {
          });
      };

      const goToDetails = (data) => {
        props.addDetails(data);
        navigation.navigate('Details');
      }

      const onRefresh = () => {
        setRefreshing(true)
        songsList()
      }

console.log(props.musicData)
    return (
        <SafeAreaView style={CommonStyles.container}>
            {loader && <Loader />}
            <FlatList
                data={props.musicData}
                renderItem={({ item }) => <List action={goToDetails} data={item} />}
                keyExtractor={item => item.trackId}
                refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </SafeAreaView>
    )
}


//make this component available to the app
const mapStateToProps = (state) => {
    return {
      musicData: state.musicData.musicData,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addList: (value) => {
        dispatch(musicData(value));
      },

      addDetails: (value) => {
        dispatch(musicDetails(value));
      },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Home);

