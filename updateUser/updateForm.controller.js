app.controller("updateForm",function($scope,api,$location){
    let id=api.activeUserId;
    let index=$scope.users.findIndex(function(u){
        if(u.id===id)
        {
            return true;
        }
        else
        {
            return false;
        }
    });
    $scope.user=$scope.users[index];
    $scope.updateData=function()
    {
        api.updateUser($scope.user,id).then(function(response){
            console.log("user Updated",response);
        }, function(res){
            console.log("errorHandled",res);
        });
        $scope.users[index]=$scope.user;
        $location.path("/");
    }
});