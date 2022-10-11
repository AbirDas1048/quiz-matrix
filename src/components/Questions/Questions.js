import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Questions = () => {
    const loadedAllData = useLoaderData();
    const { status, data } = loadedAllData;
    const { name, questions } = data;
    return (
        <div>
            {status === true ?
                <div>
                    <p className='text-center'>Quiz of {name}</p>
                </div>
                : <p className='text-center'>Please select correct topic</p>
            }

        </div>
    );
};

export default Questions;