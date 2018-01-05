export const fetchMessages = () => (
  $.ajax({
    url: '/api/messages'
  })
);

export const fetchMessage = (messageId) => (
  $.ajax({
    url: `/api/messages/${messageId}`
  })
);

// is this gonna be ok with asynchronicity and stuff
export const getLastMessageId = () => (
  $.ajax({
    url: '/api/messages/get_last_message_id'
  })
);
export const updateMessage = message => (
  $.ajax({
    method: 'PATCH',
    url: `/api/messages/${message.id}`,
    data: { message }
  })
);
