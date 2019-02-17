import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../assets/colors'

export default StyleSheet.create({
  headerText: {
    color: colors.white,
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  modalContent: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    height: 425,
    padding: 5 
  },
  buttonStyle: {
    backgroundColor: colors.grape,
    borderRadius: 4, 
  },
  headerContainer: {
    backgroundColor: colors.eggplant,
    flexDirection: 'row',
    alignItems: 'center', 
  },
})
