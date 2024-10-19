

// (function ($) {
// 	"use strict";
    
//     var bootsnav = {
//         initialize: function() {
//             this.event();
//             this.hoverDropdown();
//             this.navbarSticky();
//             // this.navbarScrollspy();
//         },
//         event : function(){
            
//             // ------------------------------------------------------------------------------ //
//             // Variable
//             // ------------------------------------------------------------------------------ //
//             var getNav = $("nav.navbar.bootsnav");
            
//             // ------------------------------------------------------------------------------ //
//             // Navbar Sticky 
//             // ------------------------------------------------------------------------------ //
//             var navSticky = getNav.hasClass("navbar-sticky");
//             if( navSticky ){
//                 // Wraped navigation
//                 getNav.wrap("<div class='wrap-sticky'></div>");
//             }   
            
//             // ------------------------------------------------------------------------------ //
//             // Navbar Center 
//             // ------------------------------------------------------------------------------ //
//             if( getNav.hasClass("brand-center")){                
//                 var postsArr = new Array(),
//                     index = $("nav.brand-center"),
//                     $postsList = index.find('ul.navbar-nav');
				
// 				index.prepend("<span class='storage-name' style='display:none;'></span>");
                
//                 //Create array of all posts in lists
//                 index.find('ul.navbar-nav > li').each(function(){
// 					if( $(this).hasClass("active") ){
// 						var getElement = $("a", this).eq(0).text();
// 						$(".storage-name").html(getElement);
// 					}
//                     postsArr.push($(this).html());
//                 });
                
//                 //Split the array at this point. The original array is altered.
//                 var firstList = postsArr.splice(0, Math.round(postsArr.length / 2)),
//                     secondList = postsArr,
//                     ListHTML = '';
                
//                 var createHTML = function(list){
//                     ListHTML = '';
//                     for (var i = 0; i < list.length; i++) {
//                         ListHTML += '<li>' + list[i] + '</li>'
//                     }
//                 }
                
//                 //Generate HTML for first list
//                 createHTML(firstList);
//                 $postsList.html(ListHTML);
//                 index.find("ul.nav").first().addClass("navbar-left");
                
//                 //Generate HTML for second list
//                 createHTML(secondList);
//                 //Create new list after original one
//                 $postsList.after('<ul class="nav navbar-nav"></ul>').next().html(ListHTML);
//                 index.find("ul.nav").last().addClass("navbar-right");
                
//                 //Wrap navigation menu
//                 index.find("ul.nav.navbar-left").wrap("<div class='col-half left'></div>");
//                 index.find("ul.nav.navbar-right").wrap("<div class='col-half right'></div>");
                
//                 //Selection Class
//                 index.find('ul.navbar-nav > li').each(function(){ 
//                     var dropDown = $("ul.dropdown-menu", this),
//                         megaMenu = $("ul.megamenu-content", this);
//                     dropDown.closest("li").addClass("dropdown");
//                     megaMenu.closest("li").addClass("megamenu-fw");
//                 });
				
// 				var getName = $(".storage-name").html();
// 				if( !getName == ""  ){
// 					$( "ul.navbar-nav > li:contains('" + getName + "')" ).addClass("active");
// 				}		
//             } 
            
            
//             // ------------------------------------------------------------------------------ //
//             // Navbar Sidebar 
//             // ------------------------------------------------------------------------------ //
//             if( getNav.hasClass("navbar-sidebar")){
//                 // Add Class to body
//                 $("body").addClass("wrap-nav-sidebar");
//                 getNav.wrapInner("<div class='scroller'></div>");
//             }else{
//                 $(".bootsnav").addClass("on");
//             }
            
//             // ------------------------------------------------------------------------------ //
//             // Menu Center 
//             // ------------------------------------------------------------------------------ //
//             if( getNav.find("ul.nav").hasClass("navbar-center")){
//                 getNav.addClass("menu-center");
//             }
            
//             // ------------------------------------------------------------------------------ //
//             // Navbar Full
//             // ------------------------------------------------------------------------------ //
//             if( getNav.hasClass("navbar-full")){
//                 // Add Class to body
//                 $("nav.navbar.bootsnav").find("ul.nav").wrap("<div class='wrap-full-menu'></div>");
//                 $(".wrap-full-menu").wrap("<div class='nav-full'></div>");
//                 $("ul.nav.navbar-nav").prepend("<li class='close-full-menu'><a href='#'><i class='fa fa-times'></i></a></li>");
//             }else if( getNav.hasClass("navbar-mobile")){
//                 getNav.removeClass("no-full");
//             }else{
//                 getNav.addClass("no-full");
//             }
                
