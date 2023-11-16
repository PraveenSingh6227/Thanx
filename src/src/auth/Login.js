import { View, Text,StyleSheet,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Input,Button,Icon } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';


export default function Login({navigation}) {
  return (
    <>
<Image source={require("../../img/login1.png")} style={{height:'200',width:'100%',flex:.3}} />
 <View style={{flex:.1,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:20}}>Hello again</Text>
<Text style={{fontSize:20}}>Welcome Back!</Text>
</View>
<View style={{flex:.6}}>
<Input
      placeholder="Enter Username/Email Id"
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
      <View style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
      <TouchableOpacity style={{justifyContent:'flex-end',alignItems:'flex-end',width:'300'}}><Text  style={{justifyContent:'flex-end',alignItems:'flex-end',marginRight:10}} onPress={() => navigation.navigate('Forget')} >Forget Password</Text></TouchableOpacity>
      </View>
      <Button
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ["#FF9800", "#F44336"],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }}
  style={{justifyContent:'center',alignItems:'center'}}
  onPress={() => navigation.navigate('Dashboard')} 
>
  Validate Now
</Button>
<View style={{justifyContent:'center',alignItems:'center',flex:.2}}>
<Text style={{fontSize:16,textAlign:'center'}}>

You Don't Have Account 

<Text 
  onPress={() => navigation.navigate('Register')} 
  style={{fontSize:16, color:'#FF9800'}}>
   Signup Here
</Text>
</Text>
</View>
</View>

    </>
  )
}

const styles = StyleSheet.create(
    {
container : {
    flex:1,
    
},
brandViewText1:{
    
    fontSize:40,
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  }
    }
)