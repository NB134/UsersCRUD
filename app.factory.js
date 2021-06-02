app.factory("api", function ($http, $q) {
  let users = [];
  const activeUserId = null;
  const getUsers = function (flag) {
    if (flag===1 | users.length===0) {
      return $http.get("https://reqres.in/api/users/").then(function(response)
      {
          console.log(response.data);
          users=response.data.data;
          console.log(users);
          return users;
      });
    } else {
      return $q.when(users);
    }
  };
  const addUser = function (udata) {
    return $http.post("https://reqres.in/api/users", udata).then(function (response) {
        return response;
    });
  };
  const updateUser = function (udata, id) {
    let url = `https://reqres.in/api/users/${id}`;
    return $http.patch(url, udata).then(function(response){
        return response;
    });
  };
  const deleteUser = function (id) {
    let url = `https://reqres.in/api/users/${id}`;
    return $http.delete(url).then(function(response){
        return response;
    });
  };
  return {
    users: users,
    activeUserId: activeUserId,
    getUsers: getUsers,
    addUser: addUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
  };
});
