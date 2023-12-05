import rikosoApi from "@/api/rickosoAPI"

export const getLocation = async (locationID)=> {
    const response = await rikosoApi.get(`/location/${locationID}`)
    return response.data
}

export default getLocation