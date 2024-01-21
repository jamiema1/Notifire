import React, { useState } from 'react'
import Load from '../homepage/Load'

export default function LoadingPage({navigation}) {
    
  setTimeout(() => {
    navigation.navigate("Home")
  }, 2150)

  return (
    <Load />
  )
}
