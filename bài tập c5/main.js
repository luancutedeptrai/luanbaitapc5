$(document).ready(function(){
    // Hiển thị menu dropdown khi hover
    $("#dropdownMenuButton").mouseenter(function(){
        $("#myDropdown").show(); // Hiển thị menu
    });

    // Ẩn menu dropdown khi hover ra ngoài, nhưng không ẩn nếu chuột nằm trên menu
    $("#dropdownMenuButton").mouseleave(function(event){
        // Kiểm tra xem chuột có đang nằm trên menu hay không
        if (!$(event.relatedTarget).closest(".dropdown-menu").length) {
            $("#myDropdown").hide(); // Ẩn menu
        }
    });

    $("#myDropdown").mouseleave(function(event){ 
        $("#myDropdown").hide();
    });
});
