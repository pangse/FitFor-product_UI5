sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zuifitfor/test/integration/FirstJourney',
		'zuifitfor/test/integration/pages/FitForList',
		'zuifitfor/test/integration/pages/FitForObjectPage'
    ],
    function(JourneyRunner, opaJourney, FitForList, FitForObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zuifitfor') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheFitForList: FitForList,
					onTheFitForObjectPage: FitForObjectPage
                }
            },
            opaJourney.run
        );
    }
);