import { StyleSheet } from 'react-native';
import Constants from '../constants';

const styles = {
  animationStyle: {
    height: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 65,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 65,
  },
  container: {
    backgroundColor: Constants.Colors.DASHBOARD_BG_COLOR,
    flex: 1,
    padding:10
  },
  overLayerContainer: {
    height: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 130,
    justifyContent: "center",
    alignItems: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  listContainer: {flexDirection: 'row', justifyContent: 'space-between', padding:10, borderRadius: 15, marginBottom: 8, backgroundColor: '#e9e9e9'},
  imageContainer: {height: 100, width:100, borderRadius: 15, backgroundColor: '#c9c9c9'},
  textContainer: {flex:1, marginLeft: 10},
  textStyleTitle: {margin:5, fontWeight: 'bold', fontSize: 16,},
  textStyleSubTitle: {margin:5, top: -10, fontWeight: 'normal', fontSize: 14,},
  textStyleDetails: {margin:5, top: -15, fontWeight: 'normal', fontSize: 8,},
  coverImage: {height: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 80,  width:(Constants.BaseStyle.DEVICE_WIDTH / 100) * 95, borderRadius: 3, resizeMode: 'contain',},
  detailsTextStyleTitle: {margin:5, fontWeight: 'bold', fontSize: 22, textAlign: 'center'},
  detailsTextStyleSubTitle: {margin:5, top: -10, fontWeight: 'normal', fontSize: 14, textAlign: 'center'},
};

export default StyleSheet.create(styles);
