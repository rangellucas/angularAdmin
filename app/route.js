mainApp.config(function($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/index');
  $stateProvider
    .state('index', {
      url: "/index",
      controller: "",
      templateUrl: "app/index.html",
      resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([
            'app/shared/sidebar/controller.js',
            'app/shared/sidebar/directive.js',
            'app/shared/sidebar/service.js',            
          ]);
        }]
       }     
    })
    .state('index.elements', {
      url: "index/elements",
      controller: "CtrlElements",
      templateUrl: "app/components/elements/view.html",
      resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([
            'app/components/elements/controller.js',
            'app/components/elements/service.js'                       
          ]);
        }]
       }     
    })
    .state('index.forms', {
      url: "index/forms",
      controller: "CtrlForms",
      templateUrl: "app/components/forms/view.html",
      resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([
            'app/components/forms/controller.js',
            'app/components/forms/service.js'                       
          ]);
        }]
       }     
    })
    .state('index.tables', {
      url: "index/tables",
      controller: "CtrlTables",
      templateUrl: "app/components/tables/view.html",
      resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([
            'app/components/tables/controller.js',
            'app/components/tables/service.js'                       
          ]);
        }]
       }     
    })
    .state('login', {
      url: "/login",
      controller: "Login",      
      templateUrl: "app/components/login/view.html",
      resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
        loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
          // you can lazy load files for an existing module
          return $ocLazyLoad.load([
            'app/components/login/controller.js',
            'app/components/login/service.js',
            'assets/css/login.css'
          ]);
        }]
       }
    })    
});

mainApp.run(['$rootScope', '$timeout', 'SrvLoad', 'SrvAlert', function($rootScope, $timeout, SrvLoad, SrvAlert) {
  
  $rootScope.$on('$locationChangeStart', function(event, url, oldUrl, state, oldState) {
    /* Notify page is loading */
    SrvLoad.loading();
  });

  $rootScope.$on('$locationChangeSuccess', function(event, url, oldUrl, state, oldState) {
    
    /* Notify page is loaded */
    $timeout(function() {
      SrvLoad.loaded();      
    }, 2000);
  });

}]);