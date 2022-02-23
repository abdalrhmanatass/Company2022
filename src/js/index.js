import "@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css";
import "jquery/dist/jquery";
import "popper.js/dist/popper.min.js";
import "@laylazi/bootstrap-rtl/dist/js/bootstrap.js";
import "@fortawesome/fontawesome-free/js/all.min";
import "../sass/style.scss";

$(function () {
  $(".thumbnail2").hover(function () {
    $(this).find(".project-category").hide(250);
    $(this).find(".caption2").slideDown(250);
  });

  $(".thumbnail2").mouseleave(function () {
    $(this).find(".caption2").slideUp(250);
    $(this).find(".project-category").show(250);
  });

  $('.navbar-nav > li > a[href="index.html"]').parent().removeClass("active");
  var pathname = window.location.pathname;
  pathname = pathname.substring(1);
  console.log(pathname);
  if (pathname == "") {
    $('.navbar-nav > li > a[href="index.html"]').parent().addClass("active");
  }
  var test = $('.navbar-nav > li > a[href="' + pathname + '"]').parent();

  console.log(test);
  $('.navbar-nav > li > a[href="' + pathname + '"]')
    .parent()
    .addClass("active");
  if (pathname == "blog-details.html" || pathname == "add-blog.html") {
    $('.navbar-nav > li > a[href="blog.html"]').parent().addClass("active");
  }
  if (pathname == "project-details.html") {
    $('.navbar-nav > li > a[href="projects.html"]').parent().addClass("active");
  }

  var element1;

  $('[data-target="#exampleModal"]').on("click", function () {
    element1 = $(this).parent();
    setModal($(this));
  });

  $("#btnPravModal , #btnNextModal").on("click", function () {
    move($(this));
  });

  function setModal(test) {
    var imgModal = $(test).find("img");
    var srcImgModal = imgModal.attr("src");
    var titleImgModal = imgModal.attr("alt");
    var modal = $("#exampleModal");
    modal.find(".modal-title").text(titleImgModal);
    modal.find(".modal-body").children().attr("src", srcImgModal);
    $("#btnPravModal").show();
    $("#btnNextModal").show();
    if (element1.is(":first-child")) {
      $("#btnPravModal").hide();
    }
    if (element1.is(":last-child")) {
      $("#btnNextModal").hide();
    }
    console.log("done");
    console.log(srcImgModal);
  }

  function move(that) {
    if (that.attr("id") === "btnPravModal") {
      element1 = element1.prev();
    } else if (that.attr("id") === "btnNextModal") {
      element1 = element1.next();
    }
    setModal(element1);
  }

  // $.each($('[data-target="#exampleModal"]'), function (index, buton) {
  //   $(buton).on("click", function () {
  //     var element = $(this).parent();
  //     var imgModal = $(this).children("img");
  //     var srcImgModal = imgModal.attr("src");
  //     var titleImgModal = imgModal.attr("alt");
  //     var modal = $("#exampleModal");
  //     modal.find(".modal-title").text(titleImgModal);
  //     modal.find(".modal-body").children().attr("src", srcImgModal);
  //     $("#btnPravModal").show();
  //     $("#btnNextModal").show();
  //     if (element.is(":first-child")) {
  //       $("#btnPravModal").hide();
  //     }
  //     if (element.is(":last-child")) {
  //       $("#btnNextModal").hide();
  //     }
  //   });
  // });
});

var date = new Date();
var year = date.getFullYear();
document.getElementById("date").innerHTML = year;

// Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function () {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});
// code from cours
// let modalId = $("#image-gallery");

//   loadGallery(true, "a.thumbnail");

//   //This function disables buttons when needed
//   function disableButtons(counter_max, counter_current) {
//     $("#show-previous-image, #show-next-image").show();
//     if (counter_max === counter_current) {
//       $("#show-next-image").hide();
//     } else if (counter_current === 1) {
//       $("#show-previous-image").hide();
//     }
//   }

//   function loadGallery(setIDs, setClickAttr) {
//     let current_image,
//       selector,
//       counter = 0;

//     $("#show-next-image, #show-previous-image").click(function () {
//       if ($(this).attr("id") === "show-previous-image") {
//         current_image--;
//       } else {
//         current_image++;
//       }

//       selector = $('[data-image-id="' + current_image + '"]');
//       updateGallery(selector);
//     });

//     function updateGallery(selector) {
//       let $sel = selector;
//       current_image = $sel.data("image-id");
//       $("#image-gallery-title").text($sel.data("title"));
//       $("#image-gallery-image").attr("src", $sel.data("image"));
//       disableButtons(counter, $sel.data("image-id"));
//     }

//     if (setIDs == true) {
//       $("[data-image-id]").each(function () {
//         counter++;
//         $(this).attr("data-image-id", counter);
//       });
//     }
//     $(setClickAttr).on("click", function () {
//       updateGallery($(this));
//     });
//   }
