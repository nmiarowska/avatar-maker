var canvas = document.getElementById("avatar");

canvas.width = 500;
canvas.height= 500;
var ctx = canvas.getContext("2d");

var img_none = new Image();
img_none.src = "./img/0_no_item.png"; 

var img_bg = new Image();
img_bg.src = "./img/0.png"; 

var img_body = new Image();
img_body.src = "./img/1.png";  

var img_eyes_0 = new Image();
img_eyes_0.src = "./img/2_1.png";  
var img_eyes = ["./img/2_1.png", 
                "./img/2_2.png",
                "./img/2_3.png", 
                "./img/2_4.png", 
                "./img/2_5.png",
                "./img/2_6.png"];
var img_eyes_index = 1;

var img_backhair_0 = new Image();
img_backhair_0.src = "./img/3_1.png";  
var img_backhair = ["./img/3_1.png", 
                    "./img/3_2.png",
                    "./img/3_3.png", 
                    "./img/3_4.png", 
                    "./img/3_5.png",
                    "./img/3_6.png",
                    "./img/3_7.png",
                    "./img/3_8.png"];
var img_backhair_index = 1;

var img_ear = new Image();
img_ear.src = "./img/4.png";  

var img_nose_0 = new Image();
img_nose_0.src = "./img/5.png"; 
var img_nose = ["5.png", 
                "0_no_item.png"];
var img_nose_index = 1;

var img_tophair_0 = new Image();
img_tophair_0.src = "./img/6_1.png";  
var img_tophair = ["./img/6_1.png", 
                    "./img/6_2.png",
                    "./img/6_3.png"];
var img_tophair_index = 1;

var img_eyebrows_0 = new Image();
img_eyebrows_0.src = "./img/7_1.png";  
var img_eyebrows = ["./img/7_1.png", 
                    "./img/7_2.png",
                    "./img/7_3.png"];
var img_eyebrows_index = 1;

var img_sidehair_0 = new Image();
img_sidehair_0.src = "./img/8_1.png"; 
var img_sidehair = ["./img/8_1.png", 
                    "./img/8_2.png",
                    "./img/8_3.png"];
var img_sidehair_index = 1;

var img_acc1_0 = new Image();
img_acc1_0.src = "./img/0_no_item.png"; 
var img_acc1 = ["./img/0_no_item.png",
                "./img/9_1.png"];
var img_acc1_index = 1;

var img_acc2_0 = new Image();
img_acc2_0.src = "./img/0_no_item.png"; 
var img_acc2 = ["./img/0_no_item.png",
                "./img/9_2.png"];
var img_acc2_index = 1;

var img_acc3_0 = new Image();
img_acc3_0.src = "./img/0_no_item.png"; 
var img_acc3 = ["./img/0_no_item.png",
                "./img/9_3.png"];
var img_acc3_index = 1;

var img_acc4_0 = new Image();
img_acc4_0.src = "./img/0_no_item.png"; 
var img_acc4 = ["./img/0_no_item.png",
                "./img/9_4.png"];
var img_acc4_index = 1;

var img_acc5_0 = new Image();
img_acc5_0.src = "./img/0_no_item.png"; 
var img_acc5 = ["./img/0_no_item.png",
                "./img/9_5.png"];
var img_acc5_index = 1;

var img_acc6_0 = new Image();
img_acc6_0.src = "./img/0_no_item.png"; 
var img_acc6 = ["./img/0_no_item.png",
                "./img/9_6.png"];
var img_acc6_index = 1;

var img_acc7_0 = new Image();
img_acc7_0.src = "./img/0_no_item.png"; 
var img_acc7 = ["./img/0_no_item.png",
                "./img/9_7.png"];
var img_acc7_index = 1;

var img_clothing_0 = new Image();
img_clothing_0.src = "./img/10_1.png"; 
var img_clothing = ["./img/10_1.png", 
                    "./img/10_2.png",
                    "./img/10_3.png",
                    "./img/10_4.png"];
var img_clothing_index = 1;

var img_pupils_0 = new Image();
img_pupils_0.src = "./img/11_1.png"; 
var img_pupils = ["./img/11_1.png", 
                    "./img/11_2.png",
                    "./img/11_3.png"];
var img_pupils_index = 1;

