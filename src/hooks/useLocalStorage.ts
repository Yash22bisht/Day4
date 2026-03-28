import {useEffect, useState} from 'react'

function getSavedValue<T>(key:string,initialValue:T){
    const item = localStorage.getItem(key);
    if(item!= null && item!= "undefined") return JSON.parse(item);

    if(initialValue instanceof Function) return initialValue();

    return initialValue ;

}

export default function useLocalStorage<T>(key:string,initialValue:T) {

    const [value , setValue] = useState(()=>{
        return getSavedValue(key,initialValue);
    });

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value])

  return [value,setValue]
}
