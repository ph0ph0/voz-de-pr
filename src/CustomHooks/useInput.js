import { useState } from 'react'

const useInput = () => {
    const [value, setValue] = useState("")

    const updateValue = (event) => {
        setValue(event.target.value)
    }

    return {
        value,
        updateValue
    }
}

export default useInput