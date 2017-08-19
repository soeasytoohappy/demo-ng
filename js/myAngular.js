;(function (angular) {
    var app = angular.module("app", []);
    app.controller("AppController",["$scope",function ($scope) {
        $scope.title="备忘录";
        $scope.dataList=[
            {name:"wo",checked:false},
            {name:"wo",checked:false},
            {name:"wo",checked:false}
        ];
        //监听点击
        $scope.add = function (event) {
            // alert($scope.content);
            event.preventDefault();
            if ($scope.content=="" || $scope.content==undefined){
                alert("不能为空");
                return;
            }
            var obj = {
                name:$scope.name,
                checked:false
            };
            $scope.dataList.unshift(obj);
            $scope.content="";
        };
        $scope.delete=function (index) {
            // alert(index);
            $scope.dataList.splice(index,1);
        };
        $scope.finishedList=[
            {name:"ni",checked:true},
            {name:"ni",checked:true},
            {name:"ni",checked:true}
        ]
    }])
})(angular);