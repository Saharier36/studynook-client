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
