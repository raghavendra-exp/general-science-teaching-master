export const saveToStorage = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(`gst_${key}`, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving to storage key ${key}:`, e);
  }
};

export const getFromStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(`gst_${key}`);
    return item ? JSON.parse(item) : defaultValue;
  } catch (e) {
    console.error(`Error reading from storage key ${key}:`, e);
    return defaultValue;
  }
};

export const removeFromStorage = (key: string): void => {
  try {
    localStorage.removeItem(`gst_${key}`);
  } catch (e) {
    console.error(`Error removing from storage key ${key}:`, e);
  }
};

export const downloadJSON = (data: object, filename: string): void => {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
