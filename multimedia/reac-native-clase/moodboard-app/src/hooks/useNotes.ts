import { View, Text } from 'react-native'
import React, { useActionState, useState } from 'react'

const useNotes = () => {

    const [currentNote, setCurrentNote] = useState(0)
    const [notes, setNotes] = useState([""])

    const returnNote = () => {
        return notes[currentNote]
    }

    

  return (
    returnNote,
    setNotes
  )
}

export default useNotes