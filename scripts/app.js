
(function(){

    //import modules
    const $ = window.jQuery = require("jquery");
    require("bootstrap");
    const angular = require("angular");

    //ng app
    const app = angular.module("photoSelectApp",[]);

    //app controller
    app.controller("SelectDirectiveCtrl",function(){

        var vm = this;

        vm.test = ()=>{
            console.log(vm.selectedPhotoId);
        }

        vm.photos = [
            {
                Id:1,
                Title:"First Photo",
                PhotoUrl:"https://static.pexels.com/photos/27665/pexels-photo-27665.jpg"
            },
            {
                Id:2,
                Title:"Second Photo",
                PhotoUrl:"https://static.pexels.com/photos/8140/pexels-photo.jpg"
            },
            {
                Id:3,
                Title:"Third Photo",
                PhotoUrl:"https://static.pexels.com/photos/63953/pexels-photo-63953.jpeg"
            },
            {
                Id:4,
                Title:"Fourth Photo",
                PhotoUrl:"https://static.pexels.com/photos/55662/pexels-photo-55662.jpeg"
            }

        ]


    });

    //select directive
    app.directive("abPhotoSelect",function(){

        function linkFunc(scope,el,attr,ngCtrl){

            scope.showPhotos = false;
            scope.selected = null;
            scope.searchText = "";

            //selects photo and sets ngModel
            scope.selectPhoto = (photo)=>{
                scope.selected = photo;
                ngCtrl.$setViewValue(photo.PhotoId);
            }

        }

        return{
            restrict:"E", //el
            require:"ngModel", //requires ng-model
            link:linkFunc, //link function
            templateUrl:"/www/templates/ab-photo-select.template.html", //directive template
            scope:{
                photos:"=" // photos to be selected from
                // selected:"="
            }
        }
    })

})();
