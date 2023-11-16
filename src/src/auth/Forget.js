import { View, Text,StyleSheet,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Input,Button,Icon } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

export default function Forget({navigation}) {
  return (
    <>
    <Image source={require("../../img/login1.png")} style={{height:'200',width:'100%',flex:.3}} />
    <View style={{flex:.1,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:20}}>Forget Your Password</Text>
<Text style={{fontSize:20}}>Don't Worry</Text>
</View>
<Input
      placeholder="Enter Username/Email Id"
      label={"Enter name"}
    //   leftIcon={{ type: 'font-awesome', name: 'comment' }}
      onChangeText={value => this.setState({ comment: value })}
      />
      <Input
      placeholder="Enter OTP"
      label={"Enter OTP"}
    //   leftIcon={{ type: 'font-awesome', name: 'comment' }}
      onChangeText={value => this.setState({ comment: value })}
      />
       <Button
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ["#FF9800", "#F44336"],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }}
  style={{justifyContent:'center',alignItems:'center'}}
>
  Validate Now
</Button>
    </>
  )
}