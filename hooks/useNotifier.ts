export const useNotifier = () => {
  const sendMessage = async (message: string) => {
    try {
      const response = await fetch(`api/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
  
      const { data } = await response.json();
      console.log( data );
    } catch (error) {
      console.error(error);
    }
  }

  return {
    sendMessage
  };
}