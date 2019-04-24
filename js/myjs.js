 $(document).ready(function(){
 
$('#itemslider').carousel({ interval: 3000 });
 
$('.carousel-showmanymoveone .item').each(function(){
var itemToClone = $(this);
 
for (var i=1;i<6;i++) {
itemToClone = itemToClone.next();
 
if (!itemToClone.length) {
itemToClone = $(this).siblings(':first');
}
 
itemToClone.children(':first-child').clone()
.addClass("cloneditem-"+(i))
.appendTo($(this));
}
});
});


 function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
 
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
            // clear and hide result container when we press close
            container.find('.result-container').fadeOut(100, function(){$(this).empty();});
        }
}

