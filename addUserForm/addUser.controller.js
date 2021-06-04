app.controller("addForm",function($scope,api,$location){
    $scope.user={};
    $scope.addData=function()
    {
        api.addUser($scope.user).then(function(response){
            console.log("user Added",response);
        }, function(res){
            console.log("errorHandled",res);
        });
        $scope.users.push($scope.user);
        $location.path("/");
    }
});