
function detail(id) {
	window.location.href = '/site/detail?id=' + id;
}


function showArticle(id, chapter) {
	//alert(id);
	$.ajax({
		url: '/site/get-article',
		method: 'GET',
		data: {
			'id': id
		},
		dataType: 'JSON',
		success: function(result) {
			let title = '<div class="row">';
			title += '<div class="col-3">';
			title += '<div class="list-group" id="list-tab" role="tablist">';
			
			let content = '<div id="contentOfChapter" class="col-8">';
			content += '<div class="tab-content" id="nav-tabContent">';
			
			result.forEach((item) => {
				title += '<a class="list-group-item list-group-item-action" id="list-' + item.ID_article + '-list" data-toggle="list" href="#' + item.ID_article + '" role="tab" aria-controls="' + item.name_article + '">' + item.name_article + '</a>';
				content += '<div class="tab-pane fade" id="' + item.ID_article + '" role="tabpanel" aria-labelledby="list-' + item.ID_article + '-list">' + item.content_article + '</div> ';
			});
			
			title += '</div></div>';
			content += '</div>';
			
			$("#showChapter").text(chapter);
			$('#getArticle').html(title + content + '</div>');
			
		}
	});
}

function choiceWhichLiActive(id) {
	$("#setActive li").removeClass("active");
	$("#turnActive" + id).addClass("active");
	
	
}

