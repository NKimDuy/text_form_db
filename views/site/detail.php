<?php
use yii\helpers\Html;
use yii\helpers\Url;
/* @var $this yii\web\View */
$this->title = 'My Yii Application';
?>








<div class="wrapper d-flex align-items-stretch">
	<nav id="sidebar">
		<div class="custom-menu">
			<button type="button" id="sidebarCollapse" class="btn btn-primary">
				<i class="fa fa-bars"></i>
				<span class="sr-only">Toggle Menu</span>
			</button>
		</div>
		<div class="p-4">

			<ul id="setActive" class="list-unstyled components mb-5">
			
				<?php forEach($chapter as $item) { ?>
					<li id="turnActive<?= $item['ID_chapter'];?>" onclick="choiceWhichLiActive('<?= $item['ID_chapter'];?>')">
						<a onclick="showArticle('<?= $item['ID_chapter'];?>', '<?= $item['content_chapter'];?>')" href="javascript:void(0);"><i class="fas fa-angle-right"></i> <?= $item['name_chapter'];?></a>
					</li>
				<?php } ?>
				
				
			</ul>
		</div>
	</nav>

	<!-- Page Content  -->
	<div id="content" class="p-4 p-md-5 pt-5">
		<h2 id="showChapter" class="mb-4"></h2>
		<div id="getArticle"></div>
		
		
	</div>
</div>