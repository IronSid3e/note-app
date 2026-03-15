import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import NoteForm from "../components/NoteForm";
import { Context } from "../context/BlogContext";

export default function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(Context);
  return (
    <NoteForm
      isEditable={false}
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Home"));
      }}
    />
  );
}

const styles = StyleSheet.create({});
