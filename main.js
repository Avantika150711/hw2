Webcam.attach('#camera');

camara=document.getElementById("camera")

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

function me(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>'; 
    });
}
console.log('m15 version;', m15.version);
classifier=m15.imageClassifier('https://mahdihat791.github.io/v2/ADV_Image_recognizer/main.js', modalLoaded);
function modalLoaded() {
    console.log('modal Loded!');
}
function check() {
    img=document.getElementById('selfie_image');
    classifier.classify(ing,gotResult);
}
function gotResult(error,results) {
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].lable;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
    
}