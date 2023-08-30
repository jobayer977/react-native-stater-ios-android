type FontName = 'Inter';
type FontType = 'Regular' | 'Bold' | 'Medium' | 'Light';

export const getFontFamily = (name: FontName, type: FontType) => {
  return `${name}-${type}`;
};
