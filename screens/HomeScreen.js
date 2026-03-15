import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { Context } from "../context/BlogContext";
import Feather from "@expo/vector-icons/Feather";

export default function HomeScreen({ navigation }) {
  const { state, addBlogPost, deleteBlogPost, getBlogPosts } =
    useContext(Context);

  useEffect(() => {
    getBlogPosts();

    const unsubscribe = navigation.addListener("focus", () => {
      getBlogPosts();
    });

    return unsubscribe;
  }, []);

  return (
    <View>
      {/* <Button title="ekle" onPress={addBlogPost} /> */}

      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}> {item.title}</Text>

                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginVertical: 8,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  deleteIcon: {
    padding: 5,
  },
});
