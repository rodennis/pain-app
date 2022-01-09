import React from 'react'
import { View, Text, Button, Pressable, TextInput} from 'react-native'
import {useState, useEffect} from 'react'
import Movement from './Movement'
import { NavigationRouteContext } from '@react-navigation/native'
import axios from 'axios'

const NewSession = ({navigation}) => {

    const url = 'https://pain-database.herokuapp.com/api/sessions'
    const [sessionName, setSessionName] = useState('')
    const [date, setDate] = useState(new Date())
    const [formData, setFormData] = useState([
        {
          movement: '',
          weight: '',
          rpe: '',
          reps: '',
          sets: '',
          notes: '',
        }
      ])

      const handleSessionSubmit = async (e) => {
        e.preventDefault()
        const movements = formData.map(movement => movement)
        const sessionData = {
          sessionName,
          date,
          movements
        }
        // if (session) {
        //   await api.put(`sessions/${params.id}`, sessionData)
        // } else {
          await axios.post(url, sessionData)
          navigation.pop()
        // }  
      }

      const handleChange = (e, index) => {
        const { name, defaultValue } = e.target;
        const form = [...formData];
        form[index][name] = defaultValue;
        setFormData(form);
    console.log(formData)

    };
    console.log(formData)

      const handleAddInput = () => {
        setFormData([...formData,
          {
            movement: '',
            weight: '',
            rpe: '',
            reps: '',
            sets: '',
            notes: ''
          }
        ]);
      };

      const handleCancel = () => {
        navigation.pop()
      }

      const handleRemoveInput = (index) => {
        const form = [...formData];
        form.splice(index, 1);
        setFormData(form);
      };

    return (
        <View >
        <View>
            <View>
              <TextInput type="text"
                onChangeText={e => setSessionName(e) }
                placeholder='Session Name' required/>
          </View>
          <View>
            <Pressable onPress={ handleAddInput } ><Text>+</Text></Pressable>
          </View>
          <View>
              <Text>Date</Text>
          </View>
          <View>
            { 
              <Movement
                formData={formData}
                handleChange={handleChange}
                handleRemoveInput={handleRemoveInput}
              />
            }
            </View>
          <View>
            <Pressable onPress={ handleSessionSubmit }><Text>Add</Text></Pressable>
            <Pressable onPress={ handleCancel }><Text>Cancel</Text></Pressable>
          </View>
      </View>
    </View>
    )
}

export default NewSession
