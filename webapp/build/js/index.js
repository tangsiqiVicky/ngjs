'use strict';

angular.module('app',['ui.router']);
'use strict';

angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('main',{
        url:'/main',
        templateUrl:'view/main.html',
        controller:'mainCtrl'
    }).state('position',{
        url:'/position/:id',
        templateUrl:'view/position.html',
        controller:'positionCtrl'

    });
    $urlRouterProvider.otherwise('main');
}]);
'use strict';

angular.module('app').controller('mainCtrl',['$scope',function ($scope) {
    $scope.list =[
        {
            id:'1',
            name:'销售',
            imgSrc:'image/company-3.png',
            companyName:'百度',
            city:'上海',
            industry:'互联网',
            time:'2016-06-01'
        },
        {
            id:'2',
            name:'web前端',
            imgSrc:'image/company-1.png',
            companyName:'慕课网',
            city:'北京',
            industry:'互联网',
            time:'2017-06-01'
        },
    ];
}]);
'use strict'
angular.module('app').controller('positionCtrl',['$scope',function () {

}]);
'use strict';
angular.module('app').directive('appCompany',[function () {
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/company.html'
    };
}]);
'use strict';
angular.module('app').directive('appFoot',[function () {
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/foot.html'
    };
}]);
'use strict';

angular.module('app').directive('appHead',[function () {
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/head.html'
    };
}]);
'use strict';

angular.module('app').directive('appHeadBar',[function () {
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/headBar.html',
        scope:{
           text:'@',
        },
        link:function ($scope) {
            $scope.back = function(){
                window.history.back();
            };
        }
    };
}]);
'use strict';

angular.module('app').directive('appPositionInfo',[function () {
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/positionInfo.html',
        scope:{
            isActive:'='
        },
        link:function ($scope) {
            $scope.imagePath = $scope.isActive?'image/star-active.png':'image/star.png';
        }
    };
}]);
'use strict';

angular.module('app').directive('appPositionList',[function () {
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/positionList.html',
        scope:{
            data:'='
        }
    };
}]);