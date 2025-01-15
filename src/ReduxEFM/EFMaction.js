// EFMaction.js

export const Add = (value)=>{
    return { type : "add" , payload : value }
}      
export const Sub = (value)=>{
    return { type : "sub" , payload : value }
}      
export const Mul = (value)=>{
    return { type : "mul" , payload : value }
}      
export const Div = (value)=>{
    return { type : "div" , payload : value }
}  

export const nbr1Change = (value)=>{
    return { type : 'nbr1V' ,payload : value}
}
export const nbr2Change = (value)=>{
    return { type : 'nbr2V' ,payload : value}
}
