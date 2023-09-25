export const getDataFromLocalStorage = () =>{
  let data = localStorage.getItem('donations');
  
  if(data){
    return data = JSON.parse(data);
  }else{
    return data = [];
  }
}