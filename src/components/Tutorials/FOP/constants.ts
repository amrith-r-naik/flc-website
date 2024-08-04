export const start = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Player</title>
    <style>
    /*selecting all the html elements with song as class and adding style to them  */
    .song{ 
        height: 100px;
        width: 200px;
        background-color: aqua;
        padding:6px;
        text-align: center;
    }

    .container{
        background-image: url("./images/background.png");
        background-size: contain;
            
    }

    .songContainer{
        display: flex;
        gap: 20px;
        justify-content: center;
        
    }
    .controller{
        text-align: center;
        padding: 24px;
    }
    
</style>
</head>

<body>
    
    <div class="container"><!--We use classes to identify html tags(just like human names)  -->
        <div class="songContainer">

            <div data-key="1" class="song" >
                <p class="key">1</p>
                <p class="detail">Official</p>
            </div>

            <div data-key="2" class="song">
                <p class="key">2</p>
                <p class="detail">A Cappella Cover</p>
            </div>

            <div data-key="3" class="song">
                <p class="key">3</p>
                <p class="detail">Female Version Cover</p>
            </div>
            
        </div>

        <!-- create a new div for containing AUDIO controls -->
         <div class="controller">
            
            <audio controls autoplay muted> <!-- inbult support for playing audio in html -->
                <source src="linkToOurAudio.ogg" type="audio/ogg">
                <source src="linkToOurAudio.mpeg" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
         </div>

</body>
</html>`;