import { SELECTNAV, CLICKNAV } from "../constants/actionTypes";

export const selectNav = id => ({ type: SELECTNAV, id });

export const clickNav = id => ({ type: CLICKNAV, id });
