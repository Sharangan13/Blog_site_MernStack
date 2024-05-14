import { Fragment, useEffect } from 'react';
import MetaData from './layouts/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../actions/BlogsActions';
import Loader from './layouts/Loder';

export default function Home() {

    const dispatch = useDispatch();

    const {blogs,loading} = useSelector((state)=>state.blogsState)

    useEffect(()=>{
        dispatch(getBlogs())
    },[dispatch])


    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };


    return (

        <Fragment>
            {loading ? <Loader/>:
            <Fragment>
            <MetaData title={'Blogs'} />

            <div className="container mt-5">
                <h1 id="products_heading">Latest Blogs</h1>

                <div className="row">
                    {blogs && blogs.map(blog=>(<div className="col-sm-12 col-md-6 my-3">
                        <div className="card p-3 rounded">
                            <img
                                className="card-img-top mx-auto"
                                src={blog.images[0].image}
                                alt="blog"
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">
                                    <a href="#">
                                        {blog.title}
                                    </a>
                                </h5>
                                <p>{truncateText(blog.body, 25)}</p>
                                
                                <a href="#" id="view_btn" className="btn btn-block btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>))}
                    

                    
                </div>
            </div>
        </Fragment>}
        

        </Fragment>
    );
}
