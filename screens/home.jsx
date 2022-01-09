import { StyleSheet, Text, View, Pressable, Image, ScrollView} from 'react-native';
import {useState, useEffect } from 'react'
import axios from 'axios' 

export default function App({navigation}) {

  const [sessions, setSessions] = useState([])

  useEffect(() => {
    const getData = async () => {
      const url = 'https://pain-database.herokuapp.com/api/sessions'
      const res = await axios.get(url)
      setSessions(res.data)
    }
    getData()
  }, [sessions])

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../photos/logo.png')} />
      <Pressable onPress={() => navigation.navigate('NewSession')} style={styles.add}><Text style={styles.addPlus}>+</Text></Pressable>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}style={styles.cardContainer}>
      {
      sessions.reverse().map(session => (
        <Pressable onPress={() => navigation.navigate('Session', session)} key={ session._id } style={styles.card}>
        <Text style={styles.sessionName}>
          {session.sessionName}
        </Text>
        <Text style={styles.date}>
          {session.date}
        </Text>
      <Image style={styles.cardLogo} source={require('../photos/cardLogo.png')} />
        </Pressable>
      ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555c6d',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red',
        maxWidth: '100%'
      },
      card: {
        width: 300,
        height: 200,
        marginBottom: 30,
        borderRadius: 15,
        backgroundColor: '#343434',
        overflow: 'hidden',
        alignItems: 'center',
      },
  
      sessionName: {
        color: 'white',
        fontSize: 45,
        margin: 'auto',
        alignContent: 'center',
        marginTop: 15
      },
      date: {
        color: 'white',
        fontSize: 20,
        margin: 'auto',
        marginTop: 15
      },
  
      cardLogo: {
        width: 100,
        height: 100,
        marginTop: 10 
      },
  
      logo: {
        width: 150,
        height: 150,
        position: 'relative',
        bottom: -20,
        right: 120,
      },
  
      add: {
        borderWidth: 2,
        width: 60,
        height: 60,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center', 
        position: 'relative',
        bottom: 80,
        left: 150     
      },
  
      addPlus: {
        fontSize: 30,
      },
  
      cardContainer: {
        marginHorizontal: 20,
        flex: 1,
        width: '100%',
        marginTop: -40,
        paddingTop: 20
      }
      
})



