import axiosConfig from "../../api/axiosConfig";

// A mock function to mimic making an async request for data
export function fetchWeather(q:string) {
    const params = {
        q
    }
    return axiosConfig.get('/weather?lang=vi&units=metric', {params})
  }
  