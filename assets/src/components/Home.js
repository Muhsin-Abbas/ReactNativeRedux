import React from 'react'
import { View, Text, Image,StyleSheet,Button } from 'react-native'

export default function Home() {
    return (
        <View style={styles.container}>
          <View style={styles.Addcard}>
             <Image  style={{width:80, height:80,position:'absolute',top:-50,right:'5%'}}
             source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAShhrdWzgNYf-hKzOhmqfCkqu9f-bIzJ-Jg&usqp=CAU'}}
             />

          </View>
            <Text>Home component</Text>
            <View style={styles.cartwarper}>
                <View style={styles.imgwarper}>
                  <Image  style={{width:'100%',height:'60%'}}
                  source={{uri:'https://i.gadgets360cdn.com/products/large/iqoo-3-db-386x800-1582613523.jpg'}}
                  />
                </View>
                <View style={styles.textwraper}>
                  <Text>I-phone</Text>
                  <Text>price:$1999</Text>
                </View>
                <View style={{marginTop:10,borderRadius:10,boxShadow:'black'}}>
                  <Button title='Add to cart'/>
                </View>
            </View>
        </View>
    )
}  

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    top:-200
  },
    cartwarper:{
       width:350,
       height:110,
       borderWidth:1,
       borderColor:'#bbbbc4',
       flexDirection:'row',
       justifyContent:'space-around',
       
    },
    imgwarper:{
       width:100,
       height:150,
       marginTop:10
       
    },
    textwraper:{
      fontSize:12,
      fontWeight:'bold',
      marginTop:10,
    },
    btnwarper:{
    borderRadius:10,
    
    }
  });