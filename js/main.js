var display = document.getElementById("display");
var display2 = document.getElementById("display2");
var display3 = document.getElementById("display3");
var i;
var j;
var small;
var great;
var a = [29, 95, 100, 1, 89, 41, 4, 23, 36, 22];

//small

small = a[0];
for (j = 1; j < 10; j++) {

    if (small > a[j]) {
        small = a[j];
    }
}


//great

great = a[0];
for (j = 1; j < 10; j++) {

    if (great < a[j]) {
        great = a[j];
    }
}

//sort

var temp;
var t =[];
for (i = 0; i < 10; i++) {
    for (j = i+1; j < 10; j++) {

        if (a[i] > a[j]) {
            temp = a[j];
            a[j]=a[i];
            a[i]=temp; 
        }
      
    }
}
    display3.innerHTML="SORTED : [ " +  a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + " ]" ;



display.innerHTML = "Smallest Number is : " + small;
display2.innerHTML = "Greater Number is : " + great;
