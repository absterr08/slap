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

export const createMessage = (message) => {
  return $.ajax({
    method: 'POST',
    url: `/api/messages`,
    data: { message }
  })
}

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
  return minutes < 10 ? `${hours}:0${minutes} ${period}` : `${hours}:${minutes} ${period}`;
};


const formatDate = date => {
  const day = date.getDay();
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekdays[day];
};
