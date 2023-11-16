import { View, Text,StyleSheet,Image, TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'
import { Input,Button,Icon,SearchBar,Divider } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

export default function Dashboard({navigation}) {
  return (
   <>
   
     <View
        style={{flexDirection:"row"}}>
        <View style={{flex: 2,padding:5}}>
          <View style={{flexDirection:'row'}}>
        <Image
            style={styles.tinyLogo}
            source={require('../../../img/header/user.png')}
          />
          <View style={{flexDirection:'row',marginTop:6,marginLeft:10}}>
         <Image
            style={styles.tinyPin}
            source={require('../../../img/header/pin.png')}
          />
           <Text style={{color:"#000",fontSize:16}}>Mundka/Delhi</Text>
           </View>
        </View>
        </View>
        <View style={{flex: 2}} />
        
        <View style={{flexDirection:'row'}}>
    
        <View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
         
           <Text style={{color:"#000",fontSize:16}}>Hello Mr. Deepak</Text>
           </View>
    
        <Image
            style={styles.tinyWallet}
            source={require('../../../img/header/wallet.png')}
            
          />
          
        </View>
        
      </View>
      <SearchBar
      
            placeholder="Type Here..."
            
            inputStyle={{backgroundColor: 'white'}}
      noIcon={true}
       icon = {{type: 'material-community', color: '#fff', name: 'share' }}
       clearIcon = {{type: 'material-community', color: '#fff', name: 'share' }}
       round={true}  
          />
      
      <Divider 
      style={{marginTop:20,marginBottom:20}}
      />
    <ScrollView>
      {/* This is card */}
      <Text onPress={() => navigation.navigate('Sidemenu')}>This is Drawer</Text>
      <View style={{flexDirection:"row"}}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#fff", borderRadius: 10, overflow: "hidden",borderWidth:1,borderColor:"#dedede"}}>
              <View>
                <Image
                  source={require('../../../img/pic1.jpg')}
                  style={{
                    height: 155,
                    width: 170
                  }}
                />
              </View>
              <View style={{ padding: 10, width: 155 }}>
                <Text style={{color:"#000",fontSize:16}}>Book Appointment</Text>
                <Text style={{ color: "#777", paddingTop: 5 }}>
                  Confirmed Now
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#fff", borderRadius: 10, overflow: "hidden",borderWidth:1,borderColor:"#dedede"}}>
              <View>
                <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 155,
                    width: 170
                  }}
                />
              </View>
              <View style={{ padding: 10, width: 155 }}>
                <Text style={{color:"#000",fontSize:16}}>Call Now </Text>
                <Text style={{ color: "#777", paddingTop: 5 }}>
                  Instant Help
                </Text>
              </View>
            </View>
          </View>
      </View>
    
      {/* This is small Card */}
    <View style={{flexDirection:"row",padding:20}}>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#fff", borderRadius: 10, overflow: "hidden",borderWidth:1,borderColor:"#dedede"}}>
              <View>
                <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 100,
                    width: 100
                  }}
                />
              </View>
              <View style={{ padding: 10, width: 100 }}>
                <Text style={{color:"#000",fontSize:16}}>Accident</Text>
                
              </View>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#fff", borderRadius: 10, overflow: "hidden",borderWidth:1,borderColor:"#dedede"}}>
              <View>
                <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 100,
                    width: 100
                  }}
                />
              </View>
              <View style={{ padding: 10, width: 100 }}>
                <Text style={{color:"#000",fontSize:16}}>Divorced</Text>
                
              </View>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={{ backgroundColor: "#fff", borderRadius: 10, overflow: "hidden",borderWidth:1,borderColor:"#dedede"}}>
              <View>
                <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 100,
                    width: 100
                  }}
                />
              </View>
              <View style={{ padding: 10, width: 100 }}>
                <Text style={{color:"#000",fontSize:16}}>Insurence</Text>
                
              </View>
            </View>
          </View>
    </View>
    
    {/* Background Change for  Category Doctor*/}
    
    <View style={{backgroundColor:"#dedede",height:10}}></View>
    <View style={{padding:20}}>
    <View style={{flexDirection:"row",marginBottom:20}}>
    <Image
                  source={require("../../../img/tempimages/lowyericon.png")}
                  style={{
                    height: 25,
                    width: 25,
                    borderRadius:50,
                    paddingRight:10
                  }}
                />
      <Text style={{fontWeight:"bold",fontSize:22,color:"#000",textAlign:"center"}}>Lawyers You Have Consulted</Text>
      </View>
      <View style={{flexDirection:"row"}}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius:50
                  }}
                />
                <Text style={{fontSize:16,color:"#000",marginTop:10,fontWeight:"400"}}>Rajnish Singh</Text>
                <Text style={{fontSize:12,color:"#000",marginTop:5}}>Rajnish Singh</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius:50
                  }}
                />
                <Text style={{fontSize:16,color:"#000",marginTop:10,fontWeight:"400"}}>Rajnish Singh</Text>
                <Text style={{fontSize:12,color:"#000",marginTop:5}}>Rajnish Singh</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius:50
                  }}
                />
                <Text style={{fontSize:16,color:"#000",marginTop:10,fontWeight:"400"}}>Rajnish Singh</Text>
                <Text style={{fontSize:12,color:"#000",marginTop:5}}>Rajnish Singh</Text>
      </View>
      </View>
      </View>
      <View style={{backgroundColor:"#dedede",height:10}}></View>
    
    
    
      {/* Features Section */}
      <View style={{padding:20,}}>
        <View style={{backgroundColor:"#28328c",padding:20,borderRadius:5}}>
    <View style={{flexDirection:"row",marginBottom:20}}>
    <Image
                  source={require("../../../img/tempimages/lowyericon.png")}
                  style={{
                    height: 25,
                    width: 25,
                    borderRadius:50,
                    paddingRight:10
                  }}
                />
      <Text style={{fontSize:16,color:"#fff",textAlign:"center"}}>Affordable Service By Experts</Text>
      </View>
      <View style={{flexDirection:"row"}}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius:10
                  }}
                />
               <Text style={{fontSize:12,color:"#000",marginTop:5,color:"#fff"}}>Accedent</Text>
               
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius:10
                  }}
                />
               <Text style={{fontSize:12,color:"#000",marginTop:5,color:"#fff"}}>Accedent</Text>
               
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius:10
                  }}
                />
               <Text style={{fontSize:12,color:"#000",marginTop:5,color:"#fff"}}>Accedent</Text>
               
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius:10
                  }}
                />
               <Text style={{fontSize:12,color:"#000",marginTop:5,color:"#fff"}}>Accedent</Text>
               
      </View>
      </View>
      <View style={{flexDirection:"row",marginTop:10}}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{color:"#fff",fontSize:16}}>All Types of Casses are Accepted Here</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button>Get Cost Estimated</Button>
        </View>
      </View>
      </View>
    </View>
    
    <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={true}
            >
              <View style={{ backgroundColor: "blue", flex: 1,width:150,height:300,borderRadius:10,margin:10  }}>
                <View>
                  <View style={{padding:10}}>
                  <Text style={{color:"#fff",fontSize:22,fontWeight:"700"}}>This Is Dummy Text</Text>
                  <Text style={{color:"#fff",marginTop:10}}>Hello This is dummy text From Praveen Kumar singh here we can add some attractive features of our application</Text>
                  </View>
                  <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 112,
                    width: 150,
                    
                  }}
                />
                </View>
              </View>
              
              <View style={{ backgroundColor: "blue", flex: 1,width:150,height:300,borderRadius:10,margin:10  }}>
                <View>
                  <View style={{padding:10}}>
                  <Text style={{color:"#fff",fontSize:22,fontWeight:"700"}}>This Is Dummy Text</Text>
                  <Text style={{color:"#fff",marginTop:10}}>Hello This is dummy text From Praveen Kumar singh here we can add some attractive features of our application</Text>
                  </View>
                  <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 112,
                    width: 150,
                    
                  }}
                />
                </View>
              </View>
    
              <View style={{ backgroundColor: "blue", flex: 1,width:150,height:300,borderRadius:10,margin:10  }}>
                <View>
                  <View style={{padding:10}}>
                  <Text style={{color:"#fff",fontSize:22,fontWeight:"700"}}>This Is Dummy Text</Text>
                  <Text style={{color:"#fff",marginTop:10}}>Hello This is dummy text From Praveen Kumar singh here we can add some attractive features of our application</Text>
                  </View>
                  <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 112,
                    width: 150,
                    
                  }}
                />
                </View>
              </View>
    
              <View style={{ backgroundColor: "blue", flex: 1,width:150,height:300,borderRadius:10,margin:10  }}>
                <View>
                  <View style={{padding:10}}>
                  <Text style={{color:"#fff",fontSize:22,fontWeight:"700"}}>This Is Dummy Text</Text>
                  <Text style={{color:"#fff",marginTop:10}}>Hello This is dummy text From Praveen Kumar singh here we can add some attractive features of our application</Text>
                  </View>
                  <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 112,
                    width: 150,
                    
                  }}
                />
                </View>
              </View>
    
              <View style={{ backgroundColor: "blue", flex: 1,width:150,height:300,borderRadius:10,margin:10  }}>
                <View>
                  <View style={{padding:10}}>
                  <Text style={{color:"#fff",fontSize:22,fontWeight:"700"}}>This Is Dummy Text</Text>
                  <Text style={{color:"#fff",marginTop:10}}>Hello This is dummy text From Praveen Kumar singh here we can add some attractive features of our application</Text>
                  </View>
                  <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 112,
                    width: 150,
                    
                  }}
                />
                </View>
              </View>
    
              <View style={{ backgroundColor: "blue", flex: 1,width:150,height:300,borderRadius:10,margin:10  }}>
                <View>
                  <View style={{padding:10}}>
                  <Text style={{color:"#fff",fontSize:22,fontWeight:"700"}}>This Is Dummy Text</Text>
                  <Text style={{color:"#fff",marginTop:10}}>Hello This is dummy text From Praveen Kumar singh here we can add some attractive features of our application</Text>
                  </View>
                  <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 112,
                    width: 150,
                    
                  }}
                />
                </View>
              </View>
    
              <View style={{ backgroundColor: "blue", flex: 1,width:150,height:300,borderRadius:10,margin:10  }}>
                <View>
                  <View style={{padding:10}}>
                  <Text style={{color:"#fff",fontSize:22,fontWeight:"700"}}>This Is Dummy Text</Text>
                  <Text style={{color:"#fff",marginTop:10}}>Hello This is dummy text From Praveen Kumar singh here we can add some attractive features of our application</Text>
                  </View>
                  <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 112,
                    width: 150,
                    
                  }}
                />
                </View>
              </View>
            </ScrollView>
            <View style={{backgroundColor:"#dedede",height:10}}></View>
    <View style={{padding:20}}>
    <View style={{flexDirection:"row",marginBottom:20}}>
    <Image
                  source={require("../../../img/tempimages/lowyericon.png")}
                  style={{
                    height: 25,
                    width: 25,
                    borderRadius:50,
                    paddingRight:10
                  }}
                />
      <Text style={{fontWeight:"bold",fontSize:22,color:"#000",textAlign:"center"}}>Lawyers You Have Consulted</Text>
     
      </View>
      <Text style={{fontSize:12,color:"#000",marginTop:-20,marginLeft:25,marginBottom:20}}>Lawyers You Have Consulted</Text>
      <View style={{flexDirection:"row"}}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius:50
                  }}
                />
               
                <Text style={{fontSize:12,color:"#000",marginTop:5}}>Divorced</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius:50
                  }}
                />
               
                <Text style={{fontSize:12,color:"#000",marginTop:5}}>Divorced</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius:50
                  }}
                />
               
                <Text style={{fontSize:12,color:"#000",marginTop:5}}>Divorced</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius:50
                  }}
                />
               
                <Text style={{fontSize:12,color:"#000",marginTop:5}}>Divorced</Text>
      </View>
      </View>
      <View style={{flexDirection:"row",marginTop:20}}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius:50
                  }}
                />
               
                <Text style={{fontSize:12,color:"#000",marginTop:5}}>Divorced</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius:50
                  }}
                />
               
                <Text style={{fontSize:12,color:"#000",marginTop:5}}>Divorced</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius:50
                  }}
                />
               
                <Text style={{fontSize:12,color:"#000",marginTop:5}}>Divorced</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
                  source={require("../../../img/pic1.jpg")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius:50
                  }}
                />
               
                <Text style={{fontSize:12,color:"#000",marginTop:5}}>Divorced</Text>
      </View>
      </View>
      </View>
      </ScrollView>
   </>
  )
}


const styles = StyleSheet.create({
    tinyWallet:{
      width:15,
  height:15,
  marginTop:14,
  marginLeft:20,
  marginRight:10
    },
    tinyPin:{
  width:15,
  height:15,
  marginTop:3,
    },
    tinyLogo :{
      width:20,
      height:20,
      padding:15,
    },
    container: {
      
      height:10,
      padding: 0,
    },
   
  });
  