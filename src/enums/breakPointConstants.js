// export const XS_SCREEN = 320;
// export const XS_TYPE = 'xs-mobile';

export const MOBILE_SCREEN = 375;
// export const MOBILE_TYPE = 'xs';
export const MOBILE_TYPE = "mobile";

export const TABLET_SCREEN = 768;
export const TABLET_TYPE = "tablet";

export const SM_DESKTOP_SCREEN = 1024;
export const SM_DESKTOP_TYPE = "lg";

export const LG_DESKTOP_SCREEN = 1440;
// export const LG_DESKTOP_TYPE = 'xl';
export const LG_DESKTOP_TYPE = "desktop";

export const RESOLUTIONS_LIST = [

  {
    type: MOBILE_TYPE,
    size: MOBILE_SCREEN,
  },
  {
    type: TABLET_TYPE,
    size: TABLET_SCREEN,
  },

  {
    type: SM_DESKTOP_TYPE,
    size: SM_DESKTOP_SCREEN,
  },
  {
    type: LG_DESKTOP_TYPE,
    size: LG_DESKTOP_SCREEN,
  },

];
