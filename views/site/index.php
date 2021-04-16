<?php
use yii\helpers\Html;
use yii\helpers\Url;
/* @var $this yii\web\View */
$this->title = 'duy';
?>


<div class="row">

	<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
		<ol class="carousel-indicators">
			
			<?php foreach($images as $image) { ?>
				<li id="linkImage<?= $image['ID_image']; ?>" data-target="#carouselExampleIndicators" data-slide-to="<?= $image['ID_image']; ?>"></li>
			<?php } ?>
			
		</ol>
		
		<div class="carousel-inner">
		
			<?php foreach($images as $image) { ?>
			
			 <div id="imageSlide<?= $image['ID_image']; ?>" class="carousel-item">
			 
				<img class="d-block w-100" src="<?= Yii::$app->request->baseUrl . '/images/' . $image['url'] ?>" alt="First slide">
			</div>
			
			<?php } ?>
		</div>
		
		<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="sr-only">Previous</span>
		</a>
		<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="sr-only">Next</span>
		</a>
		
	</div>

</div>

<div class="row justify-content-center font-weight-bold"><h1 class=" text-info">TRA CỨU VĂN BẢN BIỂU MẪU</h1></div>
<div class="row justify-content-center">
	<div class='col-sm-8'>
		<?= Html::activeDropDownList($textForm, 'ID_text_form',$itemTextForm, ['id' => 'allTextForm']) ?>
	</div>
</div>

<div id="detail" class='row justify-content-center'>
	
</div>



	