//             // ------------------------------------------------------------------------------ //
//             // Navbar Mobile
//             // ------------------------------------------------------------------------------ //
//             if( getNav.hasClass("navbar-mobile")){
//                 // Add Class to body
//                 $('.navbar-collapse').on('shown.bs.collapse', function () {
//                     console.log("Sidebar opened");
//                     $("body").addClass("side-right");
//                 });
//                 $('.navbar-collapse').on('hide.bs.collapse', function () {
//                     console.log("Sidebar closed");
//                     $("body").removeClass("side-right");
//                 });
                
//             }
            
//             // ------------------------------------------------------------------------------ //
//             // Navbar Fixed
//             // ------------------------------------------------------------------------------ //
//             if( getNav.hasClass("no-background")){
//                 $(window).on("scroll", function(){
//                     var scrollTop = $(window).scrollTop();
//                     if(scrollTop >34){
//                         $(".navbar-fixed").removeClass("no-background");
//                     }else {
//                         $(".navbar-fixed").addClass("no-background");
//                     }
//                 });
//             }
            
//             // ------------------------------------------------------------------------------ //
//             // Navbar Fixed
//             // ------------------------------------------------------------------------------ //
//             if( getNav.hasClass("navbar-transparent")){
//                 $(window).on("scroll", function(){
//                     var scrollTop = $(window).scrollTop();
//                     if(scrollTop >34){
//                         $(".navbar-fixed").removeClass("navbar-transparent");
//                     }else {
//                         $(".navbar-fixed").addClass("navbar-transparent");
//                     }
//                 });
//             }
            
//             // ------------------------------------------------------------------------------ //
//             // Button Cart
//             // ------------------------------------------------------------------------------ //
//             $(".btn-cart").on("click", function(e){
//                 e.stopPropagation();
//             });
            
//             // ------------------------------------------------------------------------------ //
//             // Toggle Search
//             // ------------------------------------------------------------------------------ //
//             $("nav.navbar.bootsnav .attr-nav").each(function(){  
//                 $("li.search > a", this).on("click", function(e){
//                     e.preventDefault();
//                     $(".top-search").slideToggle();
//                 });
//             });
//             $(".input-group-addon.close-search").on("click", function(){
//                 $(".top-search").slideUp();
//             });
            
//            
        

//        
//        

//                     
                
//                 
                
//                 
                
//                 // Toggle Bars
//                 $(".navbar-toggle").each(function(){
//                     $(this).off("click");
//                     $(this).on("click", function(){
//                         $(".fa", this).toggleClass("fa-bars");
//                         $(".fa", this).toggleClass("fa-times");
//                         cleanOpen();
//                     });
//                 });

//             }else if( getWindow > 991 ){
//                 // Height of scroll navigation sidebar
//                 $(".scroller").css("height", getHeight + "px");
                
//                 
                
//                 
// }(jQuery));

const getNav = document.querySelector('nav.navbar.bootsnav');
// Toggle Side Menu
document.querySelectorAll("nav.navbar.bootsnav .attr-nav li.side-menu > a").forEach(function(menuLink) {
    menuLink.addEventListener("click", function(e) {
        e.preventDefault();
        
        // Toggle the 'on' class for the side menu
        document.querySelector("nav.navbar.bootsnav > .side").classList.toggle("on");
        
        // Toggle the 'on-side' class for the body element
        document.body.classList.toggle("on-side");
    });
});

// Close Side Menu on click
document.querySelectorAll(".side .close-side").forEach(function(closeButton) {
    closeButton.addEventListener("click", function(e) {
        e.preventDefault();
        
        // Remove the 'on' class from the side menu
        document.querySelector("nav.navbar.bootsnav > .side").classList.remove("on");
        
        // Remove the 'on-side' class from the body
        document.body.classList.remove("on-side");
    });
});

// Wrap Inner Content in 'wrapper' div
const bodyContent = document.body.innerHTML;
document.body.innerHTML = `<div class='wrapper'>${bodyContent}</div>`;

