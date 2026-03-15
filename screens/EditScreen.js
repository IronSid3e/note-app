import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context } from "../context/BlogContext";
import NoteForm from "../components/NoteForm";

export default function EditScreen({ navigation, route }) {
  const { state, editBlogPost } = useContext(Context);
  const id = route.params.id;

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
  return (
    <NoteForm
      isEditable={true}
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
}

const styles = StyleSheet.create({});
