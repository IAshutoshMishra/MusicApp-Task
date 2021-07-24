import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Images from 'constants/images';
import {CommonStyles} from 'styles';

const List = (props) => {
    const {data, action} = props;
    return (
        <TouchableOpacity onPress={()=>action(data)}>
        <View style={CommonStyles.listContainer} key={data.trackId}>
            <View style={CommonStyles.imageContainer}>
                <Image
                    style={CommonStyles.logo}
                    source={data.artworkUrl100 != null ? {uri: data.artworkUrl100} : Images.placeholderImage}
                />
            </View>
            <View style={CommonStyles.textContainer}>
                <Text style={CommonStyles.textStyleTitle}>{data.trackName || data.collectionName}</Text>
                <Text style={CommonStyles.textStyleSubTitle}>{data.artistName}</Text>
                <Text style={CommonStyles.textStyleDetails}>{data.shortDescription || data.trackCensoredName}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default List