function hoverDropdown() {
    
    const windowWidth = window.innerWidth;

    if (windowWidth < 991) {
        // Disable mouseenter for small screens
        const dropdowns = document.querySelectorAll("nav.navbar.bootsnav ul.nav li.dropdown");
        dropdowns.forEach(function(dropdown) {
            dropdown.removeEventListener("mouseenter", handleDropdownHover);
            dropdown.removeEventListener("mouseleave", handleDropdownLeave);
        });

        // Add click event to toggle dropdown on mobile
        const dropdownToggles = document.querySelectorAll("a.dropdown-toggle");
        dropdownToggles.forEach(function(toggle) {
            toggle.addEventListener("click", function(e) {
                e.stopPropagation();
                
                const dropdownMenu = toggle.closest("li.dropdown").querySelector(".dropdown-menu");
                dropdownMenu.classList.toggle("show"); // Bootstrap 5 uses "show" class to toggle visibility
                
                // Toggle 'on' class for additional styling
                toggle.closest("li.dropdown").classList.toggle("on");
            });
        });
    } else {
        // Desktop screen logic - Enable hover event
        document.querySelectorAll("li.dropdown").forEach(function(dropdown) {
            dropdown.addEventListener("mouseenter", function() {
                const dropdownMenu = dropdown.querySelector(".dropdown-menu");
                dropdownMenu.classList.add("show");
                dropdown.classList.add("on");
            });
            dropdown.addEventListener("mouseleave", function() {
                const dropdownMenu = dropdown.querySelector(".dropdown-menu");
                dropdownMenu.classList.remove("show");
                dropdown.classList.remove("on");
            });
        });
    }
}

// Helper function for hover behavior
function handleDropdownHover(event) {
    const dropdownMenu = this.querySelector(".dropdown-menu");
    dropdownMenu.classList.add("show");
    this.classList.add("on");
}

function handleDropdownLeave(event) {
    const dropdownMenu = this.querySelector(".dropdown-menu");
    dropdownMenu.classList.remove("show");
    this.classList.remove("on");
}

// Initialize on window load and resize
window.addEventListener("load", hoverDropdown);
window.addEventListener("resize", hoverDropdown);

// Megamenu style
document.querySelectorAll(".megamenu-fw").forEach(function(megamenu) {
    // Loop through each 'col-menu'
    megamenu.querySelectorAll(".col-menu").forEach(function(colMenu) {
        const content = colMenu.querySelector(".content");
        const title = colMenu.querySelector(".title");

        // Add 'animated' class to content
        content.classList.add("animated");

        // Initially hide the content
        content.style.display = "none";

        // Handle click on title to toggle the content display
        title.addEventListener("click", function(event) {
            event.preventDefault();

            // Toggle visibility of the content with `fadeToggle` equivalent
            if (content.style.display === "none") {
                content.style.display = "block";
                content.classList.add(getIn);  // Assuming `getIn` is a class that handles animations
            } else {
                content.style.display = "none";
                content.classList.remove(getIn);
            }

            // Toggle 'on' class on the col-menu
            colMenu.classList.toggle("on");
        });

        // Prevent event propagation on the content click
        content.addEventListener("click", function(event) {
            event.stopPropagation();
        });
    });
});

// Define cleanOpen function to close open dropdowns and menus
var cleanOpen = function() {
    // Remove 'on' class from all dropdowns
    document.querySelectorAll("li.dropdown").forEach(function(dropdown) {
        dropdown.classList.remove("on");
    });

    // Hide all dropdown menus
    document.querySelectorAll(".dropdown-menu").forEach(function(menu) {
        menu.classList.remove("show"); // In Bootstrap 5, 'show' class controls dropdown visibility
    });

    // Remove 'on' class from col-menu
    document.querySelectorAll(".col-menu").forEach(function(colMenu) {
        colMenu.classList.remove("on");
    });

    // Hide content within col-menu
    document.querySelectorAll(".col-menu .content").forEach(function(content) {
        content.style.display = "none"; // Directly hide the element
    });
};

// Hidden on mouse leave for the navbar
// document.querySelector("nav.navbar.bootsnav").addEventListener("mouseleave", function() {
//     cleanOpen();
// });

document.querySelectorAll("nav.navbar.bootsnav .attr-nav").forEach(function(attrNav) {
    // Remove 'animated' class from dropdown menus
    attrNav.querySelectorAll(".dropdown-menu").forEach(function(menu) {
        menu.classList.remove("animated");
    });

    // Handle click event on dropdown-toggle links
    attrNav.querySelectorAll("a.dropdown-toggle").forEach(function(toggle) {
        toggle.removeEventListener("click", function() {}); // Remove any existing listeners
        toggle.addEventListener("click", function(e) {
            e.stopPropagation(); // Prevent event bubbling

            const dropdownMenu = toggle.closest("li.dropdown").querySelector(".dropdown-menu");
            if (dropdownMenu) {
                dropdownMenu.classList.toggle("show"); // Toggle the 'show' class for Bootstrap 5 dropdowns
            }

            // Reset navbar toggle icon and collapse state
            document.querySelectorAll(".navbar-toggle").forEach(function(navbarToggle) {
                const icon = navbarToggle.querySelector(".fa");
                if (icon) {
                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");
                }

                const navbarCollapse = document.querySelector(".navbar-collapse");
                if (navbarCollapse) {
                    navbarCollapse.classList.remove("show", "on");
                }
            });
        });
    });

    // Handle mouseleave event to hide dropdowns
    attrNav.addEventListener("mouseleave", function() {
        const dropdownMenu = attrNav.querySelector(".dropdown-menu");
        if (dropdownMenu) {
            dropdownMenu.classList.remove("show"); // Hide dropdown by removing 'show' class
        }
        const dropdownItem = attrNav.querySelector("li.dropdown");
        if (dropdownItem) {
            dropdownItem.classList.remove("on");
        }
    });
});


