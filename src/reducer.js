export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    // token : "BQBnjPmo3WIaT1QJXbK-73e_Q7XdQPaiNgOBaVb9Be8OGWehAnL-LQa2DounZ5ROsN2Ssjfuu6vhFhOHg3zA7Ew5y8WTI9zOYZSALH8MgiM9iM1NjOUHlWz8qLzop4b-FbDI-r243qmXCdsSvwXg37y3W0YGsn52CM_AOozWTYaEdpX7",
};

const reducer = (state, action) => {
    console.log("ACTION:", action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state, user : action.user
            };
        case "SET_TOKEN":
            return {
                ...state, token : action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state, playlists : action.playlists
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state, discover_weekly : action.discover_weekly
            }
    
        default:
            return state;
    }
}

export default reducer;