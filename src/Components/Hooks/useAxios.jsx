import axios from "axios"

export const axiosinstance = axios.create({
    baseURL: 'https://book-web-seconed.vercel.app/'
})

const useAxios = () => {
  return axiosinstance;
}

export default useAxios