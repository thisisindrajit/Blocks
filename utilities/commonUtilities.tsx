export const randomLightColorGenerator = (): string =>
  `${Math.random() * 360}, 75%, 75%`;

export const statsCountShortener = (value: number): string => {
  if (value < 0) {
    return "🤔";
  }
  // if the value is less than 1000
  else if (value >= 0 && value < 1000) {
    return value.toString();
  }
  // if the value is between 1000 and 1000000
  else if (value >= 1000 && value < 1000000) {
    if (value === 1000) {
      return "1K";
    }

    return Math.floor(value / 1000) + "K+";
  }
  // if the value is 1 million or greater
  else {
    if (value === 1000000) {
      return "1M";
    }

    return "1M+";
  }
};

// Utility function to retry a function for a given number of times
export async function retryFunction(fn: any, retries = 3) {
  let attempt = 0;
  while (attempt < retries) {
    try {
      // Attempt to execute the function
      return await fn();
    } catch (error) {
      attempt++;

      if (attempt >= retries) {
        console.error(error);
        throw new Error(
          `Failed to execute function after ${retries} attempt(s)!`
        );
      }
    }
  }
}
