//TurtleWolfe.com // //custom components
//ListingDetailsScreen
//ListingDetailsScreen // //custom components
//ListingDetailsScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  Image,
  StyleSheet,
  // Text,
  View,
} from 'react-native'
import AppText from "../../components/AppText";
import AppListItem from "../../components/lists/AppListItem";
import Palette from '../../constants/palette';

interface ListingDetailsScreenProps {
  // alpha?: string;
}

const ListingDetailsScreen: React.FC<ListingDetailsScreenProps> = ({
  // alpha,
}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/adaptive-icon.png")}
      />
      <View style={styles.detailsContainer}>
        <AppText
          style={styles.title}>
          Red jacket for sale
        </AppText>
        <AppText
          style={styles.price}>
          $100
        </AppText>
        <View style={styles.userContainer}>
          <AppListItem
            // image={require("../assets/mosh.jpg")}
            image={require("../../assets/images/Turtlewolfe.png")}
            title="TurtleWolfe"
            subTitle="5 Listings"
            appListItem={
              styles.appListItem
            }
            appListImage={
              styles.applistImage
            }
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // backgroundColor: Palette.primary,
  },
  image: {
    width: "100%",
    height: 300,
    // backgroundColor: Palette.lightGrey,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: Palette.lightGrey,
  },
  userContainer: {
    marginVertical: 40,
    // backgroundColor: Palette.lightGrey,
  },
  appListItem: {
    backgroundColor: Palette.lightGrey,
    marginRight: 13,
    // padding: 30,
  },
  applistImage: {
    backgroundColor: Palette.black,
    // borderRadius: 50,
    // height: 100,
    marginRight: 13,
    // margin: 10,
    // padding: 40,
    // width: 100,
  },
  title: {
    fontFamily: 'CharterBold',
    fontSize: 24,
    fontWeight: '900',
  },
  price: {
    color: Palette.secondary,
    fontFamily: 'CharterBoldItalic',
    fontSize: 20,
    // fontWeight: "bold",
    fontWeight: '900',
    marginVertical: 10,
  },
})

export default ListingDetailsScreen