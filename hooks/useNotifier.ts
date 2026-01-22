export const useNotifier = () => {
  const sendMessage = async (message: string) => {
    try {
      const response = await fetch(`api/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });

      if (!response.ok) 
        throw new Error(`Error, backend response with status: ${ response.status }`)
    } catch (error) {
      console.error(error);
    }
  }

  return {
    sendMessage
  };
}