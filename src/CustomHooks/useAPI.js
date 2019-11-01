import { useState } from 'react'

const useAPI = (apiFactory, initialState) => {
    const [state, setState] = useState(initialState)
    return apiFactory({ state, setState })
}

export default useAPI