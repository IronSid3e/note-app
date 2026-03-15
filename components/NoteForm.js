import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function NoteForm({ onSubmit, initialValues, isEditable }) {
  const [title, setTitle] = useState(initialValues ? initialValues.title : "");
  const [content, setContent] = useState(
    initialValues ? initialValues.content : "",
  );
  return (
    <View style={styles.main}>
      <Text style={styles.inputText}>Başlığı Giriniz</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={styles.inputText}>İçeriği Giriniz</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />

      <TouchableOpacity
        style={styles.buttonMain}
        onPress={() => onSubmit(title, content)}
      >
        <View style={styles.buttonView}>
          {isEditable ? (
            <Text style={styles.buttonText}>Güncelle</Text>
          ) : (
            <Text style={styles.buttonText}>Kaydet</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    flex: 1,
  },
  inputText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    marginLeft: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#e0e0e0",
    borderRadius: 15,
    padding: 12,
    fontSize: 17,
    marginBottom: 20,
    color: "#222",
  },
  buttonMain: {
    marginTop: 10,
  },
  buttonView: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 15,
    elevation: 3,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
