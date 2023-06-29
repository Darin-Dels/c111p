Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});

 camera = document.getElementById("camera");

Webcam.attach( '#camera ');

function capture_img()
{
     Webcam.snap(function(data_uri){
        document.getElementById("captured_image").innerHTML =  '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version : ', ml5.version );

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Rsj-l8yV7/model.json', modelLoaded);

function modelLoaded()
{
   console.log("Model is Loaded !");
}
