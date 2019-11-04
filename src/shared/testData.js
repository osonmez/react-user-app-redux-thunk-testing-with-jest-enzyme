export const testUserArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771"
        }
      }
];

export const editedUser = {
  "name": "Edited Name",
  "username": "editedusername",
  "email": "edited@edited.com",
  "address": {
    "street": "Edited Street",
    "suite": "Edited Suite",
    "city": "Edit",
    "zipcode": "11111-0000"
  }
}

export const newUser = {
  "name": "New Name",
  "username": "newedusername",
  "email": "new@new.com",
  "address": {
    "street": "New Street",
    "suite": "New Suite",
    "city": "New",
    "zipcode": "11111-0001"
  }
}

export const testInitialState = {
  users: [],
  loading: false,
  edit: false,
  selectedUser: null,
  error: null
};

export const testInitialStateWithUsers = {
  users: testUserArray,
  loading: false,
  edit: false,
  selectedUser: null,
  error: null
};