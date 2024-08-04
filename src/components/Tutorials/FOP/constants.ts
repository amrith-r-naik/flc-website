export const start = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <!-- write something here -->
    </div>
</body>
</html>`;

export const card = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Player</title> 
    
</head>

<body>
 
    <div class="container"><!--We use classes to identify html tags(just like human names)  -->
        <div class="songContainer">

            <div data-key="1" class="song" >
                <p class="key">1</p>
                <p class="detail">Official</p>
            </div>
            
        </div>


</body>
</html>`;

export const cards = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Player</title> 
    
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
         <!--We have 3 cards now  -->
        </div>


</body>
</html>`;

export const player = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Player</title>
</head>

<body>
    
    <div class="container">
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


export const style1 = `<!DOCTYPE html>
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
    
</style>
</head>

<body>
    
    <div class="container">
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

export const style2 = `<!DOCTYPE html>
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
    
    <div class="container">
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


export const responsive = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Player</title>
    <style>
    /* Selecting all the HTML elements with song as class and adding style to them */
    .song { 
        height: 100px;
        width: 200px;
        background-color: aqua;
        padding: 6px;
        text-align: center;
        flex: 1; /* Make songs flexible */
        min-width: 150px; /* Ensure minimum width */
    }

    .container {
        background-image: url("./images/background.png");
        background-size: contain;
        padding: 20px; /* Add padding to container */
    }

    .songContainer {
        display: flex; 
        gap: 20px;
        justify-content: center;
        flex-wrap: wrap; /* Allow wrapping of items */
    }

    .controller {
        text-align: center;
        padding: 24px;
    }

    /* Responsive styling */
    @media (max-width: 600px) {
        .song {
            width: 100%; /* Make songs full width on small screens */
        }

        .songContainer {
            gap: 10px; /* Reduce gap on small screens */
        }
    }
    </style>
</head>

<body>
    <div class="container"><!-- We use classes to identify HTML tags (just like human names) -->
        <div class="songContainer">
            <div data-key="1" class="song">
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

        <!-- Create a new div for containing AUDIO controls -->
        <div class="controller">
            <audio controls autoplay muted> <!-- Inbuilt support for playing audio in HTML -->
                <source src="linkToOurAudio.ogg" type="audio/ogg">
                <source src="linkToOurAudio.mpeg" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        </div>
    </div>
</body>
</html>
`;

export const responsive2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Player</title>
    <style>
    /* Selecting all the HTML elements with song as class and adding style to them */
    .song { 
        height: 100px;
        width: 200px;
        background-color: aqua;
        padding: 6px;
        text-align: center;
        flex: 1; /* Make songs flexible */
        min-width: 150px; /* Ensure minimum width */
    }

    .container {
        background-image: url("./images/background.png");
        background-size: cover; /* Changed to cover for better background display */
        background-repeat: no-repeat;
        min-height: 100vh; /* Ensures the container takes full viewport height */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px; /* Add padding to container */
    }

    .songContainer {
        display: flex; 
        gap: 20px;
        justify-content: center;
        flex-wrap: wrap; /* Allow wrapping of items */
        margin-bottom: 20px; /* Space between songs and controller */
    }

    .controller {
        text-align: center;
        padding: 24px;
        width: 100%; /* Ensure it takes full width */
        max-width: 600px; /* Limit the maximum width */
    }

    audio {
        width: 100%; /* Make audio element responsive */
    }

    /* Responsive styling */
    @media (max-width: 600px) {
        .song {
            width: 100%; /* Make songs full width on small screens */
        }

        .songContainer {
            gap: 10px; /* Reduce gap on small screens */
        }

        .controller {
            padding: 16px; /* Reduce padding on small screens */
        }
    }
    </style>
</head>

<body>
    <div class="container"><!-- We use classes to identify HTML tags (just like human names) -->
        <div class="songContainer">
            <div data-key="1" class="song">
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

        <!-- Create a new div for containing AUDIO controls -->
        <div class="controller">
            <audio controls autoplay muted> <!-- Inbuilt support for playing audio in HTML -->
                <source src="linkToOurAudio.ogg" type="audio/ogg">
                <source src="linkToOurAudio.mpeg" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        </div>
    </div>
</body>
</html>
`;