

$(document).ready(function () {

	var forms=['https://drive.google.com/open?id=1Kod0wo-rNSeyuYnqqXE32bL_jOevJMKyEsIMYddcaew',	//1A
		   'https://drive.google.com/open?id=1pL7eLrzflz6VMrEGSd78BtFONd7HON8XKv-_mQcCAkY', //1B
		   'https://drive.google.com/open?id=1RD_T03DNjdm-so9YpByU5_d77-xmQUj1an9552YeOMw', //1C
		   'https://drive.google.com/open?id=1okxKcUlYilFRkmTwtXZewnEebsG5YbemjadFuHtYkZ8', //2A
		   'https://drive.google.com/open?id=1o82VJK9FlcYa9ZVrv_M_YlRuycSRUsTwaEPv_lKCd04', //2B
		   'https://drive.google.com/open?id=1DKPfYD_vaEOAcV3HfkiatECo2Tsz1aJON8rTH9lRgH0', //2C
		   'https://drive.google.com/open?id=1vEBvg1npfs7Z_PbSXVu4-KZnKYBanTUoO5pAFTnnark', //3A
		   'https://drive.google.com/open?id=1701URQXDGjFaq_VrJDphIkJQyBFkqRtteJIY07J60qs', //3B
		   'https://drive.google.com/open?id=11gj-niBvPq2zYIWmhtgVc61Z07BSncEiPkKJtd_laRI'] //3C
		   // 'https://drive.google.com/open?id=1gGCFt8bLm4ATHszjI4y2AIgD-2e7hwpQ9Lo1SQplS14', //4A
		   // 'https://drive.google.com/open?id=1T_ICX0Tl8e5dWkLnS2TyNs8NiIHg7AcjypSGTTOhEbg', //4B
		   // 'https://drive.google.com/open?id=1PzDE5lSs9hBYsukxtednpdQVJSU6SnC0eTZipVlv9E0', //4C
		   // 'https://drive.google.com/open?id=1SjeW1CSmVXcbJgFtOGynT0eg0RWCOb63jdIF5eR6rS8', //5A
		   // 'https://drive.google.com/open?id=1WcnMgH-ekpahNOuUa_TNNwZ37_a5QEwUqyBtMxxedhk', //3B
		   // 'https://drive.google.com/open?id=1QvHYh-GT24EDXKxgLwEPmuJPFD1NP-xA_Cwa-rBIE2I', //5C
		   // 'https://drive.google.com/open?id=1A75Aj3PTLGYCrI7k-RnEdKhKkkujCPOJCs77c4W2RPA', //6A
		   // 'https://drive.google.com/open?id=1ktx157x-pMo1CoX_t4x5JPUD7JJ20FmkezIa3dTMSi4', //6B
		   // 'https://drive.google.com/open?id=1S4ZkCnMxw7fejqnyD2udLPLG3pvHYwD3PDSbgjVA6xg', //6C
		   // 'https://drive.google.com/open?id=1pkfyFvWblHbdh3eZ7HO_xyitM0GY97K5n3VEwmqQZZA', //7A
		   // 'https://drive.google.com/open?id=1GUy3-XZ09xqz_GuVVJbXxNN-sd5WcAMLBaUW2RHxSH4', //7B
		   // 'https://drive.google.com/open?id=1oEP0HItYKoXvOoI-igHS2xN-ZYc1XSBW7JLZaHHoyoo', //7C
		   // 'https://drive.google.com/open?id=10bDlZw4WfdRAPZAdfa7UFCSK6PVUS9z31AIbyjB_nyc', //8A
		   // 'https://drive.google.com/open?id=1yqwL-NxCemiQWVVotMBcxz8r65IFY_gvtw25TJ_sfpk', //8B
		   // 'https://drive.google.com/open?id=1ULB5lxMs0g4Fod03F4QG1QY3i1sdsfxyqiDIz5LjcYU', //8C
		   // 'https://drive.google.com/open?id=12Qi6RcHeWItInDHUQhrAj8pNE25aAejpxlqGNlIl2vE', //9A
		   // 'https://drive.google.com/open?id=1pfy9Yl5wG61PzNykJUNudTNGb1vS5gIuBmrYUNRMKFY', //9B
		   // 'https://drive.google.com/open?id=1Aj51qbuEZoo-XrzGUT3vbwTj4e6kxtTQxC0vBqDAShQ'] //9C


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