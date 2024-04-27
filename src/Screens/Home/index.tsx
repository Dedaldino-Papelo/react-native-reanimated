import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Sheet from '../../Components/Sheet'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'

const Home = () => {
  const [ sheetIsOpen, setIsOpen ] = useState<boolean>(false)

  function toggleSheet(){
    setIsOpen(prevState => !prevState)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={toggleSheet}>
        <Ionicons
          name='options'
          size={24}
          color="#FFF" 
        />
      </TouchableOpacity>

      { sheetIsOpen && <Sheet onClose={toggleSheet} /> }
    </View>
  )
}

export default Home