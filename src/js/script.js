/****dropdown menu****/
function createMenuList(){

    let $menu = $("<div class='forkio__slogan__dropDownMenu'></div>");

    $menu.css({
        position:"absolute",
        top:"0",
        backgroundColor:"#333333"
    });
    $('.forkio__slogan').append($menu);

    const $menuList1=$("<div class='forkio__slogan__dropDownMenu__list '><a href='#' class='forkio__slogan__dropDownMenu__list--link'>Overview</a></div>");
    const $menuList2=$("<div class='forkio__slogan__dropDownMenu__list'><a href='#' class='forkio__slogan__dropDownMenu__list--link'>About Fork</a></div>");
    const $menuList3=$("<div class='forkio__slogan__dropDownMenu__list '><a href='#' class='forkio__slogan__dropDownMenu__list--link'>Buying Options</a></div>");
    const $menuList4=$("<div class='forkio__slogan__dropDownMenu__list '><a href='#' class='forkio__slogan__dropDownMenu__list--link'>Support</a></div>");
    $menu.append($menuList1,$menuList2,$menuList3,$menuList4);
}

createMenuList();
$('.forkio__slogan__dropDownMenu').hide();

let $menuClick = $('.forkio__navbar__menu');
let count=0;
$menuClick.click(function (event) {
    if(count===0){
        $('.forkio__slogan__dropDownMenu').show();
        count=1;
    }
    else{
        $('.forkio__slogan__dropDownMenu').hide();
        count=0;
    }
});
