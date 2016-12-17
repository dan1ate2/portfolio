<!-- PUT VALIDATION CODE HERE -->

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Dan Hogan - Web Development, Graphic Design, SEO</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Web design &amp; development, graphic design and SEO by Dan Hogan">
	<link rel="stylesheet" href="../css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="../css/elastic_grid.css">
	<!--<link href='https://fonts.googleapis.com/css?family=Playfair+Display:900' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Raleway:500' rel='stylesheet' type='text/css'>-->
	<link href='https://fonts.googleapis.com/css?family=Cousine' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Didact+Gothic' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="../css/styles.css" media="screen">
</head>
<body data-spy="scroll" data-target=".navbar" data-offset="50">
	
	<!-- Navigation -->
	<nav class="navbar navbar-inverse navbar-fixed-top">
	  	<div class="container-fluid">
		    <div class="navbar-header">
		        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>                        
		      	</button>
		      	<a class="navbar-brand" href="index.html">
		      		<img src="../images/logo.png" alt="dan hogan logo" width="198" height="51">
		      	</a>
		    </div>
		    </div>
	  	</div>
	</nav>
	<!-- Content -->
	<div class="row container-fluid" id="enquiry">
		<div class="white-fw">
			<div class="container">
				<div class="enquiry">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<p>
							<?php echo $message ?>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

</body>
</html>