$(document).ready(() => {
	$('#hideNavbar').css('display', 'none');
	
	$('#allTextForm').prepend("<option selected>Các văn bản biểu mẫu </option>");
	
	$('#linkImage1').addClass('active');
	$('#imageSlide1').addClass('active');
	
	$('#allTextForm').change(() => {
		//alert($('#allTextForm').val());
		
		$.ajax({
			method: "GET",
			url: "/site/get-specify-detail",
			data: {
				'idTextForm': $('#allTextForm').val()
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
					temp += '<p class="card-text"><a id="showCard" style="color:#212529;" href="javascript:detail(' + "'" + item.ID_detail + "'" + ');">' + item.detail + '</a></p>';
					temp += '</div></div>';
					
					
					card += temp;
					
				});
				
				$('#detail').html(card);
			}
		
		});
		
	});
	
	
	/*
	$.ajax({
		method: "GET",
		url: "/site/get-text-form",
		dataType: "JSON",
		success: function(result) {
			//alert(JSON.stringify(result));
			var temp = '';
			$.each(result, (key, value) => {
				//alert(value.ID_text_form);
				var card = '';
				
				card += '<div class="card">';
				card += '<div class="card-header" id="headingLevelOne' + value.ID_text_form + '">';
				card += '<h2 class="mb-0">';
				card += '<button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseLevelOne' + value.ID_text_form + '" aria-expanded="false" aria-controls="collapseLeverOne' + value.ID_text_form + '">';
				card += value.type_text_form;
				card += '</button>';
				card += '</h2>';
				card += '</div>';
				card += '<div id="collapseLevelOne' + value.ID_text_form + '" class="collapse" aria-labelledby="headingLevelOne' + value.ID_text_form + '" data-parent="#accordionExample">';
				card += '<div class="card-body" id="levelTwo' + value.ID_text_form + '">';
				//card += ' And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.';
				card += '</div>';
				card += '</div>';
				card += '</div>';
				
				temp += card;
				
				
				card += '<h3>' + value.type_text_form + '</h3>';
				card += '<div style="height:500px;" id="bodyOfAccordionLevelOne' + value.ID_text_form + '"></div>';
				temp += card;
				
			});
			//temp += '</div>';
			$('#accordion').append(temp);
			$( "#accordion" ).accordion({
			  collapsible: true,
			  heightStyle: "content",
			  active: false
			});
		},
		complete: function(comp) {
			comp.responseJSON.forEach((item) => { // sau khi đã thêm các văn bản biểu mẫu, complete có chức năng thêm các tiêu đề trong các văn bản biểu mẫu
				$.ajax({
					method: "GET",
					url: '/site/get-specify-detail',
					data: {
						'id': item.ID_text_form
					},
					success: function(result) { 
						var detail ='<div class="row">';
						detail += '<div class="col-4">';
						//detail += '<div class="list-group" onload="actCollapse(' + '"' + item.ID_text_form + '"' + ')" id="list-tab' + item.ID_text_form + '" role="tablist">';
						detail += '<div class="list-group" id="list-tab' + item.ID_text_form + '" role="tablist">';
						
						var content = '<div class="col-8">';
						content += '<div class="tab-content" id="nav-tabContent' + item.ID_text_form + '">';
						
						$.each(result, (key, value) => { // duyệt qua tất cả tiêu đề của từng biểu mẫu
						
							detail += '<a class="list-group-item list-group-item-action" id="list-' +
							value.ID_detail + '-list" data-toggle="list" href="#list-' + value.ID_detail +
							'" role="tab" aria-controls="' + value.ID_detail + '">' + value.detail + '</a><br>';
							
							// thêm từng chương tương ứng cho mỗi tiêu đề của biểu mẫu
							$.ajax({
								method: 'GET',
								url: '/site/get-chapter',
								data: {
									'id': value.ID_detail
								},
								success: function(result) {
									//var temp = '<ul>';
									var temp = '<div id="accordion"' + value.ID_detail + '>';
									$.each(result, (key, value) => {
										//temp += '<li><a class="duy" href="#' + value.link_tag + '">' + value.name_chapter + '</a></li>';
										temp += '<h6 style="font-size:13px;"><span class="badge badge-primary badge-pill"><i class="fas fa-tag"></i></span><a class="duy" href="#' + value.link_tag + '">' + value.name_chapter + '</a></h6>';
									});
									//temp += '</ul>';
									temp += '</div>';
									//$('#bodyOfAccordionLevelTwo' + value.ID_detail).append(temp);
									$('#list-' + value.ID_detail + '-list').append(temp);
									//accAccordion(value.ID_detail);
								}
							});
							
							//detail += '<div onLoad="accAccordion(' + '"' + value.ID_detail + '"' + ')" id="accordion' + value.ID_detail + '"><h3><a class="list-group-item list-group-item-action" id="list-' +
							
							//detail += '<div id="accordion' + value.ID_detail + '"><h3><a class="list-group-item list-group-item-action" id="list-' +
							//value.ID_detail + '-list" data-bs-toggle="list" href="#list-' + value.ID_detail +
							//'" role="tab" aria-controls="' + value.ID_detail + '">' + value.detail + '</a></h3><div id="bodyOfAccordionLevelTwo' + value.ID_detail + '"></div></div>';
							
						
							
							content += '<div class="tab-pane fade" id="list-' +
							value.ID_detail + '" role="tabpanel" aria-labelledby="list-' + 
							value.ID_detail + '-list">' + value.content + '</div>';
						});
						
						detail += '</div></div>';
						content += '</div></div>';
						var str = detail + content + "</div>";
						
						$("#bodyOfAccordionLevelOne" + item.ID_text_form).append(str); // thêm các tiêu đề vào các biểu mẫu tương ứng
						//actCollapse(item.ID_text_form);
						
						
						
					},
					complete: function(comp) {
						
						$.ajax({
							method: "GET",
							url: '/site/get-detail',
							success: function(result) {
								$.each(result, (key, value) => {
									$.ajax({
										method: "GET",
										url: '/site/get-chapter',
										data: {
											'id': value.ID_detail
										},
										success: function(resultChapter) {
											var temp = '<div id="accordion' + value.ID_detail + '">';
											$.each(resultChapter, (key, value) => {
												temp += '<p>' + value.name_chapter + '</p>';
											});
											temp += '</div>';
											//$('#bodyOfAccordionLevelTwo' + value.ID_detail).append(temp);
											$('#list-' + value.ID_detail + '-list').append(temp);
											accAccordion(value.ID_detail);
											
										}
									});
								});
							}
						});
						
					}
				});
			});
		}
	});
	*/
});

