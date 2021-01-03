var stuname =[];
function submit() {
    for(var i =0; i<4;i++){
        stuname[i]= document.getElementById("name_of_the_student_"+i).value;
    }
    document.getElementById("display_name_with_commas").innerHTML=stuname;
    var remove_comma = stuname.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline_block";
}

function sorting() {
    stuname.sort();
    document.getElementById("display_name_without_commas").innerHTML=stuname;
}