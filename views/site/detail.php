<?php
use yii\helpers\Html;
use yii\helpers\Url;
/* @var $this yii\web\View */
$this->title = 'My Yii Application';
?>


<div class="d-flex" id="wrapper">
	<div class="bg-light border-right" id="sidebar-wrapper">
	
		<div class="list-group list-group-flush">
			<?php $count = 1; ?>
			<?php forEach($chapter as $item) {?>
				<div>
					
					<a class="list-group-item list-group-item-action bg-light" onclick="showArticle('<?= $item['ID'];?>', '<?= $item['descript'];?>')" href="javascript:void(0);"><i class="fas fa-angle-right"></i> <?= $item['descript'];?></a>
					
				</div>
			<?php $count = $count + 1; } ?>
		</div>
	</div>
	
	<div id="page-content-wrapper">
		<nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom muc-luc">
			<button class="btn btn-primary" id="menu-toggle">Mục lục</button>
			
			<button id="hideNavbar" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul style="display:none;" id="checkActive">
				
					<?php $count = 1; ?>
					<?php forEach($chapter as $item) {?>
					<li style="margin-top:20px;" class="nav-item">
						<span id="active<?= $item['ID'];?>"  style="width:30px;height:30px;font-size:17px;" class="badge badge-primary badge-pill"> <?= $count;?></span>
						<a style="display:inline;" class="nav-link" onclick="showArticle('<?= $item['ID'];?>', '<?= $item['descript'];?>')" href="javascript:void(0);"> <?= $item['descript'];?></a>
						
					</li>
					<?php $count = $count + 1; } ?>
				</ul>
			</div>
			
		</nav>
		<div class="container-fluid">
			<div id="showChapter" class="text-center font-weight-bold"></div>
			
			<div id="getArticle"></div>
		</div>
	</div>
	
	
</div>


