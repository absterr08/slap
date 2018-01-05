export const fetchMessages = () => (
  $.ajax({
    url: '/api/messages'
  })
);

export const fetchMessage = (messageId) => {
  return $.ajax({
    url: `/api/messages/${messageId}`
  });
};

// is this gonna be ok with asynchronicity and stuff
export const getLastMessageId = () => {
  return $.ajax({
    url: '/api/get_last_message_id'
  });
};

export const updateMessage = message => (
  $.ajax({
    method: 'PATCH',
    url: `/api/messages/${message.id}`,
    data: { message }
  })
);
