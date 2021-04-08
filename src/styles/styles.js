/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 45,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  headerImage: {
    width: 60,
    height: 60,
    borderRadius: 50,

  },
  viewContainer1: {
    flexDirection: 'row',
    flex: 0.2,
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  inputContainer: {
    backgroundColor: '#fff',
    width: width / 1.1,
    padding: 8,
    marginTop: 10,
    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 1.5,
      height: 1.5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.3,
  },
  inputContainer2: {
    backgroundColor: '#fff',
    width: width / 1.3,
    height: 60,
    padding: 6,

    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',

    shadowColor: '#000',
    shadowOffset: {
      width: 1.5,
      height: 1.5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.3,
  },

  input: {
    color: '#000',
    marginLeft: 100,
    padding: 10,

  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },

  imageView: {
    width: 150,
    height: 170,
    marginHorizontal: 10,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },

  imageButton: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    width: '100%',
    height: '30%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 4,
    textAlign: 'center',
  },
  title2: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginVertical: 3,
    color: 'white',
    textAlign: 'center',
  },

  card: {
    marginVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 300,
    marginHorizontal: 20,
    borderRadius: 20,
    marginLeft: 50,
    height: 80,

    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
  },

  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },

  cardLocation: {
    fontSize: 11.5,
    color: '#777',
    marginLeft: 10,
  },

  cardDescription: {
    fontSize: 12,
    marginVertical: 8,
    marginLeft: 10,
  },

  cardImage: {
    flex: 0.3,
  },

  smallButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselCard: {
    marginHorizontal: 10,
    width: width - width / 5,
    height: height / 3,
  },
  carouselHeader: {
    alignItems: 'center',
  },
  carouselHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  carouselHeaderIndicator: {
    marginVertical: 10,
    backgroundColor: '#A50',
    width: 70,
    height: 5,
    borderRadius: 50,
  },
  carouselBody: {
    padding: 20,
  },
  carouselData: {
    textAlign: 'justify',
    fontSize: 16,
  },
  carouselButton: {
    width: width / 1.5,
    height: 50,
  },
  textView: {
    position: 'absolute',
    left: width / 10,
    bottom: height / 40,
  },


  cardView: {
    height: height,
    width: width,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    backgroundColor: 'black',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  containerBox: {
    zIndex: 2,
    opacity: 1,
    backgroundColor: 'transparent',
  },
  header1: {
    width: '100%',
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'flex-end',

  },
  body: {
    alignContent: 'center',
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 10,
  },
  TextView: {
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 500,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  textTouch: {
    marginLeft: 17,
    fontSize: 16,
    alignItems: 'flex-start',
  },
  textTitle: {
    fontSize: 30,
    marginBottom: 10,
    marginLeft: 17,
  },
  img:
  {
    height: 30,
    width: 30,
  },
  img1:
  {
    height: 10,
    width: 10,
  },

});
