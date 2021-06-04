p1=""
p2=""


Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:90

});


camera= document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}


console.log('ml5 version', ml5.version);    

classifier= ml5.imageClassifier(' https://teachablemachine.withgoogle.com/models/61-ppT5Or/model.json',modelLoaded);


function modelLoaded()
{
    console.log('modelLoaded');
}


function speak()
{
    var synth= window.speechSynthesis;
    speak_d1="The first prediction is" + p1;
    speak_d2="And the second prediction is" +p2;
    var utterThis= new SpeechSynthesisUtterance(speak_d1 + speak_d2);
    synth.speak(utterThis);
}


function check()
{
    img= document.getElementById("captured_image");
    classifier.classify(img, gotresult);
}