if (getNav.classList.contains("navbar-sidebar")) {
    // Hover effect Sidebar Menu
    document.querySelectorAll("nav.navbar.bootsnav ul.nav").forEach(function(nav) {
        const dropdownToggles = nav.querySelectorAll("a.dropdown-toggle");

        dropdownToggles.forEach(function(toggle) {
            toggle.removeEventListener('click', function() {});
            toggle.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        });

        const dropdownMenus = nav.querySelectorAll(".dropdown-menu");
        dropdownMenus.forEach(function(menu) {
            menu.classList.add("animated");
        });

        const dropdownItems = nav.querySelectorAll("li.dropdown");
        dropdownItems.forEach(function(item) {
            item.addEventListener("mouseenter", function() {
                const menu = item.querySelector(".dropdown-menu");
                if (menu) {
                    menu.classList.remove(getOut);
                    menu.style.display = "block"; // Show the menu
                    menu.classList.add(getIn);
                    item.classList.add("on");
                }
                return false;
            });

            const colMenus = nav.querySelectorAll(".col-menu");
            colMenus.forEach(function(col) {
                const content = col.querySelector(".content");
                content.classList.add("animated");
                const title = col.querySelector(".title");

                title.addEventListener("mouseenter", function() {
                    const contentToShow = col.querySelector(".content");
                    contentToShow.style.display = "block"; // Show the content
                    contentToShow.classList.add(getIn);
                    col.classList.add("on");
                    return false;
                });
            });

            item.addEventListener("mouseleave", function() {
                const menu = item.querySelector(".dropdown-menu");
                if (menu) {
                    menu.classList.remove(getIn);
                    menu.style.display = "none"; // Hide the menu
                    menu.classList.add(getOut);
                }
                const colMenu = nav.querySelectorAll(".col-menu");
                colMenu.forEach(function(col) {
                    const content = col.querySelector(".content");
                    content.style.display = "none"; // Hide the content
                    content.classList.remove(getIn);
                    col.classList.remove("on");
                });
                item.classList.remove("on");
                return false;
            });
        });
    });
} else {
    // Hover effect Default Menu
    document.querySelectorAll("nav.navbar.bootsnav ul.nav").forEach(function(nav) {
        const dropdownToggles = nav.querySelectorAll("a.dropdown-toggle");

        dropdownToggles.forEach(function(toggle) {
            toggle.removeEventListener('click', function() {});
            toggle.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        });

        const megamenus = nav.querySelectorAll(".megamenu-fw");
        megamenus.forEach(function(menu) {
            const title = menu.querySelector(".title");
            title.removeEventListener("click", function() {});
            const toggle = menu.querySelector("a.dropdown-toggle");
            toggle.removeEventListener("click", function() {});
            const content = menu.querySelector(".content");
            content.classList.remove("animated");
        });

        const dropdownMenus = nav.querySelectorAll(".dropdown-menu");
        dropdownMenus.forEach(function(menu) {
            menu.classList.add("animated");
        });

        const dropdownItems = nav.querySelectorAll("li.dropdown");
        dropdownItems.forEach(function(item) {
            item.addEventListener("mouseenter", function() {
                const menu = item.querySelector(".dropdown-menu");
                if (menu) {
                    menu.classList.remove(getOut);
                    menu.style.display = "block"; // Show the menu
                    menu.classList.add(getIn);
                    item.classList.add("on");
                }
                return false;
            });

            item.addEventListener("mouseleave", function() {
                const menu = item.querySelector(".dropdown-menu");
                if (menu) {
                    menu.classList.remove(getIn);
                    menu.style.display = "none"; // Hide the menu
                    menu.classList.add(getOut);
                }
                item.classList.remove("on");
            });

            nav.addEventListener("mouseleave", function() {
                const menu = item.querySelector(".dropdown-menu");
                if (menu) {
                    menu.classList.remove(getIn);
                    menu.style.display = "none"; // Hide the menu
                    menu.classList.add(getOut);
                }
                item.classList.remove("on");
                return false;
            });
        });
    });
}

