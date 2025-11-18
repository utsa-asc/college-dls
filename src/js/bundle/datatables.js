import * as bootstrap from "bootstrap";
import DataTable from "datatables.net-dt";
let table = new DataTable("#file-report", {
  pageLength: 50,
  order: [[5, "desc"]],
  fixedHeader: true,
});

document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
});