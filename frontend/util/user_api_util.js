export const fetchUsers = () => (
  $.ajax({
    url: `api/users`
  })
);

export const fetchUser = userId => (
  $.ajax({
    url: `api/users/${userId}`
  })
);

export const fetchChannelsAndDms = () => (
  $.ajax({
    url: `/api/users/current_user_channels_and_dms`
  })
);

export const updateAvatar = (userId, formData) => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'PATCH',
    contentType: false,
    processData: false,
    data: formData,
    success: () => console.log("nice")
  })
);
