sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zgz1.zgz1app',
            componentId: 'empList',
            contextPath: '/emp'
        },
        CustomPageDefinitions
    );
});