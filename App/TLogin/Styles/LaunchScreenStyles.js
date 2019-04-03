import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    flex: 2, backgroundColor: '#ff9900'
  },
  logo: {
    // marginTop: Metrics.doubleSection,
    // height: Metrics.images.logo,
    // width: Metrics.images.logo,
    height: 250,
    width: 250,
    resizeMode: 'contain',
    marginBottom: 70
  },
  centered: {
    alignItems: 'center'
  },
  buttonGroup: {
    // backgroundColor: 'white',
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // height:60,
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#841584',
    padding: 10,
    margin: 10,
    flex: 1,
    borderRadius:10
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  },
  sectionText: {
    fontSize: 50,
    color: 'black',
    textAlign: 'center'
  },
  sectionTextTwo: {
    fontSize: 40,
    color: 'black',
    textAlign: 'center'
  }
})
