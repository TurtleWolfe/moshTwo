//TurtleWolfe.com // //custom components
//ListingEditScreen
//ListingEditScreen // //custom components
//ListingEditScreen
//TurtleWolfe.com // //custom components
import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
} from 'react-native'
import * as Yup from "yup";
import * as Location from 'expo-location';

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  AppSubmitButton,
} from "../../components/forms";
import Screen from "../../components/AppScreen";
import AppCategoryPickerItem from "../../components/AppCategoryPickerItem";
import PickerItem from "../../components/AppPickerItem";
import FormImagePicker from '../../components/forms/FormImagePicker';

const validationSchema = Yup.object().shape({
  title: Yup
    .string()
    .required()
    .min(1)
    .label("Title"),
  price: Yup
    .number()
    .required()
    .min(1)
    .max(10000)
    .label("Price"),
  description: Yup
    .string()
    .label("Description"),
  category: Yup
    .object()
    // .required()
    .nullable()
    .label("Category"),
  images: Yup
    .array()
  // .min(1, 'Please select at least one image.')
});

const categories = [
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Misc. & Other",
    value: 9,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
];

interface ListingEditScreenProps {
  // location?: {coords?:{}}
} // typeScript

const ListingEditScreen: React.FC<ListingEditScreenProps> = ({

}) => {
  const [location, setLocation] = useState();
  // const [category, setCategory] = useState(categories[0]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        // setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // setLocation({ latitude, longitude });
      setLocation(location);
    })();
  }, []);

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values: any) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker
          name='images'
        />
        <FormField
          name="title"
          maxLength={255}
          placeholder="Title"
        />
        <FormField
          name="price"
          keyboardType="numeric"
          maxLength={8} // 10 000.99
          width={120}
          placeholder="Price"
        />
        <Picker
          items={categories}
          numberOfColumns={3}
          name="category"
          PickerItemComponent={AppCategoryPickerItem}
          // PickerItemComponent={PickerItem}
          width='50%'
          placeholder="Category"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <AppSubmitButton title="Post" />
      </Form>
    </Screen>
  )
} // ListingEditScreen component

const styles = StyleSheet.create({
  container: {
    padding: 10,

  },
  // textContainer: {
  //   backgroundColor: 'yellow',
  // },
}) // style sheet for ListingEditScreen

export default ListingEditScreen
// default export of ListingEditScreen