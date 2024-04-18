import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import MealDetails from "../MealDetails";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  function selectMealHandler() {
    navigation.navigate("MealDetail", { mealId: id });
  }

  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: "#ccc" }} onPress={selectMealHandler}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
    marginTop: 8,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  press: {
    flex: 1,
  },
});
