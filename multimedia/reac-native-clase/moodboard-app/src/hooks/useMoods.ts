import { useState } from "react"


export const useMoods = () => {
    const mood = ["😃", "🙂", "🫤", "🙁", "😭"];
    const moodPart = ["■ · · · ·", "· ■ · · ·", "· · ■ · ·", "· · · ■ ·", "· · · · ■"];
    const [currentMood, setCurrentMood] = useState(0)


    const nextMood = () => {
        setCurrentMood((currentMood+1)%5)
    }

    const showMood = () => {
        return mood[currentMood]
    }

    const showDots = () => {
        return moodPart[currentMood]
    }

    const resetMood = () => {
        setCurrentMood(0)
    }

    return {
        nextMood,
        resetMood,
        showMood,
        showDots
    }
}