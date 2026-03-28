// import { use } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';


export default function About() {
  const {id} = useParams();
  useEffect(()=>{
    document.title = "About";
  },[])
  return (
    <div>
      <h1>About {id}</h1>
    </div>
  )
}
