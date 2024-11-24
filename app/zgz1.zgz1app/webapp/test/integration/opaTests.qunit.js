sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zgz1/zgz1app/test/integration/FirstJourney',
		'zgz1/zgz1app/test/integration/pages/empList',
		'zgz1/zgz1app/test/integration/pages/empObjectPage'
    ],
    function(JourneyRunner, opaJourney, empList, empObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zgz1/zgz1app') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheempList: empList,
					onTheempObjectPage: empObjectPage
                }
            },
            opaJourney.run
        );
    }
);