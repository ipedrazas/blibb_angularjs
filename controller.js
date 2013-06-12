// var VideoController = function ($scope, $http) {

//     var serviceUrl = "/api/videos";

//     var blankVideo = {
//         Id: "",
//         Title: "",
//         Length: 75
//     };

//     var refreshVideos = function() {
//         $http.get(serviceUrl).success(function (data) {
//             $scope.videos = data;
//         });
//     };

//     $scope.isEditVisible = false;

//     $scope.showEdit = function () {
//         $scope.isEditVisible = true;
//         $scope.editableVideo = angular.copy(blankVideo);
//     };

//     $scope.saveVideo = function() {
//         $scope.isEditVisible = false;
//         $http.post(serviceUrl, $scope.editableVideo)
//              .success(function (video) {
//                  $scope.videos.push(video);
//              });
//     };

//     refreshVideos();
// };

//resp.setHeader("Access-Control-Allow-Headers", req.getHeader("Access-Control-Request-Headers"));
var EntryController = function ($scope, $http) {

    var serviceUrl = "http://api.oioi.me/ipedrazas/service-for-angular-js";

    var blankEntry = {
        name: "",
        email: ""
    };

    var refreshEntries = function(){
      $http.get(serviceUrl).success(function (data) {
            $scope.entries = data.items;
        });
    };

    $scope.showEdit = function () {
        $scope.isEditVisible = true;
        $scope.editableEntry = angular.copy(blankEntry);
    };

    $scope.saveEntry = function() {
        $scope.isEditVisible = false;
        $scope.entry.app_token = "service-for-angular-js";
        // console.log($scope.entry);

        //
        //  This should work but gives a CORS error
        //
        // $http.post(serviceUrl, $scope.entry)
        //      .success(function (entry) {
        //          $scope.entries.push(entry);
        //      });

        $.ajax({
          type: "POST",
          url: serviceUrl,
          data: $scope.entry
        }).done(function ( data ) {
              $scope.entries.push($scope.entry);

            });
        refreshEntries();
    };

    refreshEntries();
};
