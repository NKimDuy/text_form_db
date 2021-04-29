
function detail(id) { // khi người dùng nhấn vào 1 tiêu đề, thì sẽ được điều hướng sang trang detail tương ứng
	window.location.href = '/site/detail?id=' + id;
}


function showArticle(id, chapter) { // hiển thị nội dung từng chương của mỗi tiêu đề, chia làm 2 phần, bên trái là điều, bên phải là nội dung của từng điều 
	
	$("#checkActive span").removeClass("active-responsive");  // xóa màu nền ( màu cam ) của các mục trước
	$("#active" + id).addClass("active-responsive"); // thêm màu cam vào mục đang chọn
	
	
	$("#navbarSupportedContent").removeClass('show'); // khi chọn xong, sẽ tắt các mục
	$("#hideNavbar").addClass('collapsed'); // khi chọn xong, sẽ tắt các mục

	//alert(id);
	$.ajax({
		url: '/site/get-article',
		method: 'GET',
		data: {
			'id': id
		},
		dataType: 'JSON',
		success: function(result) {
			
			//alert(JSON.stringify(result));
			
			let title = '<div class="row">';
			title += '<div id="contentOftitle" class="col-4">';
			title += '<div class="list-group" id="list-tab" role="tablist">';
			
			let content = '<div id="contentOfChapter" class="col-8">';
			content += '<div class="tab-content" id="nav-tabContent">';
			
			result.forEach((item) => {
				title += '<a class="list-group-item list-group-item-action" id="list-' + item[0] + '-list" data-toggle="list" href="#' + item[0] + '" role="tab" aria-controls="' + item[1] + '">' + item[1] + '</a>';
				content += '<div class="tab-pane fade" id="' + item[0] + '" role="tabpanel" aria-labelledby="list-' + item[0] + '-list">' + item[2] + '</div> ';
			});
			
			title += '</div></div>';
			content += '</div>';
			
			$("#showChapter").text(chapter);
			$('#getArticle').html(title + content + '</div>');
			
			
			
		}
	});
}





$(document).ready(() => {
	
	$("#menu-toggle").click((e) => {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
	});
	
	
	$('#hideNavbar').css('display', 'none'); // ẩn thanh navbar mặc định của yii2 ( không ẩn, sẽ không hiện được nội dung của từng chương và điều)
	
	$('#allTextForm').prepend("<option selected>Các văn bản biểu mẫu </option>"); // chèn tiêu đề cho dropdownlist
	
	$('#linkImage1').addClass('active'); // thiết lập image nào sẽ được chạy trước trong imageSlide
	$('#imageSlide1').addClass('active'); // thiết lập image nào sẽ được chạy trước trong imageSlide
	

	
	$('#allTextForm').change(() => {
		//alert($('#allTextForm').val());
		
		$.ajax({
			method: "GET",
			url: "/site/get-specify-detail",
			data: {
				'idTextForm': $('#allTextForm').val() // gửi ID của văn bản biểu mẫu để tìm các tiêu đề tương ứng
			},
			dataType: "JSON",
			success: function(result) {
				//alert(JSON.stringify(result));
				let card = '';
				result.forEach((item) => {
					let temp = '<div class="card border-dark mb-3">';
					//temp += '<div class="card-header"><a onclick=detail(' + "'" + item.ID_detail + "'" + ')>' + item.detail + '</a></div>';
					temp += '<div class="card-header">Tiêu đề </div>';
					temp += '<div class="card-body text-dark">';
					temp += '<p class="card-text"><a id="showCard" style="color:#212529;" href="javascript:detail(' + "'" + item.ID + "'" + ');">' + item.descript + '</a></p>';
					temp += '</div></div>';
					
					
					card += temp;
					
				});
				
				$('#detail').html(card);
			}
		
		});
		
	});
	
	

});

