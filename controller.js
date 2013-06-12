
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
        if( console && console.log ) {
            console.log($scope.entry);
        }

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
