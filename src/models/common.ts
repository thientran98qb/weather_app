export interface Weather {
    id: number,
    main: string,
    description: string,
    icon: string
}
export interface WeatherResponse {
    [key: string]: any
    weather: Weather[],
    name: string,
    sys: Sys,
    clouds: Clounds,
    wind: Wind
}

export interface Sys {
    sunrise: number,
    sunset: number
}

export interface Clounds {
    all: number
}

export interface Wind {
    speed: number,
}