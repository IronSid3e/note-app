import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context } from "../context/BlogContext";
import NoteForm from "../components/NoteForm";

export default function EditScreen(route) {
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
  return (
    <NoteForm
      isEditable={true}
      initialValues={{ title: blogPost.title, content: blogPost.content }}
    />
  );
}

const styles = StyleSheet.create({});