var img_hands_0 = new Image();
img_hands_0.src = "./img/12_1.png"; 
var img_hands = ["./img/12_1.png", 
                "./img/12_2.png",
                "./img/12_3.png",
                "./img/0_no_item.png"];
var img_hands_index = 1;

var img_atmosphere_0 = new Image();
img_atmosphere_0.src = "./img/13_1.png"; 
var img_atmosphere = ["./img/13_1.png", 
                    "./img/13_2.png",
                    "./img/13_3.png",
                    "./img/0_no_item.png"];
var img_atmosphere_index = 1;

var img_mouth_0 = new Image();
img_mouth_0.src = "./img/14_1.png"; 
var img_mouth = ["./img/14_1.png", 
                "./img/14_2.png",
                "./img/14_3.png",
                "./img/14_4.png",
                "./img/14_5.png",
                "./img/0_no_item.png"];
var img_mouth_index = 1;

/* !!functions!! */

window.onload = function Draw(){
    ctx.drawImage(img_bg, 0, 0);     
    ctx.drawImage(img_body, 0, 0); 
    ctx.drawImage(img_eyes_0, 0, 0);
    ctx.drawImage(img_backhair_0, 0, 0);
    ctx.drawImage(img_ear, 0, 0);
    ctx.drawImage(img_nose_0, 0, 0);
    ctx.drawImage(img_tophair_0, 0, 0);
    ctx.drawImage(img_eyebrows_0, 0, 0);
    ctx.drawImage(img_sidehair_0, 0, 0);
    ctx.drawImage(img_acc1_0, 0, 0);
    ctx.drawImage(img_acc2_0, 0, 0);
    ctx.drawImage(img_acc3_0, 0, 0);
    ctx.drawImage(img_acc4_0, 0, 0);
    ctx.drawImage(img_acc5_0, 0, 0);
    ctx.drawImage(img_acc6_0, 0, 0);
    ctx.drawImage(img_acc7_0, 0, 0);
    ctx.drawImage(img_clothing_0, 0, 0);
    ctx.drawImage(img_pupils_0, 0, 0);
    ctx.drawImage(img_hands_0, 0, 0);
    ctx.drawImage(img_atmosphere_0, 0, 0);
    ctx.drawImage(img_mouth_0, 0, 0);
};

function Redraw(){
    ctx.drawImage(img_bg, 0, 0);     
    ctx.drawImage(img_body, 0, 0); 
    ctx.drawImage(img_eyes_0, 0, 0);
    ctx.drawImage(img_backhair_0, 0, 0);
    ctx.drawImage(img_ear, 0, 0);
    ctx.drawImage(img_nose_0, 0, 0);
    ctx.drawImage(img_tophair_0, 0, 0);
    ctx.drawImage(img_eyebrows_0, 0, 0);
    ctx.drawImage(img_sidehair_0, 0, 0);
    ctx.drawImage(img_acc1_0, 0, 0);
    ctx.drawImage(img_acc2_0, 0, 0);
    ctx.drawImage(img_acc3_0, 0, 0);
    ctx.drawImage(img_acc4_0, 0, 0);
    ctx.drawImage(img_acc5_0, 0, 0);
    ctx.drawImage(img_acc6_0, 0, 0);
    ctx.drawImage(img_acc7_0, 0, 0);
    ctx.drawImage(img_clothing_0, 0, 0);
    ctx.drawImage(img_pupils_0, 0, 0);
    ctx.drawImage(img_hands_0, 0, 0);
    ctx.drawImage(img_atmosphere_0, 0, 0);
    ctx.drawImage(img_mouth_0, 0, 0);
};

