const SETTING_UPDATE = 'clipcc-gui/settings/SETTING_UPDATE';

const initialState = {
    layoutStyle: 'scratch3',
    autoSaveSecs: 120,
    darkMode: 'system',
    fps: 30,
    blur: 'on',
    autosave: 'off',
    compatibility: 'donotload',
    compression: 6
};

for (const k in initialState) {
    initialState[k] = localStorage.getItem(k) || initialState[k];
}

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case SETTING_UPDATE:
        localStorage.setItem(action.key, action.value);
        state[action.key] = action.value;
        return Object.assign({}, state);
    default:
        return state;
    }
};

const updateSetting = (key, value) => ({
    type: SETTING_UPDATE,
    key,
    value
});

const getSetting = (state, key) => state.scratchGui.settings[key];

export {
    reducer as default,
    initialState as settingsInitialState,
    updateSetting,
    getSetting
};
