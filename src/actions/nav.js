import { SELECTNAVITEM, CLICKNAVITEM, CLOSENAVITEM } from "../constants/actionTypes";

export const selectNavItem = id => ({ type: SELECTNAVITEM, id });

export const clickNavItem = id => ({ type: CLICKNAVITEM, id });

export const closeNavItem = () => ({ type: CLOSENAVITEM });