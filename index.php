<!doctype html>
<?php include ($_SERVER['DOCUMENT_ROOT'] . '/assets/php/util-var.php');	?>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title></title>
	<meta name="description" content="">
	<meta name="author" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- !head-links -->
	<?php include ($appRoot . '/assets/php/head-links.php'); ?>
</head>

<body class="home">
<!-- !advance-bar -->
<?php include ($appRoot . '/assets/php/advance-bar.php'); ?>
<!-- !page-sponsor -->
<?php include ($appRoot . '/assets/php/page-sponsor.php'); ?>
<!-- !sub-nav -->
<?php //include ($appRoot . '/assets/php/sub-nav-home.php'); ?>
<!-- !content -->
  <div id="content" class="container-fluid" role="main">
    <div class="row-fluid">
	<div id="els-featured" class="span3">
		<!-- !cta-connect -->
			<?php include ($appRoot . '/assets/php/cta-connect.php'); ?>

<!-- TEMP -->
	<ul class="nav nav-list">
		<li class="nav-header">
			Specialties
			<a href="#" class="pull-right"><i class="icon-cog"></i></a>
		</li>
		<li><a href="#">all</a></li>
		<li><a href="#">hematology</a></li>
		<li><a href="#">urology</a></li>
		<li>
		</li>
		<li class="divider"></li>
		<li class="nav-header">
			My Topics
			<a href="#" class="pull-right"><i class="icon-cog"></i></a>
		</li>
		<li><a href="#">all cancers</a></li>
		<li><a href="#">breast</a></li>
		<li><a href="#">colon</a></li>

	</ul><!--/.nav-->
<!-- END TEMP -->
		<!-- !els-featured -->
		<?php include ($appRoot . '/assets/php/els-featured.php'); ?>
	</div><!--/#els-featured.span-->
      <div id="main-content" class="span6 columns">
				<section class="home-stream">
					<header class="section-header">
						<h1><i class="icon-list"></i> Your Feed</h1>
						<p class="intro">The latest News and Expert Opinion on the topics you care about.</p>
						<nav class="section-nav">
							<ul class="nav nav-pills">
								<li class="active"><a href="#">Everything</a></li>
								<li class="dropdown">
									<a class="dropdown-toggle"
									   data-toggle="dropdown"
									   href="#">
									    Sort
									    <b class="caret"></b>
									  </a>
									<ul class="dropdown-menu">
									  <!-- links -->
									  <li><a href="#"><i class="icon-ok"></i> Most Recent</a></li>
									  <li><a href="#">Most Popular</a></li>
									  <li><a href="#">Relevance</a></li>
									</ul>
								</li>
							</ul>
						</nav><!--/.section-nav-->
					</header><!--/.section-header-->
					<div class="stream-container">
					</div><!--/.stream-container-->
				</section><!--/.condensed-feed-->

				<!-- !partner-featured-inline -->
				<?php include ($appRoot . '/assets/php/partner-featured-inline.php'); ?>
			</div><!--/.span-->
<!-- !partner-featured-sidebar -->
<?php include ($appRoot . '/assets/php/partner-featured-sidebar.php'); ?>
<!-- !partner-featured-footer -->
<?php include ($appRoot . '/assets/php/partner-featured-footer.php'); ?>
</div><!--/.row-->
</div><!--/#content.container-->

	<!-- !os-widget-footer -->
	<?php include ($appRoot . '/assets/php/os-widget-footer.php'); ?>
	<!-- !os-communication-footer -->
	<?php include ($appRoot . '/assets/php/os-communication-footer.php'); ?>
	<!-- !els-global-footer -->
	<?php include ($appRoot . '/assets/php/els-global-footer.php'); ?>
	<!-- !els-legal-footer -->
	<?php include ($appRoot . '/assets/php/els-legal-footer.php'); ?>


<!-- !JS includes -->
<?php include ($appRoot . '/assets/php/scripts.php'); ?>

</body>
</html>