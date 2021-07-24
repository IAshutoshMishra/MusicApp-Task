import React, {useCallback} from 'react'
import { View, Text, SafeAreaView, Image, Linking} from 'react-native';
import Images from 'constants/images';
import {CommonStyles} from 'styles';
import {connect} from "react-redux";
import {musicData, musicDetails} from "model/action/action";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const Details = (props) => {
    const {navigation, musicDetails} = props;
    const BuyNow = async(url) => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
      };
    return (
        <SafeAreaView style={CommonStyles.container}>
            <Image style={CommonStyles.coverImage}
                    source={musicDetails.artworkUrl100 != null ? {uri: musicDetails.artworkUrl100} : Images.placeholderImage}/>
            <Text style={CommonStyles.detailsTextStyleTitle}>{musicDetails.trackName || musicDetails.collectionName}</Text>
                <Text style={CommonStyles.detailsTextStyleSubTitle}>{musicDetails.artistName}</Text>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding:5}}>
                    <TouchableOpacity style={{padding: 6, width:120, height:35, backgroundColor:'#f00154', borderRadius:5, marginLeft: 25}} onPress={()=>BuyNow(musicDetails.previewUrl)}>
                        <Text style={{color: '#f6f6f6', textAlign: 'center', alignSelf:'center'}}>Play Now</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding: 6, width:120, height:35, borderWidth:2, borderColor: '#f00154', borderRadius:5, marginRight: 25}} onPress={()=>BuyNow(musicDetails.trackViewUrl)}>
                        <Text style={{color: '#f00154', textAlign: 'center', alignSelf:'center'}}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            <ScrollView style={{padding:5}}>
                <Text style={{color: '#363636', padding:2, alignSelf:'center'}}>{musicDetails.shortDescription || musicDetails.longDescription}</Text>
                {musicDetails.trackHdRentalPrice != null &&
                <View style={{ padding:10, alignSelf:'center', flexDirection: 'row'}}>
                    <Text style={{color: '#363636', padding:10, alignSelf:'center'}}>Rental Price: </Text>
                    <Text style={{color: '#f00154', padding:10, alignSelf:'center', right:10}}>{musicDetails.trackHdRentalPrice}</Text>
                </View>
                }
            </ScrollView>
        </SafeAreaView>
    )
}

//make this component available to the app
const mapStateToProps = (state) => {
    return {
      musicDetails: state.musicDetails.musicDetails,
    };
  };

export default connect(mapStateToProps, null)(Details);
