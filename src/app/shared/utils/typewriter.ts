export const typewriter = (
  message: string,
  callback: (value: string) => void,
  accum: string = "",
  currentIndex: number = 0,
  delay: number = 25,
) => {
  if (currentIndex >= message.length) return;

  accum =
    accum.slice(0, -1) +
    message.charAt(currentIndex) +
    (currentIndex + 1 >= message.length ? "" : "▌");

  callback(accum);

  setTimeout(
    () => typewriter(message, callback, accum, currentIndex + 1),
    delay,
  );
};
