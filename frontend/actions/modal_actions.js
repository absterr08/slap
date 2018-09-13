export const RECEIVE_NEW_CHANNEL_MODAL = "RECEIVE_NEW_CHANNEL_MODAL";

export const RECEIVE_NEW_DM_MODAL = "RECEIVE_NEW_DM_MODAL";
export const OPEN_CHANNEL_SEARCH_MODAL = "OPEN_CHANNEL_SEARCH_MODAL";
export const CLOSE_CHANNEL_SEARCH_MODAL = "CLOSE_CHANNEL_SEARCH_MODAL";

export const receiveNewChannelModal = (modalType) => {
  const type = modalType === "channel" ? RECEIVE_NEW_CHANNEL_MODAL : RECEIVE_NEW_DM_MODAL
  return {
    type
  }
};

export const openChannelSearchModal = () => {
  return {
    type: OPEN_CHANNEL_SEARCH_MODAL
  };
};

export const closeChannelSearchModal = () => {
  return {
    type: CLOSE_CHANNEL_SEARCH_MODAL
  };
};
