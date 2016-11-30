
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

        //NOT FINISHED - WILL BE COMMENTED WHEN FINISHED

        function linkFunc(scope,el,attr,ngCtrl){

            el.on("click",".photo-container",function(e){
                const clickedImg = $(this);
                scope.$apply(function(){
                    scope.selected = clickedImg.find("img").attr("src");
                    console.log(clickedImg.find("img").attr("src"));
                });

            });
            scope.showPhotos = false;
            scope.searchText = "";

        }

        return{
            restrict:"E", //el
            require:"ngModel", //requires ng-model
            link:linkFunc, //link function
            templateUrl:"/www/templates/ab-photo-select.template.html", //directive template
            scope:{
                photos:"=", //scope
                selected:"="
            }
        }
    })

})();
