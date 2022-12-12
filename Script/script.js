let r1 = document.getElementById("r1");
let r2 = document.getElementById("r2");
let r3 = document.getElementById("r3");
let r4 = document.getElementById("r4");
let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let t3 = document.getElementById("t3");
let t4 = document.getElementById("t4");
let block = document.getElementById("block");
r1.addEventListener("input",function(){
    t1.value = r1.value;
    t2.value = r2.value;
    t3.value = r3.value;
    t4.value = r4.value;
    block.style.borderRadius = r1.value + "px " + r2.value + "px " + r3.value + "px " + r4.value + "px ";
})
r2.addEventListener("input",function(){
    t1.value = r1.value;
    t2.value = r2.value;
    t3.value = r3.value;
    t4.value = r4.value;
    block.style.borderRadius = r1.value + "px " + r2.value + "px " + r3.value + "px " + r4.value + "px ";
})
r3.addEventListener("input",function(){
    t1.value = r1.value;
    t2.value = r2.value;
    t3.value = r3.value;
    t4.value = r4.value;
    block.style.borderRadius = r1.value + "px " + r2.value + "px " + r3.value + "px " + r4.value + "px ";
})
r4.addEventListener("input",function(){
    t1.value = r1.value;
    t2.value = r2.value;
    t3.value = r3.value;
    t4.value = r4.value;
    block.style.borderRadius = r1.value + "px " + r2.value + "px " + r3.value + "px " + r4.value + "px ";
})