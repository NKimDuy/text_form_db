<?php

/* @var $this \yii\web\View */
/* @var $content string */

use app\widgets\Alert;
use yii\helpers\Html;
use yii\bootstrap4\Nav;
use yii\bootstrap4\NavBar;
use yii\widgets\Breadcrumbs;
use yii\jui;
use app\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php $this->registerCsrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>

<div class ="row header align-items-center">
	<div class="col media justify-content-center">
		
		<img src="<?= Yii::$app->request->baseUrl . '/images/' . 'oude.png' ?>" class="img-fluid">  
	</div>
	<div id="ttdttx" class = 'col media-body text-center text-light font-weight-bolder'>
		TRUNG TÂM ĐÀO TẠO TỪ XA
	</div>
</div>


<div class="wrap">
    
	
	<?php
    NavBar::begin([
        'options' => [
            'id' => 'hideNavbar',
        ],
    ]);
   
    NavBar::end();
    ?>	

	<div class="container-fluid">
        <?= Breadcrumbs::widget([
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]) ?>
        <?= Alert::widget() ?>
		
        <?= $content // thêm nội dung từ view tương ứng ?> 
    
	</div>
    
</div>




<footer>
	
	<div class="container-fluid list-contact foot">
	<br />
		<div class="row">
			<!--first column-->
			<div class="col-md-2 mx-auto">
			  <h6 class="text-uppercase font-weight-bold mb-4 title">GIỚI THIỆU</h6>
			  <ul>
				<li><a href = "http://oude.edu.vn/introduce/%C4%91%C3%A0o-t%E1%BA%A1o-t%E1%BB%AB-xa-t%E1%BA%A1i-tr%C6%B0%E1%BB%9Dng-%C4%91%E1%BA%A1i-h%E1%BB%8Dc-m%E1%BB%9F-tp-hcm-2/view/">Đào tạo từ xa Trường Đại Học Mở TP.HCM</a></li>
				<li><a href = "http://oude.edu.vn/introduce/v%C3%AC-sao-ch%E1%BB%8Dn-ch%C3%BAng-t%C3%B4i-3/view/">Vì sao chọn chúng tôi</a></li>
				<li><a href = "http://oude.edu.vn/introduce/m%E1%BA%A1ng-l%C6%B0%E1%BB%9Bi-%C4%91%C3%A0o-t%E1%BA%A1o-r%E1%BB%99ng-kh%E1%BA%AFp-6/view/">Mạng lưới đào tạo rộng khắp</a></li>
			  </ul>
			</div>
			<!--/.first column-->

			<hr class="w-100 clearfix d-md-none">
			
			<!--Second column-->
			<div class="col-md-2 mx-auto">
			  <h6 class="text-uppercase font-weight-bold mb-4 title">LIÊN KẾT WEBSITE</h6>
			  <ul>
				<li><a href = "http://tuyensinh.oude.edu.vn/">Cổng thông tin tuyển sinh</a></li>
				<li><a href = "http://lms.oude.edu.vn/">Hệ thống hỗ trợ học tập</a></li>
				<li><a href = "http://www.ou.edu.vn/">Trường Đại Học Mở TP.HCM</a></li>
			  </ul>
			</div>
			<!--/.Second column-->

			<hr class="w-100 clearfix d-md-none">

			<!--Third column-->
			<div class="col-md-2 mx-auto">
			  <h6 class="text-uppercase font-weight-bold mb-4 title">LIÊN KẾT QUỐC TẾ</h6>
			  <ul>
				<li><a href = "http://oude.edu.vn/introduce/li%C3%AAn-k%E1%BA%BFt-qu%E1%BB%91c-t%E1%BA%BF-5/view/">Đối tác quốc tế</a></li>
				<li><a href = "http://oude.edu.vn/introduce/th%C3%A0nh-vi%C3%AAn-t%E1%BB%95-ch%E1%BB%A9c-qu%E1%BB%91c-t%E1%BA%BF-4/view/">Thành viên quốc tế</a></li>
				<li><a href = "http://peace-foundation.net/video/vietnam/Ngo_Bao_Chau">International Peace Foundation</a></li>
			  </ul>
			</div>
			<!--/.Third column-->

			<hr class="w-100 clearfix d-md-none">

			<!--Fourth column-->
			<div class="col-md-2 mx-auto">
			  <h6 class="text-uppercase font-weight-bold mb-4 title">LIÊN HỆ - HỖ TRỢ</h6>
			  <ul>
				<li><a href = "tel:18006119">Tổng đài: 18006119</a></li>
				<li><a href = "mailto:tuvan@oude.edu.vn">Email: tuvan@oude.edu.vn</a></li>
				<li><a href = "http://oude.edu.vn/contacts/index">Địa chỉ</a></li>
			  </ul>
			</div>
			<!--/.Fourth column-->

		</div>
		<div id="contactDttx" class='row justify-content-center'>
			<div class="small text-center text-muted">
				<ul class="list-unstyled list-inline">
					<li>
						Copyright © 1990 - 2019 Open University Ho Chi Minh City.
					</li>
					<li>
						97 Vo Van Tan, 6th Ward, 3rd Dist., Ho Chi Minh City, Vietnam - Tel: 18006119
					</li>
					<li>
						Website: www.oude.edu.vn - Email: tuvan@oude.edu.vn
					</li>
				</ul>
			</div>
		</div>
	</div>

	
</footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
