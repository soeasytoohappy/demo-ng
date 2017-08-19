;(function (angular) {
    var app = angular.module("app", []);
    app.controller("AppController",["$scope",function ($scope) {
        $scope.title="记录";
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
                alert("需要输入内容")
                return;
            }
            var dataList = {
                name:$scope.content,
                checked:false
            };
            $scope.dataList.unshift(dataList);
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