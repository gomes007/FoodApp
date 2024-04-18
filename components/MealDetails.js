import { View, Text, StyleSheet } from "react-native";

const MealDetails = ({duration, complexity, affordability}) => {
    return (
        <View style={styles.details}>
          <Text>{duration}m </Text>
          <Text>{complexity} </Text>
          <Text>{affordability}</Text>
        </View>
    )
    };


export default MealDetails;


const styles = StyleSheet.create({    
    details: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      backgroundColor: "#f2f2f2",
      borderRadius: 5,
      marginTop: 10,
    },
  });