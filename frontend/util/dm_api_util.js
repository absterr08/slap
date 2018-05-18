export const fetchDms = () => (
  $.ajax({
    url: `/api/dms`
  })
);

export const fetchDm = (dmId) => (
  $.ajax({
    url: `/api/dms/${dmId}`
  })
);

export const createDm = (dm) => (
  $.ajax({
    method: "POST",
    url: `/api/dms`,
    data: { dm }
  })
);

export const deleteDm = (dmId) => (
  $.ajax({
    method:"DELETE",
    url:`api/dms/${dmId}`
  })
);
