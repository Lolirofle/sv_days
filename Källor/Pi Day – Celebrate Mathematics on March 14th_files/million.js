jQuery(document).ready(function($){
	
	//alert($('#million_pi').data('page'));

	var loading = false;
	
	if ($('#million_pi').data('page') < 20){ 
	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() >= $(document).height() - 500) {
		   loadpage();
		}
	});
		
	}
		
		function loadpage()
		{
			
			var pg  = $('#million_pi').data('page');		
			//alert(pg);
			
			/*if (pg == '1') {
				var videoAd = "<div style='max-width:512px;'><div id='div-gpt-ad-38331551731041-0'><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-38331551731041-0'); });</script></div></div>";
			
				jQuery('#million_pi').append(videoAd);*/
				/*console.log(data);
				loading = false;
				$('#million_pi').data('page', this.pg);
			}			*/
			
			if(loading || pg == '20') return ;
			loading = true;
			$.ajax({
		        url: object_name.ajaxurl,
				pg: parseInt(pg)+1,
		        data: {
		            'action':'example_ajax_request',
		            'page' : parseInt(pg)+1
		        },
		        success:function(data) {
		            // This outputs the result of the ajax request
		        	jQuery('#million_pi').append(data);
		            //console.log(data);
					loading = false;
					$('#million_pi').data('page', this.pg);
		        },
		        error: function(errorThrown){
		            console.log(errorThrown);
					loading = false;
		        }
		    });
		}
	
	
	
	

});