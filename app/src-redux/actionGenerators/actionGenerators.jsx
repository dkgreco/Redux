module.exports = (() => {
    let changeSearchFilter = searchFilter => {
        "use strict";
        return {
            type: 'SET_FILTER',
            searchFilter: searchFilter
        }
    };

    let showCompletedTasks = boolVal => {
        "use strict";
        return {
            type: 'SHOW_COMPLETED',
            showCompleted: boolVal
        }
    };

    let addTaskToList = task => {
        "use strict";
        return {
            type: 'ADD_TASK',
            task: task
        }
    };

    let removeTaskFromList = taskId => {
        "use strict";
        return {
            type: 'DEL_TASK',
            id: taskId
        }
    };

    let startLocationSearch = () => {
        "use strict";
        return {
            type: 'START_LOCATION_SEARCH'
        }
    };
    let completeLocationSearch = url => {
        "use strict";
        return {
            type: 'STOP_LOCATION_SEARCH',
            url: url
        }
    };
    let fetchLocationInfo = () => {
        return (dispatch, getState) => {
            "use strict";
            const axios = require('axios');
            dispatch(startLocationSearch());

            axios.get('http://ipinfo.io').then(res => {
                "use strict";
                let location = res.data.loc;
                let baseUrl = 'http://maps.google.com/?q=';

                let passbackUrl = baseUrl + location;

                dispatch(completeLocationSearch(passbackUrl));
            });
        };
    };

    return {
        changeSearchFilter,
        showCompletedTasks,
        addTaskToList,
        removeTaskFromList,
        fetchLocationInfo
    };
})();



/*

"use strict";
const axios = require('axios');
setDispatchTo(startLocationSearch());

axios.get('http://ipinfo.io').then(res => {
    "use strict";
    let location = res.data.loc;
    let baseUrl = 'http://maps.google.com/?q=';

    let passbackUrl = baseUrl + location;

    setDispatchTo(completeLocationSearch(passbackUrl));
});*/
