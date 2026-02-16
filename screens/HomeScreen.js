import { StyleSheet, Text, View , FlatList} from 'react-native'
import React, {useContext} from 'react'
import BlogContext from '../context/BlogContext'

export default function HomeScreen() {
  const blogPosts = useContext(BlogContext) 
  return (
    <View>
      <Text>HomeScreen</Text>
      <FlatList
      data ={blogPosts}
      keyExtractor = {blogPost => blogPost.title}
      renderItem= {({item}) => {
        return <Text> {item.title}</Text>
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})