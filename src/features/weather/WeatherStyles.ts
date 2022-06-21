import { Box, Paper, TextField, Typography } from '@mui/material';
import styled from 'styled-components';

export const WrapperWeather = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
`;

export const WeatherBox = styled(Paper)`
    padding: 2rem;
    width: 350px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    color: #fff !important;
    opacity: 0.7;
`

export const WeatherInfo = styled(Box)`
    padding: 2rem 0;
    text-align: center;
    img {
        max-width: 100%;
        width: 70px;
        object-fit: contain;
    }
    h4 {
        letter-spacing: 3px;
        font-weight: 400;
    }
    h6 {
        font-size: 15px;
        letter-spacing: 1px;
        line-height: 1.5;
    }
`

export const Ceil = styled(Typography)`
    position: relative;
    display: inline-block;
    font-size: 100px;
    margin: 3rem 0 !important;
    &::after {
        content: 'o';
        position: absolute;
        top: 0;
        right: -25px;
        font-size: 30px;
        font-weight: bold;
    }
`
export const ListInfo = styled.ul`
    padding: 0;
    list-style-type: none;
    padding-left: 30px;
    & > * ~ * {
        margin-top: 5px;
    }
    position: relative;
    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: white;
    }
    
`

export const ListInfoItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: 0.7;
`

export const TextFeildStyle = styled(TextField)`
    color: #fff;
    & label.Mui-focused {
        color: white;
    }
    & .MuiInput-underline:after {
        border-bottom-color: white;
    }
    & .MuiInput-underline:before {
        border-bottom-color: white;
    }
    & .MuiInputLabel-root {
        color: #fff;
    }
    & .MuiInput-input {
        color: #fff;
    }
`

export const SearchInline = styled(Box)`
   position: relative;
   button {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 20px;
   }
`