function getsbcSelectStr(){
        var res = $("#sbcName").val(); 
            if (res == null) {
                res = "";
                $("#sbcName").find('option').each(function(index, el) {
                    res += $(el).attr('value') + ",";
                });
                res = res.substring(0,res.length-1);
            }
        return res;
}