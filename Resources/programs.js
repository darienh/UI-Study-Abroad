function programView() {
	
	var progBackgroundView = Ti.UI.createView({
		backgroundColor:'#F2EDCB'
	});
	
	var tableView = Ti.UI.createTableView({
			style: Ti.UI.iPhone.TableViewStyle.GROUPED,
			backgroundColor:'#F2EDCB',
			top:'13%',
			scrollable: false
	});
	
	var firstSection = Ti.UI.createTableViewSection({});
													
	var firstRow = Ti.UI.createTableViewRow({
		title: 'Custom Search',
		backgroundColor: '#EEEEF3',
		color:'#525252',
		hasChild: true
	});
	
	var secondRow = Ti.UI.createTableViewRow({
		title: 'List By Country',
		backgroundColor: '#EEEEF3',
		color:'#525252',
		hasChild: true
		});
	
	var thirdRow = Ti.UI.createTableViewRow({
		title: 'List By Region',
		backgroundColor: '#EEEEF3',
		color:'#525252',
		hasChild: true
		});
		
	var fourthRow = Ti.UI.createTableViewRow({
		title: 'List By Program Name',
		backgroundColor: '#EEEEF3',
		color:'#525252',
		hasChild: true
	});
	
	var progTitleLabel = Ti.UI.createLabel({
		top: '5%',
		color:'#525252',
		font:{fontFamily:'Calibri', fontSize:'16'},
		textAlign:'center',
		text:'Select an option to search for programs. \nTo filter programs, use Custom Search.'
	});
	
	
	var progInfoLabel = Ti.UI.createLabel({
		top: '60%',
		color:'#525252',
		font:{fontFamily:'Calibri', fontSize:'16'},
		//textAlign:'center'
		text:'All programs found within the UI Study Abroad\nprogram search are UI affiliated and approved\nprograms. UI students can use their financial\naid toward any UI affiliated program, and UI will\naccept credit from any UI affiliated program.'
	});
	
	firstSection.add(firstRow);
	firstSection.add(secondRow);
	firstSection.add(thirdRow);
	firstSection.add(fourthRow);
	tableView.setData([firstSection]);
	progBackgroundView.add(tableView);
	progBackgroundView.add(progInfoLabel);
	progBackgroundView.add(progTitleLabel);
	return progBackgroundView;
};

