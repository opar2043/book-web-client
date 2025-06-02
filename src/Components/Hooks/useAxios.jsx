import axios from "axios"

export const axiosinstance = axios.create({
    baseURL: 'http://localhost:5000/'
})

const useAxios = () => {
  return axiosinstance;
}

export default useAxios