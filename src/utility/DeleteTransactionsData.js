import { DEFAULT_URL } from "./constants";

export const DeleteTransactionsData =async (endpoint) =>{
 
    try {
        const response = await fetch(endpoint);
        const data = await response.json();

        if (data.length === 0) {
            console.log('No data to delete.');
            return;
        }
        
        
        // Create an array of delete requests for each record
        const deletePromises = data.map(item =>
            fetch(`${endpoint}/${item?.id}`, {
                method: 'DELETE'
            })
        );

        // Execute all delete requests simultaneously
        await Promise.all(deletePromises);
        console.log('All records deleted from endpoint:', endpoint);
    } catch (error) {
        console.error('Error deleting data from endpoint:', error);
    }
}