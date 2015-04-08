Ti.include('contact.js');
Ti.include('programs.js');
Ti.include('about.js');
Ti.include('landing.js');


Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup({
	barColor:'#d9bd61',
	tabsBackgroundColor:'#f4f4f4', 
	activeTabIconTint:'#292929'
});

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Home',
    backgroundColor:'#F2EDCB'
});
var tab1 = Titanium.UI.createTab({  
    icon:'home.png',
    title:'Welcome!',
    window:win1
});


var win2 = Titanium.UI.createWindow({  
    title:'Info',
    backgroundColor:'#F2EDCB'
});
var tab2 = Titanium.UI.createTab({  
    icon:'info.png',
    title:'Info',
    fontWeight:'bold',
    window:win2
});


var win3 = Ti.UI.createWindow({
	title:'Programs',
	backgroundColor:'#F2EDCB'
});
var tab3 = Titanium.UI.createTab({
	icon:'airport.png',
	title:'Programs',
	window: win3
});

var win4 = Ti.UI.createWindow({
	title:'Contact Us!',
	backgroundColor:'#F2EDCB'
});
var tab4 = Titanium.UI.createTab({
	icon:'message.png',
	title:'Contact Us!',
	window: win4
});

//win1: Landing Page
win1.add(scrollViewLanding);

//win2: About
win2.add(scrollView);

//win3: List of Programs
win3.add(programView());

//win4: Contact Info
win4.add(labelInfo);
win4.add(imageMap);


//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);
tabGroup.addTab(tab4);

// open tab group
tabGroup.open();
