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

export const searchUsers = query => (
  $.ajax({
    url: `api/users/search`,
    data: { query }
  })
)
