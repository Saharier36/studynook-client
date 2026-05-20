export const fetchRooms = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`);
  const data = await res.json();
  return data || [];
};

export const fetchRoomDetails = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${id}`);
  const data = await res.json();
  return data || [];
};

export const featuredRooms = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured-rooms`);
  const data = await res.json();
  return data || [];
};

export const addRooms = async (roomData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(roomData),
  });
  const data = await res.json();
  return data;
};

export const updateRoom = async (_id, roomData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(roomData),
  });
  const data = await res.json();
  return data;
};

export const deleteRoom = async (_id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};
