// initialize variable
const sidebarTabs = document.querySelectorAll(".sidebar ul li");
const mainSections = document.querySelectorAll(".main section");
const dashboardSection = document.getElementById("dashboardSection");
const forApprovalSection = document.getElementById("forApprovalSection");
const historySection = document.getElementById("historySection");
const carRepairHistorySection = document.getElementById("carRepairHistorySection");
const settingsSection = document.getElementById("settingsSection");
const helpSection = document.getElementById("helpSection");

// Dashboard section
function showDashboardSection(){
    dashboardSection.setAttribute("style", "display : block");
    forApprovalSection.setAttribute("style", "display : none");
    historySection.setAttribute("style", "display : none");
    carRepairHistorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
}

// For Approval section
function showForApprovalSection(){
    dashboardSection.setAttribute("style", "display : none");
    forApprovalSection.setAttribute("style", "display : block");
    historySection.setAttribute("style", "display : none");
    carRepairHistorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
}

// Dashboard section
function showHistorySection(){
    dashboardSection.setAttribute("style", "display : none");
    forApprovalSection.setAttribute("style", "display : none");
    historySection.setAttribute("style", "display : block");
    carRepairHistorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
}

// Dashboard section
function showCarRepairHistorySection(){
    dashboardSection.setAttribute("style", "display : none");
    forApprovalSection.setAttribute("style", "display : none");
    historySection.setAttribute("style", "display : none");
    carRepairHistorySection.setAttribute("style", "display : block");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : none");
}

// Settings section
function showSettingsSection(){
    dashboardSection.setAttribute("style", "display : none");
    forApprovalSection.setAttribute("style", "display : none");
    historySection.setAttribute("style", "display : none");
    carRepairHistorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : block");
    helpSection.setAttribute("style", "display : none");
}

// Help section
function showHelpSection(){
    dashboardSection.setAttribute("style", "display : none");
    forApprovalSection.setAttribute("style", "display : none");
    historySection.setAttribute("style", "display : none");
    carRepairHistorySection.setAttribute("style", "display : none");
    settingsSection.setAttribute("style", "display : none");
    helpSection.setAttribute("style", "display : block");
}