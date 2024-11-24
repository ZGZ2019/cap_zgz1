using { zgz1 as my } from '../db/schema';

@path : '/service/zgz1Svcs'
service zgz1Service
{
    @odata.draft.enabled
    entity emp as
        projection on my.emp;
}

annotate zgz1Service with @requires :
[
    'authenticated-user'
];
