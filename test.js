document.getElementById("test").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");

    function modifyDOM() {
        //You can play with your DOM here or check URL against your regex
        const emailparentclass = document.getElementsByClassName("go");        // string representation 
        // const qseemail = document.querySelectorAll(".go").outerText;
        // console.log(emailparentclass)
        var result = ""
        for(var i=0;i < emailparentclass.length; i++){
            result += emailparentclass[i].textContent;
            // console.log(emailparentclass[i].textContent);
         }
        
         console.log(result)
        return document.getElementById("test").innerHTML = result;
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
    });
});