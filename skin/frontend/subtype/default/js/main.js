/**
 * Created by User on 5/5/2016.
 */
$j(document).ready(function() {
    function setMenuPosition(){
        if($j(window).width() < 771){
            if($j("#side-top").hasClass("navbar-fixed-top")){
                $j("#side-top").removeClass("navbar-fixed-top");
            }
        }else{
            if(!$j("#side-top").hasClass("navbar-fixed-top")){
                $j("#side-top").addClass("navbar-fixed-top");
            }
        }
    }

    //Set menu position after page load
    setMenuPosition();

    //Set menu position when browser is resized
    $j(window).resize(function(){
        setMenuPosition();
    });


    // SEARCHING
    $j(".skip-search").click(function(){
        $j("#header-search").toggle();
    });
});