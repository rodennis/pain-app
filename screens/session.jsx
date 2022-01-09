import React, {useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import axios from 'axios'

const session = ({navigation}) => {

    const [sesh, setSesh] = useState()
    const [movements, setMovements] = useState([])

    useEffect(() => {
        const getData = async () => {
          const url = 'https://pain-database.herokuapp.com/api/sessions'
          const res = await axios.get(`${url}/${navigation.getParam('_id')}`)
          setSesh(res.data)
          setMovements(res.data.movements)
          console.log(res.data.movements)
        }
        getData()
      }, [])

    return (
        <View style={styles.container}>
        {   sesh &&
        <View>
            <TextInput value={sesh.sessionName} editable={false}/>
            <TextInput value={sesh.date} editable={false}/>
           { movements.map(move => (
               <View key={move._id}>
            <TextInput value={move.movement} editable={false}/>
            <TextInput value={move.weight} editable={false}/>
            <TextInput value={move.rpe} editable={false}/>
            <TextInput value={move.reps} editable={false}/>
            <TextInput value={move.sets} editable={false}/>
            </View>
            ))
           }
            </View>
        }
            </View>
    )
}

export default session

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  })



