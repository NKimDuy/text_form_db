function actCollapse(id) {
	var triggerTabList = [].slice.call(document.querySelectorAll(':scope #list-tab' + id + ' a.list-group-item-action'))
	triggerTabList.forEach(function (triggerEl) {
		var tabTrigger = new bootstrap.Tab(triggerEl)

		triggerEl.addEventListener('click', function (event) {
			event.preventDefault()
			tabTrigger.show()
		})
	})
}

function accAccordion(id) {
	$( "#accordion" + id ).accordion({
		collapsible: true,
		heightStyle: "content",
		active: false
    });
}


function accTab(id) {
	$( "#tabs" + id ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( '#tabs' + id + ' li' ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
}

$(document).ready(() => {
	/* chỗ này phải xử lý trong ajax, nếu để bên ngoài thì nó luôn luôn chạy trước ajax (viết hàm)
	**
	var triggerTabList = [].slice.call(document.querySelectorAll('#list-tab a'))
	triggerTabList.forEach(function (triggerEl) {
		var tabTrigger = new bootstrap.Tab(triggerEl)

		triggerEl.addEventListener('click', function (event) {
			event.preventDefault()
			tabTrigger.show()
		})
	})
	**
	*/
	
	
	
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
				/*
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
				*/
				
				card += '<h3>' + value.type_text_form + '</h3>';
				card += '<div style="height:500px;" id="bodyOfAccordionLevelOne' + value.ID_text_form + '"></div>';
				temp += card;
				
			});
			//temp += '</div>';
			$('#accordion').html(temp);
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
						var detail ='<div id="tabs' + item.ID_text_form + '">';
						detail += '<ul>';
						//detail += '<div class="list-group" onload="actCollapse(' + '"' + item.ID_text_form + '"' + ')" id="list-tab' + item.ID_text_form + '" role="tablist">';
						
						
						//var content = '<div class="col-8">';
						var content = '';
						//content += '<div class="tab-content" id="nav-tabContent' + item.ID_text_form + '">';
						
						$.each(result, (key, value) => { // duyệt qua tất cả tiêu đề của từng biểu mẫu
						
							//detail += '<li><a id="list-' + value.ID_detail + '-list" href="#list-' + value.ID_detail + '">' + value.detail + '</a></li>';
							detail += '<li><div><a id="list-' + value.ID_detail + '-list" href="#list-' + value.ID_detail + '">' + value.detail + '</a></div></li>';
							
							content += '<div id="list-' + value.ID_detail + '"><div>' + value.content + '</div></div>';
							
							// thêm từng chương tương ứng cho mỗi tiêu đề của biểu mẫu
							
							$.ajax({
								method: 'GET',
								url: '/site/get-chapter',
								data: {
									'id': value.ID_detail
								},
								success: function(result) {
									//var temp = '<ul>';
									//var temp = '<div id="accordion"' + value.ID_detail + '>';
									var temp = '';
									$.each(result, (key, value) => {
										//temp += '<li><a class="duy" href="#' + value.link_tag + '">' + value.name_chapter + '</a></li>';
										//temp += '<div><h6 style="font-size:13px;"><span class="badge badge-primary badge-pill"><i class="fas fa-tag"></i></span><a class="duy" href="#' + value.link_tag + '">' + value.name_chapter + '</a></h6></div>';
										temp += '<div>duy</div>';
									});
									//temp += '</ul>';
									//temp += '</div>';
									//$('#bodyOfAccordionLevelTwo' + value.ID_detail).append(temp);
									//$('#list-' + value.ID_detail + '-list').append(temp);
									$('#accordion' + value.ID_detail).append(temp);
									accAccordion(value.ID_detail);
								}
							});
							
							//detail += '<div onLoad="accAccordion(' + '"' + value.ID_detail + '"' + ')" id="accordion' + value.ID_detail + '"><h3><a class="list-group-item list-group-item-action" id="list-' +
							
							//detail += '<div id="accordion' + value.ID_detail + '"><h3><a class="list-group-item list-group-item-action" id="list-' +
							//value.ID_detail + '-list" data-bs-toggle="list" href="#list-' + value.ID_detail +
							//'" role="tab" aria-controls="' + value.ID_detail + '">' + value.detail + '</a></h3><div id="bodyOfAccordionLevelTwo' + value.ID_detail + '"></div></div>';
							
						
							
							
						});
						
						detail += '</ul>';
						//content += '</div></div>';
						var str = detail + content + "</div>";
						
						$("#bodyOfAccordionLevelOne" + item.ID_text_form).append(str); // thêm các tiêu đề vào các biểu mẫu tương ứng
						//actCollapse(item.ID_text_form);
						accTab(item.ID_text_form);
						
						
					},
					complete: function(comp) {
						/*
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
						*/
					}
				});
			});
		}
	});
});

