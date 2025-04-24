import { View, Text, TouchableOpacity } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react'

const SocialMediaButton = () => {
  return (
    <TouchableOpacity>
      <Entypo name="facebook-with-circle" size={32} color="black" />
    </TouchableOpacity>
  )
}

export default SocialMediaButton