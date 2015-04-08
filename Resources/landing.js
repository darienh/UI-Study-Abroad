
var scrollViewLanding = Ti.UI.createScrollView({
  contentHeight: 'auto',
  layout: 'vertical',
  width:'100%',
  showVerticalScrollIndicator: true,
  horizontalBounce: false,
  verticalBounce: false
});

var imageGroup = Ti.UI.createImageView({
  	image:'/images/StudyAbroadGroup.jpg',
  	height:200,
  	width:'95%', 
  	top:'1%' 
});
scrollViewLanding.add(imageGroup);

var missionTitle = Ti.UI.createLabel({
	color:'#525252',
	font:{fontFamily:'Calibri', fontSize:16},
	text:'\nStudy Abroad\n',
});
scrollViewLanding.add(missionTitle);

var labelMission = Titanium.UI.createLabel({
	color:'#525252',
	font:{fontFamily:'Calibri', fontSize:16},
	text:'The mission of Study Abroad is to provide\naccess to international experiences to all\nUniversity of Idaho students, to promote\nand facilitate the development of globally\ncompetent students, and to contribute to\ncampus internationalization and global\nlearning through the study abroad\nexperience.',
	textAlign:'left',
	width: Ti.UI.SIZE,
	left:20,
	right:20
});

scrollViewLanding.add(labelMission);


var didUTitle = Titanium.UI.createLabel({
	color:'#525252',
	font:{fontFamily:'Calibri', fontSize:16},
	text:'\nDid you know?\n'
});

scrollViewLanding.add(didUTitle);

var labelDidU = Titanium.UI.createLabel({
	color:'#525252',
	font:{fontFamily:'Calibri', fontSize:16},
	text:'* The UI is affiliated with over 370 universities\nin 69 countries including 29 partnership\nuniversities and affiliations with 5 study\nabroad program providers.\n\n* International Internships are available in 32\ncountries in virtually any field of study.\n\n* The UI is one of a handful of universities in\nthe U.S. who has a student fee-funded\nstudy broad scholarship.\n\n* At the UI, it is the International Experience\nGrant and it provides $157,000 in study\nabroad scholarships each year.\n\n* An average of 15% of UI students who\ngraduate have studied abroad',
	textAlign:'left',
	width: Ti.UI.SIZE,
	left:20,
	right:20
});

scrollViewLanding.add(labelDidU);

var joinUs = Titanium.UI.createLabel({
	color:'#525252',
	font:{fontFamily:'Calibri', fontSize:20, fontWeight:'bold'},
	text:'\nJoin Us!\n',
	shadowColor: '#aaa',
  	shadowOffset: {x:1, y:1},
  	shadowRadius: 2,
});

scrollViewLanding.add(joinUs);


