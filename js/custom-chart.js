$(document).ready(function() {
    $('.tooth-img path.teeth').click(function() {
        let id = $(this).data('id');

        $('.tooth-img path.teeth.active').removeClass('active');
        $(this).addClass('active');

        // $('#tooth_details_' + id).hide();
        $('.tooth-detail-outer.active').removeClass('active');
        $('#tooth_details_' + id).addClass('active');


        
    });
});