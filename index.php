<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.0/dist/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Formulaire for PHP</title>
</head>
<body>
<script src="js/structure.js"></script>

    <div class="helpDiv">
        <img src="img/minion.png" alt="" id="help">        
    </div>
    <div class="sakura"></div>
    <div class="form">
        <form action="form">

                <label for="name">First name</label>
                <input id="name" type="text" placeholder="Your first name"> <br>

                <label for="name2">Last name</label>
                <input id="nam2" type="text" placeholder="Your last name"> <br>
                

                <label for="mail">E-mail</label>
                <input id="mail" type="text" placeholder="Your email"> <br>
    
                <input type="submit" id="submit">
               <button id="google"><img class="img1" src="img/google.png" alt="">Submit with google</button>

        </form>
    </div>
</body>
</html>