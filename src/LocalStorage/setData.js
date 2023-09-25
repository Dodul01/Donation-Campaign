export const setDataToLocalStorage = (prevData, data) =>{
  localStorage.setItem('donations', JSON.stringify([...prevData, data]))
}