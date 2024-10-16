// import React, { useEffect } from 'react'
// import Navbar from './shared/Navbar'
// import Job from './Job';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import useGetAllJobs from '@/hooks/useGetAllJobs';
// import Footer from './shared/Footer';

// const Browse = () => {
//     useGetAllJobs();
//     const {allJobs} = useSelector(store=>store.job);
//     const dispatch = useDispatch();
//     useEffect(()=>{
//         return ()=>{
//             dispatch(setSearchedQuery(""));
//         }
//     },[])
//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-7xl mx-auto my-10'>
//                 <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
//                 <div className='grid grid-cols-3 gap-4'>
//                     {
//                         allJobs.map((job) => {
//                             return (
//                                 <Job key={job._id} job={job}/>
//                             )
//                         })
//                     }
//                 </div>

//             </div>
//             <Footer />
//         </div>
//     )
// }
// export default Browse
// import React, { useEffect } from 'react';
// import Navbar from './shared/Navbar';
// import Job from './Job';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import useGetAllJobs from '@/hooks/useGetAllJobs';
// import Footer from './shared/Footer';

// const Browse = () => {
//     useGetAllJobs();
//     const { allJobs } = useSelector(store => store.job);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         return () => {
//             dispatch(setSearchedQuery(""));
//         };
//     }, []);

//     return (
//         <div className="flex flex-col min-h-screen">
//             <Navbar />
//             <div className='max-w-7xl mx-auto my-10 flex-grow'>
//                 <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
//                 <div className='grid grid-cols-3 gap-4'>
//                     {
//                         allJobs.map((job) => {
//                             return (
//                                 <Job key={job._id} job={job} />
//                             );
//                         })
//                     }
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default Browse;

import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import Footer from './shared/Footer';

const Browse = () => {
    useGetAllJobs();
    const { allJobs } = useSelector(store => store.job);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(''));
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto my-10 flex-grow px-4 sm:px-6 lg:px-8">
                <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl my-10">
                    Search Results ({allJobs.length})
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allJobs.map((job) => {
                        return <Job key={job._id} job={job} />;
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Browse;

