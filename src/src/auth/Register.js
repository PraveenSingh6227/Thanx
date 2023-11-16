import { View, Text,StyleSheet,Image, TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'
import { Input,Button,Icon } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

export default function Register({navigation}) {
  return (
    <>
    
<Image source={require("../../img/login1.png")} style={{height:'100%',width:'100%',flex:1}} />
<ScrollView>
 <View style={{flex:.1,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:20}}>Register</Text>
<Text style={{fontSize:20}}></Text>
</View>
<View style={{flex:.6}}>
<Input
      placeholder="Enter Name"
      label={"Enter name"}
    //   leftIcon={{ type: 'font-awesome', name: 'comment' }}
      onChangeText={value => this.setState({ comment: value })}
      />
      <Input
      placeholder="Enter Email ID"
      label={"Enter name"}
    //   leftIcon={{ type: 'font-awesome', name: 'comment' }}
      onChangeText={value => this.setState({ comment: value })}
      />
      <Input
      placeholder="Enter Phone"
      label={"Enter name"}
    //   leftIcon={{ type: 'font-awesome', name: 'comment' }}
      onChangeText={value => this.setState({ comment: value })}
      />
      <Input
      placeholder="Enter Password"
      label={"Enter Password"}
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
<View style={{justifyContent:'center',alignItems:'center',flex:.2}}>
<Text style={{fontSize:16,textAlign:'center'}}>

You Have Account 

<Text 
  onPress={() => navigation.navigate('Login')} 
  style={{fontSize:16, color:'#FF9800'}}>
   Signin Here
</Text>
</Text>
</View>
</View>
</ScrollView>
    </>
  )
}