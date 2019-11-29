import {useState} from 'react'
import {API, graphqlOperation } from 'aws-amplify'
import 

export const useUpdateUserObject = () => {

    const getUserObject = async () => {
        let user = null
        try {
            user = await API.graphql(graphqlOperation())
        } catch {

        }

    }

}