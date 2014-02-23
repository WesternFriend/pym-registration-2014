cj(function($) {
    // Declare CSS variables
    var price_inputs = {
        preferred_accommodations: ".Preferred_Accommodations-section",
        commuter_adult_days: ".Commuter_Adult_Days-section",
        commuter_youth_young_friend_days: ".Commuter_Youth_Young_Friend_Day-section",
        commuter_child_days: ".Commuter_Child_Days-section",
        commuter_infant_to_5_days: ".Commuter_Infant_to_5_Days-section",
        overnight_adult_full_week: ".Overnight_Adult_Full_Week-section",
        overnight_adult_daily_dorm: ".Overnight_Adult_Daily_Dorm_Qty-section, .Overnight_Adult_Daily_Dorm_Days-section",
        overnight_adult_daily_semi_private: ".Overnight_Adult_Daily_Semi_priv-section",
        overnight_adult_daily_camping: ".Overnight_Adult_Daily_Camping_Q-section, .Overnight_Adult_Daily_Camping_D-section",
        overnight_young_friend_full_week: ".Overnight_Young_Friend_Full_Wee-section",
        overnight_young_friend_daily_dorm: ".Overnight_Young_Friend_Daily_Do-section",
        overnight_young_friend_daily_semi_private: ".Overnight_Young_Friend_Daily_Se-section",
        overnight_young_friend_daily_camping: ".Overnight_Young_Friend_Daily_Ca-section",
        overnight_young_friend_daily_yf_area: ".Overnight_Young_Friend_Daily_YF-section",
        overnight_youth_full_week: ".Overnight_Youth_Full_Week-section",
        overnight_youth_daily_dorm: ".Overnight_Youth_Daily_Dorm_Qty-section, .Overnight_Youth_Daily_Dorm_Days-section",
        overnight_youth_daily_semi_private: ".Overnight_Youth_Daily_Semi_priv-section",
        overnight_youth_daily_camping: ".Overnight_Youth_Daily_Camping_Q-section, .Overnight_Youth_Daily_Camping_D-section",
        overnight_youth_daily_jym_area: ".Overnight_Youth_Daily_JYM_area_-section", // Need to be able to select this value based on age
        overnight_child_full_week: ".Overnight_Child_Full_Week-section",
        overnight_child_daily_dorm_qty: ".Overnight_Child_Daily_Dorm_Qty-section",
        overnight_child_daily_dorm_days: ".Overnight_Child_Daily_Dorm_Days-section",
        overnight_child_daily_camping_qty: ".Overnight_Child_Daily_Camping_Q-section",
        overnight_child_daily_camping_days: ".Overnight_Child_Daily_Camping_D-section",
        overnight_infant_to_five_full_week: ".Overnight_Infant_to_5_Full_Week-section",
        overnight_infant_to_five_daily_dorm: ".Overnight_Infant_to_5_Daily_Dor-section",
        overnight_infant_to_five_daily_semi_private: ".Overnight_Infant_to_5_Daily_Sem-section",
        overnight_infant_to_five_daily_camping: ".Overnight_Infant_to_5_Daily_Cam-section",
        overnight_optional_add_ons: ".Overnight_Optional_add_ons-section",
        prices_total: "#pricesetTotal"
    };
    
    var input_birthdate = "#birth_date_display";
    var age; // Placeholder for age calculation(s)

    $(document).ready(function() {
        // Hide all form price elements
        hideAllPrices();
        
        // Calculate age, if already present.
        age = calculateAge();

        // Attach event listeners to all form price elements
        attachEventListeners();
    });
    
    var hideAllPrices = function () {
        // Code to hide all price sections
        for (var price_input in price_inputs) {
            $(price_inputs[price_input]).hide();
        }
    };
    
    var showAccommodationsSelection = function () {
        // Code to show a price section
    };
    var resetAllPriceValues = function () {
        // reset all price values. e.g. triggered when form accommodations change.
    };
    
    var calculateAge = function () {
        // Calculate age in years

        // Age placeholder
        var age;

        //Get the value of the birthdate input, and convert it to a JavaScript date object
        var birthdate = new Date($(input_birthdate).val());

        // Create a date opject with the current date
        var today = new Date();

        // Calculate the person's age (converting the value from age in miliseconds to years)
        // get age in miliseconds
        // convert to: seconds / minutes / hours / days / years
        var age_in_ms = today - birthdate;
        var age_in_years = age_in_ms  / 1000 / 60 / 60 / 24 / 365;

        // Should this modify the higher level age variable instead of returning age?
        age = age_in_years;
        // return age_in_years;
    };

    var attachEventListeners = function () {
        // Attach event listeners to all page elements

        // Birth Date input event listener(s)
        $(input_birthdate).change(calculateAge);

        // Show accommodations fields
        $("input[name='price_89']").change(showAccommodationsSelection);
    };
}) (jQuery);
