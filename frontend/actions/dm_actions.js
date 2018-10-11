import * as DmApiUtil from '../util/dm_api_util';

export const RECEIVE_DMS = "RECEIVE_DMS";
export const RECEIVE_DM = "RECEIVE_DM";
export const REMOVE_DM = "REMOVE_DM";
export const SWITCH_DM = "SWITCH_DM";
const SWITCH_CHANNEL = "SWITCH_CHANNEL";

const receiveDms = dms => {
  return {
    type: RECEIVE_DMS,
    dms
  };
};

const receiveDm = dm => {
  return {
    type: RECEIVE_DM,
    dm
  };
};

const removeDm = dmId => {
  return {
    type: REMOVE_DM,
    dmId
  };
};

export const switchDm = dmId => {
  return {
    type: SWITCH_DM,
    dmId
  };
};

export const fetchDms = () => dispatch => (
  DmApiUtil.fetchDms().then( dms => dispatch(receiveDms(dms)))
);

export const fetchDm = (dmId) =>  dispatch => (
  DmApiUtil.fetchDm(dmId).then( dm => dispatch(receiveDm(dm)))
);

export const createDm = dm => dispatch => (
  DmApiUtil.createDm(dm).then( dm => dispatch(receiveDm(dm)))
);

export const deleteDm = dmId => dispatch => (
  DmApiUtil.deleteDm(dmId).then( (defaultChannel) => {
    return dispatch(removeDm(dmId));
  })
);
