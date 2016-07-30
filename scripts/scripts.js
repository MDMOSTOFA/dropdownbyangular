/// <reference path="angular.min.js" />
var App = angular.module('myModule', ['ui.bootstrap']);
App.controller('myController', function ($scope) {
    //       var myApp = angular.module("myModule", []).controller("myController", function ($scope) {
    var menuIteams = [
        {
            menuElement: "Araçlar Menusu"
            , SubMenuElements: [
                {
                    menuElement: "Açıklama"
                    }
                    , {
                    menuElement: "Filtre"
                    }
                    , {
                    menuElement: "Tablo"
                    }
                    , {
                    menuElement: "Görüntü"
                    }
				]
			}
            , {
            menuElement: "Grafik Menusu"
            , SubMenuElements: [
                {
                    menuElement: "Bar"
                    }
                    , {
                    menuElement: "satır"
                    }

                    , {
                    menuElement: "sütun"
                    }
                    , {
                    menuElement: "3D Dağılım "
                    }
                    , {
                    menuElement: "Pie"
                    }
                    , {
                    menuElement: "treemap Büyük"
                    }
                    , {
                    menuElement: "Negatif Bar"
                    }
                    , {
                    menuElement: "Sütun dağılım"
                    }
                    , {
                    menuElement: "Örümcek"
                    }
                    , {
                    menuElement: "Formula"
                    }

				]
			}
            , {
            menuElement: "Formuller Menusu"
            , SubMenuElements: [
                {
                    menuElement: "Properties"
                    }
				]
			}
			];
    $scope.menuIteams = menuIteams;
    $scope.menuIteamsView = "include/sub_menu.html";
    $scope.select = function (item) {
        $scope.selected = ($scope.selected === item ? null : item);
    };
    $scope.isActive = function (item) {
        return $scope.selected === item;
    };
}), App.controller('rightSidbar', function ($scope) {
    var navElements = [
        {
            titale1: "Genel"
            , titale2: "Filtreler"
            , titale3: "Parametreler"
        }
        , {
            firstName: [
                {
                    label: "Repor Basngi"
                }
                , {
                    inputPlaceholder: "SIFIR GUNLUK BEBEK OLUMLERI"
                }
                    ]
        }

        , {
            lastName: [
                {
                    label: "Y Eksen Tanimi"
                }

                    ]
        }

    ];
    $scope.navElements = navElements;
    $scope.navElementsView = "include/right_sidbar.html";
});