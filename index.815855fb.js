$((function(){$(".slider-products").slick({vertical:!0,verticalSwiping:!0,slidesToShow:2,slidesToScroll:2,prevArrow:'<button type="button" class="btn btn-up"></button>',nextArrow:'<button type="button" class="btn btn-down"></button>'})})),$(".slider-gallery").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!0,dots:!0,autoplay:!0,autoplaySpeed:4e3}),function(){var e={openMenuBtn:document.querySelector("[menu-open]"),closeMenuBtn:document.querySelectorAll("[menu-close]"),menu:document.querySelector("[menu]"),body:document.querySelector("body"),menuList:document.querySelector(".menu-list"),openContactModalBtn:document.querySelectorAll(".contacts-open"),closeContactModalBtn:document.querySelector(".contacts-close"),contactModal:document.querySelector(".contact-modal"),openOrderModalBtn:document.querySelectorAll(".order-open"),closeOrderModalBtn:document.querySelector(".order-close"),orderModal:document.querySelector(".order-modal")};function n(e,n){e.classList.remove("is-hidden"),n.classList.add("no-scroll")}function o(e,n){e.classList.add("is-hidden"),n.classList.remove("no-scroll")}e.openMenuBtn.addEventListener("click",(function(){return n(e.menu,e.body)})),e.closeMenuBtn.forEach((function(n){return n.addEventListener("click",(function(){return o(e.menu,e.body)}))})),e.menuList.addEventListener("click",(function(){return o(e.menu,e.body)})),e.openContactModalBtn.forEach((function(o){return o.addEventListener("click",(function(){return n(e.contactModal,e.body)}))})),e.closeContactModalBtn.addEventListener("click",(function(){return o(e.contactModal,e.body)})),e.openOrderModalBtn.forEach((function(o){return o.addEventListener("click",(function(){return n(e.orderModal,e.body)}))})),e.closeOrderModalBtn.addEventListener("click",(function(){return o(e.orderModal,e.body)})),window.addEventListener("keydown",(function(n){"Escape"===n.key&&(e.menu.classList.contains("is-hidden")||o(e.menu,e.body),e.contactModal.classList.contains("is-hidden")||o(e.contactModal,e.body),e.orderModal.classList.contains("is-hidden")||o(e.orderModal,e.body))}))}();
//# sourceMappingURL=index.815855fb.js.map
