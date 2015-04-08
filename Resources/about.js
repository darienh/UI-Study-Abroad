var scrollView = Ti.UI.createScrollView({
  contentHeight: 'auto',
  layout: 'vertical',
  showVerticalScrollIndicator: true,
  horizontalBounce: false,
  verticalBounce: false
});

var imageLanding = Ti.UI.createImageView({
  	image:'/images/LandingPic.png',
  	height:200,
  	width: '95%', 
  	top:'1%' 
});
scrollView.add(imageLanding);

var aboutTitle = Titanium.UI.createLabel({
	color:'#525252',
	font:{fontFamily:'Calibri', fontSize:16, fontWeight:'bold'},
	text:'About Us',
});
scrollView.add(aboutTitle);

var label1 = Titanium.UI.createLabel({
	color:'#525252',
	font:{fontFamily:'Calibri', fontSize:16},
	text:'The Study Abroad Staff at the University of\nIdaho are here to help students, faculty, and\nstaff travel abroad for study, internships,\nresearch, volunteer work, or teaching and to\nhelp enhance global learning on campus.',
	textAlign:'left',
	top: 20,
    width: Ti.UI.SIZE,
	left:20,
	right:20
});

scrollView.add(label1);

var stepsTitle = Titanium.UI.createLabel({
	color:'#525252',
	font:{fontFamily:'Calibri', fontSize:16, fontWeight:'bold'},
	text:'\nHow To Apply:\n',
	textAlign:'left'
});
scrollView.add(stepsTitle);

var label2 = Titanium.UI.createLabel({
	color:'525252',
	font:{fontFamily:'Calibri', fontSize:16},
	text:'Step 1: Pre-Application\nDetermine the one program that fits your\nneeds the best, and apply to that program.\nUI Study Abroad staff can help you at any\ntime along the way!',
	textAlign:'left',
	width: Ti.UI.SIZE,
	left:20,
	right:20
});

scrollView.add(label2);

var label3 = Titanium.UI.createLabel({
	color:'525252',
	font:{fontFamily:'Calibri', fontSize:16},
	text:'\nStep 2: Apply\nChoose the type of international experience\nyou wish to complete. Fill out the appropriate\nforms and follow the directions on the Apply\nlink at our website!',
	textAlign:'left',
	width: Ti.UI.SIZE,
	left:20,
	right:20
});

scrollView.add(label3);

var label4 = Titanium.UI.createLabel({
	color:'525252',
	font:{fontFamily:'Calibri', fontSize:16},
	text: '\nStep 3: Post-Application\nOnce you have applied to study abroad, you\nwill have a personal Studio Abroad account\nwhere you will find post-application forms\nand requirements specific to you and your\nprogram.',
	textAlign:'left',
	width: Ti.UI.SIZE,
	left:20,
	right:20
});

scrollView.add(label4);

var label5 = Titanium.UI.createLabel({
	color:'525252',
	font:{fontFamily:'Calibri', fontSize:16},
	text: '\nStep 4: While Abroad\nEnjoy your life changing experience with\nStudy Abroad! Immerse yourself in your host\ncountry’s unique culture! For further\ninformation and tips while abroad, visit\nour website!',
	textAlign:'left',
	width: Ti.UI.SIZE,
	left:20,
	right:20
});

scrollView.add(label5);
