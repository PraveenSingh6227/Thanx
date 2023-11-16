import { View, Text,ImageBackground } from 'react-native'
import React from 'react'

export default function Background({children}) {
  return (
    <View >
      <ImageBackground source={require("../../img/login.png")} style={{height:'100%'}} />
      <View style={{position:'absolute',flex:1}}>
      {children}
      </View>
    </View>
  )
}