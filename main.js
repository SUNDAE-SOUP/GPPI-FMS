// initialize variable
const sidebarTabs = document.querySelectorAll(".sidebar ul li");
const mainSections = document.querySelectorAll(".main section");
const dashboardSection = document.getElementById("dashboardSection");
const forApprovalSection = document.getElementById("forApprovalSection");
const historySection = document.getElementById("historySection");
const carRepairHistorySection = document.getElementById("carRepairHistorySection");
const settingsSection = document.getElementById("settingsSection");
const helpSection = document.getElementById("helpSection");

sidebarTabs.forEach((tab ,index) => {
    tab.addEventListener("click", () => {
        sidebarTabs.forEach(tabs => {
            tabs.classList.remove("hover");
            mainSections.forEach((section, sectionIndex) => {
                if(sectionIndex === index){
                    section.setAttribute("style", "display: block")
                }
                else{
                    section.setAttribute("style", "display: none");    
                }
            });
        });
        tab.setAttribute("class", "hover");
    });
})

const barChartShow = document.getElementById("barChart");
const barChartAShow = document.getElementById("barChartA");
const barChartBShow = document.getElementById("barChartB");
const pmsTab = document.getElementById("pmsTab");
const correctiveTab = document.getElementById("correctiveTab");

function showPMS(){
    if(barChartAShow.style.display == "none"){
        barChartShow.style.display = "none";
        barChartAShow.style.display = "block";
        barChartBShow.style.display = "none";
        // pmsTab.setAttribute("class", "hover");
        // correctiveTab.classList.remove("hover");
    }
    else{
        barChartShow.style.display = "block";
        barChartAShow.style.display = "none";
        barChartBShow.style.display = "none";
        // pmsTab.classList.remove("hover");
        // correctiveTab.setAttribute("class", "hover");
    }
}

function showCorrective(){
    if(barChartBShow.style.display == "none"){
        barChartShow.style.display = "none";
        barChartAShow.style.display = "none";
        barChartBShow.style.display = "block";
        barChartShow.classList.remove("hover");
        // pmsTab.classList.remove("hover");
        // correctiveTab.setAttribute("class", "hover");
    }
    else{
        barChartShow.style.display = "block";
        barChartAShow.style.display = "none";
        barChartBShow.style.display = "none";
        // pmsTab.setAttribute("class", "hover");
        // correctiveTab.classList.remove("hover");
    }
}