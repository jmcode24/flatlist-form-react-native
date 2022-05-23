import React from "react";
import { View, SafeAreaView, Text, StyleSheet, FlatList, Image } from "react-native";
import { Feather, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

const Flatlist = () => {
  const list = [{name: "Kay Korkor", number: "424-578-6127", img: require("../../assets/1.korkor.jpg") },
                {name: "Sillas Aggrey", number: "424-578-6127", img: require("../../assets/2.sillas.jpg")},
                {name: "Kelvin Kabute", number: "424-578-6127", img: require("../../assets/3.Kelvin.jpg")},
                {name: "Jamil Mohammed", number: "424-578-6127", img: require("../../assets/01.jpg")},
                {name: "Jay West", number: "424-578-6127", img: require("../../assets/5.jay.png")},
                {name: "Joseph Nartey", number: "424-578-6127", img: require("../../assets/5.joe.jpg")},
                {name: "Henry Quartey", number: "424-578-6127", img: require("../../assets/7.henry.jpg")},
                {name: "Trusty Cole", number: "424-578-6127", img: require("../../assets/8.trusty.jpg")}]

  return (
    <View style={styles.container}>
      <FlatList showsVerticalScrollIndicator={false} data={list} keyExtractor={(item, index) => {return index;}}
        renderItem={({ item }) => (
          <View style={styles.details}>
            <View style={styles.imgCont}><Image source={item.img} style={styles.imageDetail}/></View>
            <View style={styles.textDetail}>
              <Text style={{fontSize: 20, fontWeight: "bold"}}>{item.name}</Text>
              <Text style={{fontSize: 15, fontWeight: "bold", color: "grey"}}>{item.number}</Text>
            </View>
            <View style={styles.icons}>
              <Feather name="phone" size={24} color="deepskyblue" />
              <MaterialCommunityIcons name="message-processing-outline" size={24} color="deepskyblue" style={{alignSelf: "center"}} />
              <Entypo name="dots-three-vertical" size={24} color="grey" />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },

  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20
  },

  imageDetail: {
    resizeMode: "cover",
    height: 70,
    width: 70,
    borderRadius: 35,
  },

  imgCont: {
    flex: 2
  },

  textDetail: {
    flex: 4,
    marginHorizontal: 15
  },

  icons: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",

  }
});

export default Flatlist;