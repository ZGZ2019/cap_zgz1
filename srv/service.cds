using { zgz1 as my } from '../db/schema';

@path : '/service/zgz1Svcs'
service zgz1Service
{
    annotate emp with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'zgz1Viewer' ] },
        { grant : [ '*' ], to : [ 'zgz1Manager' ] }
    ];

    @odata.draft.enabled
    entity emp as
        projection on my.emp;
}

annotate zgz1Service with @requires :
[
    'authenticated-user'
];
