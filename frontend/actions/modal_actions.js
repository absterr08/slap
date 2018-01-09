export const RECEIVE_NEW_CHANNEL_MODAL = "RECEIVE_NEW_CHANNEL_MODAL";

export const RECEIVE_NEW_DM_MODAL = "RECEIVE_NEW_DM_MODAL";

export const receiveNewChannelModal = (modalType) => {
  const type = modalType === "channel" ? RECEIVE_NEW_CHANNEL_MODAL : RECEIVE_NEW_DM_MODAL
  return {
    type
  }
};
