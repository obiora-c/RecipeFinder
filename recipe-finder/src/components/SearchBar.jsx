import {useState} from 'react';

function SearchBar({onSearch}){
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
        
    };

    return(
        <div>
            <form onSubmit={handleSubmit}  
                 className='flex justify-center mb-6 gap-2'>

                <input type='text' placeholder='Search for a recipe..' className='border rounded p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type='submit' 
                        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                    Search
                </button>


            </form>

        </div>
    );
};

export default SearchBar;
