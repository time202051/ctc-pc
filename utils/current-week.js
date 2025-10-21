export function getWeek() {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
  const differenceToMonday = (dayOfWeek + 6) % 7; // Calculate the difference to Monday
  const monday = new Date(now);
  monday.setDate(now.getDate() - differenceToMonday);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  const formatDate = (date) => {
    console.log(date);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 月份从 0 开始
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  return [formatDate(monday) + " 00:00:00", formatDate(sunday) + " 23:59:59"];
}
