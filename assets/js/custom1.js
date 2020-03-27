$(document).ready(function () {
    var selClass = 'active';
    $('label').click(function() {
        // Remove the defined class name in the `selClass` variable on any sibling that has it set
       $(this).parents('.filter-select').find('.' + selClass).removeClass(selClass);
        // Add the selected class to the button that was clicked
        $(this).addClass(selClass);
    });

    $( "#frm-datepicker" ).datepicker();
      $('.frm-calendar').click(function() {
        $("#frm-datepicker").focus();
    });

    $( "#to-datepicker" ).datepicker();
     $('.to-calendar').click(function() {
        $("#to-datepicker").focus();
    });
    
    // $("input").prop('disabled', false);
    // $("input").prop('disabled', true);
    $("#checkall").change(function(){
        $(".prditemtlist").prop("checked", $(this).prop("checked"));
    });
    $(".prditemtlist").change(function(){
       if($(this).prop("checked") == false) {
            $("#checkall").prop("checked", false);
       }
       if($(".prditemtlist:checked").length == $(".prditemtlist").length){
            $("#checkall").prop("checked", true);
       }
    });


  });