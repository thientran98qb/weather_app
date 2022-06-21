import { Alert, Box, Button, CircularProgress, Typography } from '@mui/material'
import moment from 'moment'
import { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getWeatherByCity, weatherSelector } from './weatherSlice'
import { Ceil, ListInfo, ListInfoItem, SearchInline, TextFeildStyle, WeatherBox, WeatherInfo, WrapperWeather } from './WeatherStyles'

const Weather = () => {
    const dispatch = useAppDispatch()
    const [search, setSearch] = useState('Ha noi')
    const {weathers, loading, error} = useAppSelector(weatherSelector)

    useEffect(() => {
        if (!search.trim()) {
            return;
        }
        dispatch(getWeatherByCity(search))
    }, [])
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleClickSearch = () => {
        dispatch(getWeatherByCity(search))
    }
    
  return (
    <WrapperWeather>
        <WeatherBox elevation={2}>
            {error && <Alert severity="error">{error}!</Alert>}
            <SearchInline pt={2}>
                <TextFeildStyle variant='standard' label='Enter city name' size='small' fullWidth value={search} onChange={handleSearch}/>
                <Button variant='text' size='small' onClick={handleClickSearch}>
                    {loading ? <CircularProgress /> : 'Q'}
                </Button>
            </SearchInline>
            <WeatherInfo>
                <img src={`http://openweathermap.org/img/wn/${weathers?.weather[0].icon}@2x.png`} alt="" />
                <Typography variant='h4'>{weathers?.name}</Typography>
                <Typography variant='h6'>{weathers?.weather[0].description}</Typography>

                <Ceil variant='h3'>{weathers?.main.temp}</Ceil>
            </WeatherInfo>
            <Box>
                <Typography style={{fontWeight: 'bold'}}>Weather detail</Typography>
                <ListInfo>
                    <ListInfoItem>
                        <span>MT Mọc</span>
                        <span>{weathers?.sys ? moment.unix(weathers.sys.sunrise).format("DD/MM/YY hh:mm") : "--"}</span>
                    </ListInfoItem>
                    <ListInfoItem>
                        <span>MT Lặn</span>
                        <span>{weathers?.sys ? moment.unix(weathers.sys.sunset).format("DD/MM/YY hh:mm") : "--"}</span>
                    </ListInfoItem>
                    <ListInfoItem>
                        <span>Độ ẩm</span>
                        <span>{weathers?.main.humidity}</span>
                    </ListInfoItem>
                    <ListInfoItem>
                        <span>Gió</span>
                        <span>{weathers?.wind.speed}m/s</span>
                    </ListInfoItem>
                </ListInfo>
            </Box>
        </WeatherBox>
    </WrapperWeather>
  )
}

export default Weather