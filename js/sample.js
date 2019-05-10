

$(document).ready(function () {

	var forms=['https://drive.google.com/open?id=1Kod0wo-rNSeyuYnqqXE32bL_jOevJMKyEsIMYddcaew',	//1A
		   'https://drive.google.com/open?id=1pL7eLrzflz6VMrEGSd78BtFONd7HON8XKv-_mQcCAkY', //1B
		   'https://drive.google.com/open?id=1RD_T03DNjdm-so9YpByU5_d77-xmQUj1an9552YeOMw', //1C
		   'https://drive.google.com/open?id=1okxKcUlYilFRkmTwtXZewnEebsG5YbemjadFuHtYkZ8', //2A
		   'https://drive.google.com/open?id=1o82VJK9FlcYa9ZVrv_M_YlRuycSRUsTwaEPv_lKCd04', //2B
		   'https://drive.google.com/open?id=1DKPfYD_vaEOAcV3HfkiatECo2Tsz1aJON8rTH9lRgH0', //2C
		   'https://drive.google.com/open?id=1vEBvg1npfs7Z_PbSXVu4-KZnKYBanTUoO5pAFTnnark', //3A
		   'https://drive.google.com/open?id=1701URQXDGjFaq_VrJDphIkJQyBFkqRtteJIY07J60qs', //3B
		   'https://drive.google.com/open?id=11gj-niBvPq2zYIWmhtgVc61Z07BSncEiPkKJtd_laRI', //3C
		   'https://drive.google.com/open?id=1Y-eWFlmXoYbPDDkRsxfmHZsyZN0v-IyZDomgQaIW7uI', //4A
		   'https://drive.google.com/open?id=1vqbERgYMq9QbD0tW5klm3Bp9kvBJfdIzDHR716EUo6I', //4B
		   'https://drive.google.com/open?id=1pjG3jtKzeRBFHp0wK6zz1Jnb1LqJLueDHTNsnSOTELs', //4C
		   'https://drive.google.com/open?id=1da0L3biNm_H-Hy3dsTjMQRFnw07Hr0REcelqI8-oWkI', //5A
		   'https://drive.google.com/open?id=1La5pigyjT7JqQqg-XQ3LdfND4r6IyHqDMG6W4UBrwJI', //5B
		   'https://drive.google.com/open?id=1XnD_a6vx394sj3l8UJYs-NAt6p1GoDj-A4EkZw0C7XM', //5C
		   'https://drive.google.com/open?id=1l-Pl1R7_TLXoqlurrVwOzHQJnb0-hvASrMhH1fR7M60', //6A
		   'https://drive.google.com/open?id=1EqAqA0SmIbUzUCu_69CoVWUkTUSpHdSZxKfudHWqHMY', //6B
		   'https://drive.google.com/open?id=1I_kO5ZfP4jtmHZKwlPdbV7P3xJg_Hgt_00pqSVjiM7E', //6C
		   'https://drive.google.com/open?id=1sYT7hBR0FnxvibvLiKlnNPYzWXx_6PfgJ5wGERo56hw', //7A
		   'https://drive.google.com/open?id=1NjMMOKLPhDXbuGr7bA56YQweyEZ8MBADBEzdSCU96-o', //7B
		   'https://drive.google.com/open?id=1rWb8Q3UlBcQp6fZmgLorF07whMHMX3BXR9hNt4c6NpM', //7C
		   'https://drive.google.com/open?id=1v9bzoFwPJK2snaMrKWbrCCxO1XaWMf71jDIW6TigwXo', //8A
		   'https://drive.google.com/open?id=1Dz0tzv8jPshGfP_Khjlp56gweEZSidi6FmN9oHtN5oU', //8B
		   'https://drive.google.com/open?id=1EoVWdSoVFjZ5mDcAooxW_adfS_LUAZlevKov_sBCVtY', //8C
		   'https://drive.google.com/open?id=1F9PpE7OCUHmc3l0H6iBSxp2UXgodgtjCa2ARTQUh2Zw', //9A
		   'https://drive.google.com/open?id=18khu7RNyDUM9BylWjKs3voas9IvgHv4P_xKYcbElMMk', //9B
		   'https://drive.google.com/open?id=1ARMPX87jn_w0-D-OAs-NSn_GfLiTy_UN50ZfGL18Vu0'] //9C


	var l=forms.length
	r1= Math.round(Math.random()*l);
	r2= Math.round(Math.random()*l);
	while (r2==r1){
		r2= Math.round(Math.random()*l);
	}
	r3= Math.round(Math.random()*l);
	while (r3==r2){
		r3= Math.round(Math.random()*l);
	}
	r4= Math.round(Math.random()*l);
	while (r4==r3){
		r4= Math.round(Math.random()*l);
	}

	// console.log(r1)
	// console.log(r2)
	// console.log(r3)
	// console.log(r4)


	$('#gform1').on('click', function() {
		var win=window.open(forms[r1],'_blank');
		win.focus();
	});
	$('#gform2').on('click', function() {
		var win=window.open(forms[r2],'_blank');
		win.focus();
	});
	$('#gform3').on('click', function() {
		var win=window.open(forms[r3],'_blank');
		win.focus();
	});
	$('#gform4').on('click', function() {
		var win=window.open(forms[r4],'_blank');
		win.focus();
	});
});