import React from "react";
import { ScrollView, StatusBar } from "react-native";

import spaceQuestions from "../data/space";
import westernsQuestions from "../data/westerns";
import computerQuestions from "../data/computers";

import geoQuestions from "../data/geo";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Géographie"
      color="#FF5C58"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Géographie",
          questions: geoQuestions,
          color: "#FF5C58"
        })
      }
    />
    <RowItem
      name="Histoire"
      color="#FE8F8F"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Histoire",
          questions: westernsQuestions,
          color: "#FE8F8F"
        })
      }
    />
    <RowItem
      name="Politique"
      color="#FCD2D1"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Politique",
          questions: computerQuestions,
          color: "#FCD2D1"
        })
      }
    />
    <RowItem
      name="Social"
      color="#FFEDD3"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Social",
          questions: computerQuestions,
          color: "#FFEDD3"
        })
      }
    />
  </ScrollView>
);
