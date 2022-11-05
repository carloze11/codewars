function meeting(rooms){
    for (let i = 0; i<rooms.length; i++){
      if (rooms[i] === 'O'){
        return rooms.indexOf(rooms[i])
      }
    }
    return 'None available!'
  }