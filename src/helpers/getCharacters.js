import rikosoApi from "../api/rickosoAPI"

export const getCharater = async (charaterID)=> {
    console.log('ID: '+ charaterID);
    const response = await rikosoApi.get(`/character/${charaterID}`)
    return response.data
}

export default getCharater