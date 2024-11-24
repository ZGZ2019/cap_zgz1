namespace zgz1;

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    managed,
    temporal
}
from '@sap/cds/common';

entity emp
{
    key ID : UUID;
    name : String(30);
    number : Integer;
}
