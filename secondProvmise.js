const users=[
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];
  
 function toggleUserState(allUsers,userName){
   return Promise.resolve(
     allUsers.map(user =>user.name === userName?{ ...user, active: !user.active } : user))
  };


   const logger = upDatedUsers=>console.table(upDatedUsers)
  
  
  
  
    toggleUserState(users, 'Mango').then(logger);
    toggleUserState(users, 'Lux').then(logger);