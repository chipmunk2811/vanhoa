// Theme-light-dark
document.getElementById("lang_switch").onclick = function () {
    var themedark = document.getElementById("lang_vi")
    var themelight = document.getElementById("lang_eng")
    if (themedark) {
        themedark.id = "lang_eng"
    } else {
        themelight.id = "lang_vi"
    }

    var themeswitchdark = document.getElementById("lang_switch_vi")
    var themeswitchlight = document.getElementById("lang_switch_eng")
    if(themeswitchdark){
        themeswitchdark.id="lang_switch_eng";

         // Ẩn tất cả các phần tử ngôn ngữ
         document.querySelectorAll('.lang').forEach(el => el.style.display = 'none');
            
         // Hiển thị các phần tử theo ngôn ngữ đã chọn
         document.querySelectorAll('.lang-eng').forEach(el => el.style.display = 'inline');
       
    }else{
        themeswitchlight.id="lang_switch_vi";

        // Ẩn tất cả các phần tử ngôn ngữ
        document.querySelectorAll('.lang').forEach(el => el.style.display = 'none');
            
        // Hiển thị các phần tử theo ngôn ngữ đã chọn
        document.querySelectorAll('.lang-vi').forEach(el => el.style.display = 'inline');
    }
}

// window.addEventListener("scroll", handeScrolled);
// var header = document.getElementById("header");
// function handeScrolled(e) {
//     if (scrollY >= 80) {
//         header.classList.add("nav-fix");
//     } else {
//         header.classList.remove("nav-fix");
//     }
// }

