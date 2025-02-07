import React, { useState } from 'react'
import { View, Text, TextInput, Image } from 'react-native'

import styles from './welcome.style'
import { FlatList, TouchableOpacity } from 'react-native'
import { icons, SIZES } from '../../../constants'
import { router } from 'expo-router'
const jobTypes = ["Full-time", "Part-time", "Contractor"]
const Welcome = () => {
  const [activeJobType, setActiveJobeType] = useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=''
            onChange={()=>{}}
            placeholder="What are you looking for?"
           />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=> {}}>
        <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({item})=>(
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)}
              onPress={()=>{
                setActiveJobeType(item);
                router.push(`/search/${item}`)
              }}>
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )} 
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal />
      </View>
    </View>
  )
}

export default Welcome