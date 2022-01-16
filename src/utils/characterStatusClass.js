const characterStatusClass = (status) => {
  if (status === "Alive") {
    return "bg-green-500";
  } else if (status === "Dead") {
    return "bg-red-500";
  } else return "bg-gray-500";
};

export default characterStatusClass;
