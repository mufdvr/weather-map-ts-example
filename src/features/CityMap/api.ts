const { REACT_APP_API_KEY } = process.env
export const weatherMap = (city: string) => `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${REACT_APP_API_KEY}`