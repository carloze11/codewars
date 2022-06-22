function greetDevelopers(list) {
    // thank you for checking out my kata :)
    return list.map(x => ({ ...x, 'greeting': `Hi ${x.firstName}, what do you like the most about ${x.language}?` }))
  }