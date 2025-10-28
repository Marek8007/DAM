import { useState } from "react"


export const useMoods = () => {
    const [mood, setMood] = useState(["😃", "🙂", "🫤", "🙁", "😭"]);
    const [moodPart, setMoodPart] = useState(["■ · · · ·", "· ■ · · ·", "· · ■ · ·", "· · · ■ ·", "· · · · ■"]);


    return {

    }
}