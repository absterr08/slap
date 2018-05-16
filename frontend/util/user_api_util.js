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

export const updateAvatar = (userId, formData) => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'PATCH',
    contentType: false,
    processData: false,
    data: formData
  })
);
