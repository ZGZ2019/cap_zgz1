sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zgz1.zgz1app',
            componentId: 'empObjectPage',
            contextPath: '/emp'
        },
        CustomPageDefinitions
    );
});