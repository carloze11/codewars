const whosOnline = (friends) => {
    let online = [];
    let offline = [];
    let away = [];
    let friendStatus = {
  //     online: '', 
  //     offline: '', 
  //     away: ''
    };
    friends.forEach( friend => {
      if (friend.status === 'online' && friend.lastActivity <= 10){
        online.push(`${friend.username}`);
      }
       if (friend.status === 'offline') {
        offline.push(`${friend.username}`);
      }
      if (friend.status === 'online' && friend.lastActivity > 10){
        away.push(`${friend.username}`);
      }
    })
    if (online.length > 0){
      friendStatus.online = online
    }
    if (offline.length > 0){
      friendStatus.offline = offline
      }
    if (away.length > 0) {
      friendStatus.away = away;
      }
    return friendStatus
  }