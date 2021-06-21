//TurtleWolfe.com // //custom components
//ListingsScreen
//ListingsScreen // //custom components
//ListingsScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  FlatList,
  StyleSheet,
} from 'react-native'

import AppScreen from "../../components/AppScreen";
import AppCard from "../../components/AppCard";
import Palette from '../../constants/palette';

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../../assets/images/Turtlewolfe.png"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 200,
    image: require("../../assets/images/couch.jpg"),
  },
  {
    id: 3,
    title: "Red jacket for sale",
    price: 300,
    image: require("../../assets/images/jacket.jpg"),
  },
  {
    id: 4,
    title: "Couch in great condition",
    price: 400,
    image: require("../../assets/images/couch.jpg"),
  },
];

interface ListingsScreenProps {
  data?: {}[];
  // children?: React.ReactNode[];
}

const ListingsScreen: React.FC<ListingsScreenProps> = ({
  data,
  // children = <Text>default ListingsScreen</Text>,
}) => {
  return (
    <AppScreen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 7,
    backgroundColor: Palette.lightGrey,
  },
})

export default ListingsScreen