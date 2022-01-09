import React from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'

const Movement = ({formData, handleChange, handleRemoveInput}) => {
    return (
        <>
      { 
        formData.map((input, index) => (
        <>
            <View key={index}>
          <TextInput
            //   defaultValue={input.movement}
            //   name='movement'
            onTextChange={() => handleChange(input, index)}
            placeholder='Movement' />
          <TextInput 
            //   defaultValue={input.weight}
            //   name='weight'
            onTextChange={() => handleChange(input, index)}
            placeholder='lbs' />
          <TextInput
            //   defaultValue={input.rpe}
            //   name='rpe'
            onTextChange={() => handleChange(input, index)}
            placeholder='RPE' />
          <TextInput
            //   defaultValue={input.reps}
            //   name='reps'
            onTextChange={() => handleChange(input, index)}
            placeholder='Reps' />
          <TextInput
            //   defaultValue={input.sets}
            //   name='sets'
            onTextChange={() => handleChange(input, index)}
            placeholder='Sets' />
          <TextInput
            //   defaultValue={input.notes}
            //   name='notes'
            onTextChange={() => handleChange(input, index)}
            placeholder='Notes'
            multiline={true}
            numberOfLines={4}
            />
            <Pressable onPress={(index) => handleRemoveInput(index)}><Text>Remove</Text></Pressable>
            
            </View>
          </>
      ))}
    </>
    )
}

export default Movement