document.querySelectorAll("nav.navbar.bootsnav .attr-nav").forEach(function(attrNav) {                      
    const dropdownToggle = attrNav.querySelectorAll("a.dropdown-toggle");
    
    dropdownToggle.forEach(function(toggle) {
        toggle.removeEventListener('click', function() {});
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }); 

    const dropdownMenu = attrNav.querySelectorAll(".dropdown-menu");
    dropdownMenu.forEach(function(menu) {
        menu.classList.add("animated");
    });

    const dropdownItems = attrNav.querySelectorAll("li.dropdown");
    dropdownItems.forEach(function(item) {
        item.addEventListener("mouseenter", function() {
            const menu = item.querySelector(".dropdown-menu");
            if (menu) {
                menu.classList.remove(getOut);
                menu.style.display = "block"; // Show the menu
                menu.classList.add(getIn);
                item.classList.add("on");
            }
            return false;
        });

        item.addEventListener("mouseleave", function() {
            const menu = item.querySelector(".dropdown-menu");
            if (menu) {
                menu.classList.remove(getIn);
                menu.style.display = "none"; // Hide the menu
                menu.classList.add(getOut);
                item.classList.remove("on");
            }
        });
    });

    attrNav.addEventListener("mouseleave", function() {
        dropdownMenu.forEach(function(menu) {
            menu.classList.remove(getIn);
            menu.style.display = "none"; // Hide the menu
            menu.classList.add(getOut);
        });
        dropdownItems.forEach(function(item) {
            item.classList.remove("on");
        });
        return false;
    });
});


if (getNav.classList.contains("navbar-full")) {
    var windowHeight = window.innerHeight,
        windowWidth = window.innerWidth;

    document.querySelector(".nav-full").style.height = windowHeight + "px";
    document.querySelector(".wrap-full-menu").style.height = windowHeight + "px";
    document.querySelector(".wrap-full-menu").style.width = windowWidth + "px";
    
    document.querySelector(".navbar-collapse").classList.add("animated");
    document.querySelectorAll(".navbar-toggle").forEach(function(toggle) {
        var getId = toggle.getAttribute("data-target");
        
        toggle.removeEventListener("click", function() {});
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(getId).classList.remove(getOut);
            document.querySelector(getId).classList.add("in");
            document.querySelector(getId).classList.add(getIn);
            return false;
        });
        
        document.querySelector("li.close-full-menu").addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(getId).classList.add(getOut);
            setTimeout(function() {
                var element = document.querySelector(getId);
                element.classList.remove("in");
                element.classList.remove(getIn);
            }, 500);
            return false;
        });
    });
};

navbarSticky: function() {  
    var getNav = document.querySelector("nav.navbar.bootsnav"),
        navSticky = getNav.classList.contains("navbar-sticky");

    if (navSticky) {
        // Set Height Navigation
        var getHeight = getNav.offsetHeight;             
        document.querySelector(".wrap-sticky").style.height = getHeight + "px";

        // Window on scroll
        var getOffset = document.querySelector(".wrap-sticky").offsetTop;

        window.addEventListener("scroll", function() {  
            var scrollTop = window.scrollY;
            if (scrollTop > getOffset) {
                getNav.classList.add("sticked");
            } else {
                getNav.classList.remove("sticked");
            }
        });
    }   
}
// Initialize
document.addEventListener("DOMContentLoaded", function() {
    bootsnav.initialize();
});

// Reset on resize
window.addEventListener("resize", function() {
    // Assuming bootsnav.hoverDropdown() is a custom function that you still want to call
    bootsnav.hoverDropdown();

    // Delay executing navbarSticky by 500 milliseconds
    setTimeout(function() {
        bootsnav.navbarSticky();
    }, 500);  // Delay of 500ms
});

// Use vanilla JS instead of jQuery
document.querySelectorAll('.navbar-toggler').forEach(function(toggler) {
    toggler.addEventListener('click', function() {
        let icon = toggler.querySelector('.fa');
        
        // Toggle between 'fa-bars' and 'fa-times'
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }

        
        toggler.classList.remove('fixed');
    });
});

// For collapse functionality
let navbarCollapse = document.querySelector('.navbar-collapse');
navbarCollapse.classList.remove('show');  
navbarCollapse.classList.remove('on');    
navbarCollapse.classList.remove('bounceIn');  