function Change(id){
    switch (id) 
    {
        case 'chng_eyes':
            img_eyes_0.setAttribute("src", img_eyes[img_eyes_index]);
            if(img_eyes.length-1 != img_eyes_index)
            {
                img_eyes_index += 1;
            } else {
                img_eyes_index = 0;
            }
            break;

        case 'chng_pupils':
            img_pupils_0.setAttribute("src", img_pupils[img_pupils_index]);
            if(img_pupils.length-1 != img_pupils_index)
            {
                img_pupils_index += 1;
            } else {
                img_pupils_index = 0;
            }
            break;

        case 'chng_eyebrows':
            img_eyebrows_0.setAttribute("src", img_eyebrows[img_eyebrows_index]);
            if(img_eyebrows.length-1 != img_eyebrows_index)
            {
                img_eyebrows_index += 1;
            } else {
                img_eyebrows_index = 0;
            }
            break;
        
        case 'chng_mouth':
            img_mouth_0.setAttribute("src", img_mouth[img_mouth_index]);
            if(img_mouth.length-1 != img_mouth_index)
            {
                img_mouth_index += 1;
            } else {
                img_mouth_index = 0;
            }
            break;
        
        case 'chng_backhair':    
            img_backhair_0.setAttribute("src", img_backhair[img_backhair_index]);
            if(img_backhair.length-1 != img_backhair_index)
            {
                img_backhair_index += 1;
            } else {
                img_backhair_index = 0;
            }
            break;

         case 'chng_tophair':
            img_tophair_0.setAttribute("src", img_tophair[img_tophair_index]);
            if(img_tophair.length-1 != img_tophair_index)
            {
                img_tophair_index += 1;
            } else {
                img_tophair_index = 0;
            }
            break;

        case 'chng_sidehair':
            img_sidehair_0.setAttribute("src", img_sidehair[img_sidehair_index]);
            if(img_sidehair.length-1 != img_sidehair_index)
            {
                img_sidehair_index += 1;
            } else {
                img_sidehair_index = 0;
            }
            break;

        case 'chng_clothing':
            img_clothing_0.setAttribute("src", img_clothing[img_clothing_index]);
            if(img_clothing.length-1 != img_clothing_index)
            {
                img_clothing_index += 1;
            } else {
                img_clothing_index = 0;
            }
            break;

        case 'chng_hands':
            img_hands_0.setAttribute("src", img_hands[img_hands_index]);
            if(img_hands.length-1 != img_hands_index)
            {
                img_hands_index += 1;
            } else {
                img_hands_index = 0;
            }
            break;

        case 'chng_atmosphere':
            img_atmosphere_0.setAttribute("src", img_atmosphere[img_atmosphere_index]);
            if(img_atmosphere.length-1 != img_atmosphere_index)
            {
                img_atmosphere_index += 1;
            } else {
                img_atmosphere_index = 0;
            }
            break;
        
         case 'chng_acc1':
            img_acc1_0.setAttribute("src", img_acc1[img_acc1_index]);
            if(img_acc1.length-1 != img_acc1_index)
            {
                img_acc1_index += 1;
            } else {
                img_acc1_index = 0;
            }
            break;
        
        case 'chng_acc2':
            img_acc2_0.setAttribute("src", img_acc2[img_acc2_index]);
            if(img_acc2.length-1 != img_acc2_index)
            {
                img_acc2_index += 1;
            } else {
                img_acc2_index = 0;
            }
            break;
        
        case 'chng_acc3':
            img_acc3_0.setAttribute("src", img_acc3[img_acc3_index]);
            if(img_acc3.length-1 != img_acc3_index)
            {
                img_acc3_index += 1;
            } else {
                img_acc3_index = 0;
            }
            break;

        case 'chng_acc4':
            img_acc4_0.setAttribute("src", img_acc4[img_acc4_index]);
            if(img_acc4.length-1 != img_acc4_index)
            {
                img_acc4_index += 1;
            } else {
                img_acc4_index = 0;
            }
            break;

        case 'chng_acc5':
            img_acc5_0.setAttribute("src", img_acc5[img_acc5_index]);
            if(img_acc5.length-1 != img_acc5_index)
            {
                img_acc5_index += 1;
            } else {
                img_acc5_index = 0;
            }
            break;
        
        case 'chng_acc6':
            img_acc6_0.setAttribute("src", img_acc6[img_acc6_index]);
            if(img_acc6.length-1 != img_acc6_index)
            {
                img_acc6_index += 1;
            } else {
                img_acc6_index = 0;
            }
            break;

        case 'chng_acc7':
            img_acc7_0.setAttribute("src", img_acc7[img_acc7_index]);
            if(img_acc7.length-1 != img_acc7_index)
            {
                img_acc7_index += 1;
            } else {
                img_acc75_index = 0;
            }
            break;

        default:
            alert("Error occured");
    }
    Redraw();
 }

 function save2() {
    window.open(canvas.toDataURL('image/png'));
    var gh = canvas.toDataURL('png');

    var a  = document.createElement('a');
    a.href = gh;
    a.download = 'image.png';

    a.click()
}
