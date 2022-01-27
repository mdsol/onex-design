// eslint-disable-next-line import/prefer-default-export
export const getInitials = (name) => {
  const names = name.trim().split(/\s/);
  return names.length
    ? `${names[0]?.charAt(0)}${names[names.length - 1]?.charAt(0)}`.toUpperCase()
    : '';
};
