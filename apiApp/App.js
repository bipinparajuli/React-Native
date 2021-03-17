/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Button} from "native-base"
import Axios from 'axios'
import User from './Component/User';


const App = () => {
const [details, setdetails] = useState(null);
  const fetchDetails = async () => {
  try{

const {data} = await Axios.get("https://randomuser.me/api/");
const detalis = data.results[0]
console.log(detalis)
setdetails(detalis)  
}catch(err){
    console.log(err);
  }
  }


useEffect(()=>{
fetchDetails();
},[])
if(!details)
{
  return (
    <View style={styles.container}>
      <Text>Loading ...</Text>
    </View>
  )
}
  return (
  <View style={styles.container}>
  <View>
  <User details={details} />
  <Button rounded style={styles.button} onPress={()=> fetchDetails()}>
  <Text>
    Generate
  </Text>
  </Button>
  </View>
  </View>
)
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#222831"
  },
  button : {
    marginTop:30,
    paddingHorizontal:30
  }
})