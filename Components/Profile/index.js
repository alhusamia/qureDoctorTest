import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import styles from "./styles";

export default function index() {
  return (
    <View>
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={{
            uri:
              "https://images.theconversation.com/files/223729/original/file-20180619-126566-1jxjod2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
          }}
        >
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={{
                uri:
                  "https://s3-eu-west-1.amazonaws.com/intercare-web-public/wysiwyg-uploads%2F1569586526901-doctor.jpg",
              }}
            />
            <Text style={styles.userNameText}>Ali Alhusamia</Text>
            <View style={styles.userAddressRow}>
              <View>
                <MaterialIcons name="place" size={26} color="white" />
              </View>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>Amman, Jordan</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.Telcontainer}>
        <View style={styles.iconRow}>
          <Ionicons name="md-call" style={styles.telIcon} />
        </View>
        <View style={styles.telRow}>
          <View style={styles.telNumberColumn}>
            <Text style={styles.telNumberText}>0777763313</Text>
          </View>
          <View style={styles.telNameColumn}>
            <Text style={styles.telNameText}>mobile</Text>
          </View>
        </View>
      </View>
      <View style={styles.Telcontainer}>
        <View style={styles.iconRow}>
          <Ionicons name="md-mail" style={styles.telIcon} />
        </View>
        <View style={styles.telRow}>
          <View style={styles.telNumberColumn}>
            <Text style={styles.telNumberText}>ali.alhusamia@gmail.com</Text>
          </View>
          <View style={styles.telNameColumn}>
            <Text style={styles.telNameText}>personal</Text>
          </View>
        </View>
      </View>
      <View style={styles.Telcontainer}>
        <View style={styles.iconRow}>
          <Ionicons name="ios-person" style={styles.telIcon} />
        </View>
        <View style={styles.telRow}>
          <View style={styles.telNumberColumn}>
            <Text style={styles.telNumberText}>Surgry Doctor</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
