(function(angular) {
  'use strict';

  // Your starting point. Enjoy the ride!
  /**
   * MainMvc
   * 应用程序主要模块
   */
  var myApp = angular.module('MainMvc', []);
  //注册一个主要的控制器
  myApp.controller('MainController', ['$scope', function($scope) {

    function getId() {
      var id = Math.random();
      for (var i = 0; i < $scope.todos.length; i++) {
        if ($scope.todos[i].id === id) {
          id = getId();
          break;
        }
        return id;
      }

    }

    //文本框需要一个模型
    $scope.text = '';

    //任务列表需要一个模型
    //每一个任务的结构 {id:1,text:学习,complete:false}
    $scope.todos = [{
      id: 1,
      text: 'hhhhh',
      completed: false
    }, {
      id: 2,
      text: 'lllll',
      completed: false
    }, {
      id: 3,
      text: 'yyyyyy',
      completed: false
    }];

    //添加todo
    $scope.add = function() {
      if (!$scope.text) {
        return;
      }
      $scope.todos.push({
        id: getId(),
        text: $scope.text,
        conpleted: false
      });
      //清空文本框
      $scope.text = '';
    };

    //处理删除
    $scope.remove = function(id) {
      //删除谁
      for (var i = 0; i < $scope.todos.length; i++) {
        if ($scope.todos[i].id === id) {
          $scope.todos.splice(i, 1);
          break;
        }
      }
    };
    //是否已经完成
    $scope.existCompleted = function() {
      //前端根据放回值进行处理
      for (var i = 0; i < $scope.todos.length; i++) {
        if ($scope.todos[i].completed) {
          return true;
        }
      }
      return false;
    };
    //当前编辑哪个元素
    $scope.currentEditingId = -1;
    $scope.editing = function(id) {
      $scope.currentEditingId = id;
    };
    $scope.save = function() {
      $scope.currentEditingId = -1;
    }

    //清除已经完成
    $scope.clear = function() {
      var result = [];
      for (var i = 0; i < $scope.todos.length; i++) {
        if (!$scope.todos[i].completed) {
          result.push($scope.todos[i]);
        }
      }
      $scope.todos = result;
    };

    //全选
    var now = true;
    $scope.toggleAll = function() {
      for (var i = 0; i < $scope.todos.length; i++) {
        $scope.todos[i].completed = now;
      }
      now = !now;
    };

  }]);

})(angular);
