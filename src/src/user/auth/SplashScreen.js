import { View, Text} from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'



export default function SplashScreen() {
    const navigation = useNavigation();

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            navigation.navigate('Dashboard')
        },5000)
    })
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}