import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiendpointService {
    public API: any = {
        localURL: "http://10.107.168.23:8082/ZenForteWebServices/api/",

        baseURL: "/ZenForteWebServices_PreRelease/api/",
        // Dashboard graph for CEO, SRMGMT & BU
        dashboardGraphForCeoSrmgmtBuService: "managementDashboard/graphNew?role=BU",

        // Dashboard BU specific graph for CEO, SRMGMT & BU
        dashboardBuSpecificGraphForCeoSrmgmtBuService: "managementDashboard/graphNew?account_name=",

        // Dashboard BU specific graph for DH
        dashboardBuSpecificGraphForDhService: "managementDashboard/graphNew?role=",

        // Dashboard counts for CEO, SRMGMT & BU
        dashboardCountsForCeoSrmgmtBuService: "managementDashboard/dashboard",

        // Dashboard counts for DH
        dashboardCountsForDhService: "managementDashboard/toggleDH?dh_id=",

        // Dashboard counts for DH
        dashboardDashDhService: "managementDashboard/dashDH?account_name=",

        // 25 Window 
        twentyFiveWindowService: "dashboard/allDashboard?staff_no=",

        // OverAll Associates
        overallAssociatesService: "charts/pieChart/",

        // PGM Distribution
        pgmDistributionService: "charts/barChart/",

        // 25 Window tile click for without weightage
        withoutWeightageListService: "getMatrixDetailsWS/getMoreDetails?parameter=celldetailnowtg&rowColNo=",

        // 25 Window tile click for with weightage
        withWeightageListService: "getMatrixDetailsWS/getMoreDetails?parameter=weightdetail&rowColNo=",

        // Fetch employee profile picture
        fetchUserProfilePicService: "searchEngine/getImage/",

        // without weightage associate more information with charts
        withouWeightageMoreInfoWithChartsService: "viewDetails?staffNo=",

        // OVerAll associates pie chart drilldown
        overAllAssociatesChartLabelDrillDownService: "charts/pieChart/",

        // Search Similar Associate
        searchSimilarAssociateService: "searchEngine/listSimilarAssociates/",

        // Search Associate
        searchAssociateService: "searchAssociateMatrix/byAny?staff_name_auto=",

        // RWF Ageing
        rwfAgeingService: "rwf/ageing/",

        // RWF Skill Count
        rwfSkillCountService: "rwf/skillCount/",

        // RWF Skill pie chart drill down
        resorceListForSkillService: "rwf/resourceListForSkill/",

        // RWF get rating data
        rwfResourceGetRatingDataService: "rwf/getRatingData/",

        // RWF Select
        rwfSelectService: "rwftrans/pipelineEmpDetailsreal?parameter=insertMapping&staff_no=",

        // RWF Delete
        rwfDeleteService: "rwftrans/pipelineEmpDetailsreal?parameter=deleteMapping&staff_no=",

        // Deamnd List
        demandListService: "demand/demandForecasting?staff_no=",

        // Demand Additional Details
        demandAdditionalDetailsService: "demand/demandForecasting?staff_no=",

        // Save SRF Details
        saveSrfSerice: "srfaction?staff_no=",

        // PGM Bar Graph Drill Down
        pgmDrillDownService: "charts/barChartDetail/",

        // RWF Dashboard dropdown values
        rwfDashboardDropDownDataService: "rwfDashboard/dropdownDataRwf",

        // RWF Dashboard top strip data
        rwfDashboardTopStripDataService: "rwfDashboard/topStripRwf?buList=",

        // RWF Dashboard graph 
        rwfDashboardGraphDataServie: "rwfDashboard/graphsRwf?buList=",

        // RWF Dashboard resource 
        rwfDashboardResourceDataService: "rwfDashboard/resourceListRwf?buList=",

        // RWF Pipeline dropdown values
        rwfPiplelineDropDownDataService: "rwfDashboard/dropdownDataPipeline",

        // RWF Pipleline resource list pipeline
        rwfPipelineResourceListDataService: "rwfDashboard/resourceListPipeline?buList=",

        // RWF Pipeline graphs
        rwfPipelineGraphDataService: "rwfDashboard/graphsPipeline?buList=",

        // RWF Pipeline top strip
        rwfPipelineTopStripDataService: "rwfDashboard/topStripPipeline?buList=",

        // Get Account list
        getAccountList: "managementDashboard/dashboard/account",

        // Get Total Associates count
        getTotalAssociatesCount: "managementDashboard/dashboard/associates",

        // Get Billable Associates count
        getBillableAssociatesCount: "managementDashboard/dashboard/billable",

        // Get Non Billable Associates count
        getNonBillableAssociatesCount: "managementDashboard/dashboard/nonbillable",

        // Get Intransit count
        getInTransitCount: "managementDashboard/dashboard/intransit",

        // Get Pool count
        getPoolCount: "managementDashboard/dashboard/pool",

        // Get EBR Count
        getEbrCount: "managementDashboard/dashboard/ebr",

        // Get OnShore Location wise count
        getOnShoreLocationWiseCount: "managementDashboard/dashboard/onshoreLocationWiseCount",

        // Get OffShore Loaction wise count
        getOffShoreLocationWiserCount: "managementDashboard/dashboard/offshoreLocationWiseCount",

        // Get Open positions count
        getOpenPositionsCount: "managementDashboard/dashboard/OpenPositions",

        // Get Billing loss count
        getBillingLossCount: "managementDashboard/dashboard/BillingLoss",

        // Get Niche skills count
        getNicheSkillsCount: "managementDashboard/dashboard/NicheSkills",

        // Get SME count
        getSmeCount: "managementDashboard/dashboard/sme",

        // Get Release Pipeline count
        getReleasePipelineCount: "managementDashboard/dashboard/releasePiplepline",

        // Get Visa count
        getVisaCount: "managementDashboard/dashboard/visa",

        // Get Rated count
        getRatedCount: "managementDashboard/dashboard/rated",

        // Get Total Associates count for DH
        getTotalAssociatesCountForDh: "managementDashboard/toggleDH/associates?dh_id=",

        // Get Billable Associates count for DH
        getBillableAssociatesCountForDh: "managementDashboard/toggleDH/billable?dh_id=",

        // Get Non Billable Associates count for DH
        getNonBillableAssociatesCountForDh: "managementDashboard/toggleDH/nonbillable?dh_id=",

        // Get Intransit count for DH
        getInTransitCountForDh: "managementDashboard/toggleDH/intransit?dh_id=",

        // Get Pool count for DH
        getPoolCountForDh: "managementDashboard/toggleDH/pool?dh_id=",

        // Get EBR Count for DH
        getEbrCountForDh: "managementDashboard/toggleDH/ebr?dh_id=",

        // Get OnShore Location wise count for DH
        getOnShoreLocationWiseCountForDh: "managementDashboard/toggleDH/onshoreLocationWiseCount?dh_id=",

        // Get OffShore Loaction wise count for DH
        getOffShoreLocationWiserCountForDh: "managementDashboard/toggleDH/offshoreLocationWiseCount?dh_id=",

        // Get Open positions count for DH
        getOpenPositionsCountForDh: "managementDashboard/toggleDH/OpenPositions?dh_id=",

        // Get Billing loss count for DH
        getBillingLossCountForDh: "managementDashboard/toggleDH/BillingLoss?dh_id=",

        // Get Niche skills count for DH
        getNicheSkillsCountForDh: "managementDashboard/toggleDH/NicheSkills?dh_id=",

        // Get SME count for DH
        getSmeCountForDh: "managementDashboard/toggleDH/sme?dh_id=",

        // Get Release Pipeline count for DH
        getReleasePipelineCountForDh: "managementDashboard/toggleDH/releasePiplepline?dh_id=",

        // Get Visa count for DH
        getVisaCountForDh: "managementDashboard/toggleDH/visa?dh_id=",

        // Get Rated count for DH
        getRatedCountForDh: "managementDashboard/toggleDH/rated?dh_id=",

        // Get Billable Associates dash dh count
        getDashDhBillableAssociatesCount: "managementDashboard/dashDH/billable?account_name=",

        // Get Non Billable Associates dash dh count
        getDashDhNonBillableAssociatesCount: "managementDashboard/dashDH/nonbillable?account_name=",

        // Get Intransit dash dh count
        getDashDhInTransitCount: "managementDashboard/dashDH/intransit?account_name=",

        // Get EBR dash dh Count
        getDashDhEbrCount: "managementDashboard/dashDH/ebr?account_name=",

        // Get Pool dash dh count
        getDashDhPoolCount: "managementDashboard/dashDH/pool?account_name=",

        // Gender chart for PGM 
        getGenderChartForPGM: "charts/genderChart/",

        // Happiness index API
        happinessIndexService: "happiness/save",

        // Get Profile Info
        getProfileInfo: 'profile/getProfile?staff_no=',

        // Get technical skills for associate in profile info
        getTechnicalSkills: 'profile/getTechnicalSkills?staff_no=',

        // Get certificate details for associate in profile info
        getCertificateDetails: 'profile/getExistingCertificateDetails?staff_no=',

        // Get Domain details for associate in profile info
        getDomainDetails: 'profile/getExistingDomainData?staff_no=',

        // Get accolade details for associate in profile info
        getAccoladeDetails: 'profile/getExistingAccoladeData?staff_no=',

        // Get Visa Details for associate in profile info
        getVisaDetails: 'visa/getVisaFormDetails',

        // Get the list of Certificate names
        getCertificateDataURL: 'profile/getNewCertificateDetails?staff_no=',

        // Get Domain dropdown data for associate in profile info
        getDomainDataURL: 'profile/getNewDomainData?staff_no=',

        // Post to submit profile update certificate details
        postCertificateDetailsURL: 'profile/updateCertificateDetails?staff_no=',

        // Delete certificate from profile update
        deleteCertificateURL: 'profile/deleteCertificateDetails?staff_no=',

        // Sumbit accolade details
        submitAccoladeDetailsURL: 'profile/updateAccoladeDetails?staff_no=',

        // Delete accolade details
        deleteAccoladeURL: 'profile/deleteAccoladeDetails?staff_no=',

        // submit domain details
        submitDomainDetailsURL: 'profile/updateDomainDetails?staff_no=',

        // Delete domain details
        deleteDomainURL: 'profile/deleteDomainDetails?staff_no=',

        // Submit profile Info details
        submitProfileDetailsURL: 'profile/updatePersonalDetails?staff_no=',

        //
        uploadProfilePicURL: 'profile/saveImage?staff_no=',

        // Twenty five window with weightage more details API methos
        getTwentyFiveWindowWithWeightageMoreDetails: "viewMatrixDetails/WithWeightageMoreDetails?mgrId=",

        // Twenty five window without weightage more details API methos
        getTwentyFiveWindowWithoutWeightageMoreDetails: "viewMatrixDetails/WithoutWeightageMoreDetails?mgrId=",

        // Leadwise distribution more details API
        getLeadWiseDistributionMoreDetails: "viewMatrixDetails/LeadwiseDistributionMoreDetails?mgrId=",

        // Overall associates more details API
        getOverallAssociatesMoreDetails: "viewMatrixDetails/OverallAssociatesMoreDetails?mgrId=",

        // 25 window with weightage history ratings API
        getWithWeightageHistoryRating: "getHistoryRatings/all?staffNo=",

        // 25 window with weightage history ratings drilldown API
        getWithWeightageHistoryRatingDrilldown: "getHistoryRatings/rating?staffName=",

        // Generic Search with search parameters API
        genericSearchWithSearchParametersService: "genericSearch/searchDetails?account=",

        // Fetch My RWF Transactions data
        getMyRwfTransactionsData: "rwf/myRwfTransaction?mgrId=",

        // Submit My RWF Transactions data
        submitRwfTransactionsData: "rwf/submitRwfTransaction?mgr_id=",

        // Cancel My RWF Transactions data
        cancelRwfTransactionsData: "rwf/cancelShortlisted?mgr_id=",

        // Generic search location dropdown data
        genericSearchLocationDropdownData: "/genericSearch/getLocationList",

        // Generic search account dropdown data 
        genericSearchAccountDropdownData: "/genericSearch/getUserSpecificAccounts?mgr_id=",

        // Generic search All skills autocomplete data
        genericSearchAllSkillsData: "/genericSearch/allSkills",
    }
    public constructor() { }
}