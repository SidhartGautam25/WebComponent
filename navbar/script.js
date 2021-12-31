 $("button").click(function(){
      if($(".btn1").text() == "---"){
       $(".btn1").text("///");
      }else{
        $(".btn1").text("---");
      }
    

    $("ul").toggle("slow");
});