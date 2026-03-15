import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";

export default function ShowScreen({ route }) {
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>Başlık</Text>
        <Text style={styles.content}>{blogPost.title}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>İçerik</Text>
        <Text style={styles.content}>{blogPost.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  container: {
    backgroundColor: "#fcfcfc",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 20,
    marginBottom: 15,
    borderRadius: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 5,
  },
  content: {
    fontSize: 20,
    color: "#333",
    lineHeight: 28,
    fontWeight: "400",
  },
});
