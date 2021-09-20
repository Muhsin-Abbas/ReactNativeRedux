import {Add_To_Card} from '../Constants'
export const addToCard=(data)=>{
  return{
     type:Add_To_Card,
      data:data
  }
}
export const removeToCard=(data)=>{
    return{
       type:'Remove_To_Card',
        data:data
    }
  }