import { stock } from '../data/stock'

export const funcionObtenerDatos = () => {

    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve(stock)
        }, 4000)

    })
}