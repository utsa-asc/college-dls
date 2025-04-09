import DataTable from 'datatables.net-dt';
let table = new DataTable('#file-report',{
    "pageLength": 50,
    "order": [[ 2, "desc" ]],
    fixedHeader: true
 });