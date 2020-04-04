export const stataReducer = (state,action) => {
  switch (action.type) {
    case 'setamount': {
      return {
        ...state, 
        stat:action.value
      }
    }
    case 'setmounth': {
    let  buffer=  '';

    if (action.value=='01') {
      buffer='января'
    }
    if (action.value=='02') {
      buffer='февраля'
    }
    if (action.value=='03') {
      buffer='марта'
    }
    if (action.value=='04') {
      buffer='aпреля'
    }
    if (action.value=='05') {
      buffer='мая'
    }
    if (action.value=='06') {
      buffer='июня'
    }
    if (action.value=='07') {
      buffer='aиюля'
    }
    if (action.value=='08') {
      buffer='августа'
    }
    if (action.value=='09') {
      buffer='августа'
    }
    if (action.value=='10') {
      buffer='сентября'
    }
    if (action.value=='11') {
      buffer='ноября'
    }
    if (action.value=='12') {
      buffer='декабря'
    }
      return {    
     ...state, 
        mounth: buffer
       
      }   
    }
    case 'setday': {
      return {
        ...state, 
        day:action.value
      }
    }
    case 'settime': {
      return {
        ...state, 
        time:action.value
      }
    }
  }
}