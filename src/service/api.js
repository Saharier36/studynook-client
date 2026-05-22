export const fetchRooms = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`);
  const data = await res.json();
  return data || [];
};

export const fetchRoomDetails = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data || [];
};

export const featuredRooms = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured-rooms`);
  const data = await res.json();
  return data || [];
};

export const addRooms = async (roomData, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(roomData),
  });
  const data = await res.json();
  return data;
};

export const updateRoom = async (_id, roomData, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(roomData),
  });
  const data = await res.json();
  return data;
};

export const deleteRoom = async (_id, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

export const bookings = async (bookingData, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookingData),
  });
  return res;
};

export const getBookings = async (userId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/bookings?userId=${userId}`,
  );
  const data = await res.json();
  return data;
};

export const cancelBooking = async (bookingId, userId, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/booking/${bookingId}/cancel`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userId }),
    },
  );
  return res;
};

export const getMyListings = async (userId, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/my-listings?userId=${userId}`,
    {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  return await res.json();
};
