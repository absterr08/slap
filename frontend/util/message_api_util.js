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

export const formatDateTime = dateTimeString => {
  const dateTime = new Date(dateTimeString);
  const time = formatTime(dateTime);
  const date = formatDate(dateTime);
  return `${date}, ${time}`;

};

const formatTime = date => {
  let hours = date.getHours();
  hours = hours > 12 ? hours - 12 : hours;
  const minutes = date.getMinutes();
  const period = date.getHours() < 12 ? 'AM' : 'PM';
  return `${hours}:${minutes} ${period}`;
};


const formatDate = date => {
  const day = date.getDay();
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekdays[day];
};
