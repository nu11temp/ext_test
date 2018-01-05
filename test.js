$(function(){
	
$("#load_hosts").click(function() {
	var hosts_url = /win/i.test(navigator.platform) ? 'file:///C:/Windows/System32/drivers/etc/hosts' : 'file:///etc/hosts'
	$.ajax({
		url: hosts_url,
		success: function(data) {
			$('#hosts').text(data)
		},
		error: function() {
			$('#hosts').html('<span style="color: red">无法获取hosts</span>')
		}
	})
})

})