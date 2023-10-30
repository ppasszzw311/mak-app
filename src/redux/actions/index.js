export const increment = () => {
    return{
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return{
        type: 'DECREMENT'
    }
}

export const increase = (value) => {
    return{
        type: 'INCREASE',
        value: value
    }
}
