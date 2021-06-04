app.controller("main",function($scope,api,$location)
{
    $scope.initializeData=function(flag){
        
            api.getUsers(flag).then(function(data){
                console.log("getUsersController",data);
                $scope.users=data;
            }, function(res){
                console.log("errorHandled",res);
            });
        
    }
    $scope.initializeData();
    $scope.removeUser=function(id)
    {
        let arr=$scope.users;
        let index =arr.findIndex(function(u){
            if(u.id==id)
            {
                return true;
            }
            else
            {
                return false;
            }
        });
        arr.splice(index,1);
        $scope.users=arr;
        api.deleteUser(id).then(function(res)
        {
            console.log("dataDeleted",res);
            // $scope.initializeData(1); would have been called to fetch data from server after deletion but the dummy api does not actually delete it hence manipulations will be on the client side
            
        }, function(res){
            console.log("errorHandled",res);
        });
        
    }
    $scope.addUser = function () {
        $location.path("/addUser");
      };
      $scope.updateUser=function(id){
          api.activeUserId=id;
          $location.path("/updateUser");
      }
      
});