import React from 'react'
import { userStore } from '../Global/API/store'
import moment from 'moment';
import HashTag from '../utils/HashTag';
import CommentForm from '../utils/CommentForm';

const Detail = () => {
    const blog = userStore(store=>store.blog);
    // console.log(blog)
  return (
    <div>
        {/* Image */}
        <div>
            <img src={blog?.blogImg} alt="" />
        </div>
        {/* Content */}
        <div className="flex flex-col space-y-2 text-primary">
          {/* Upload Time */}
          <p className="text-sm">{moment(blog?.time).fromNow()}</p>
          {/* Title */}
          <h1 className="font-bold text-3xl uppercase">{blog?.title}</h1>
          {/* HashTag */}
          <HashTag hashTags={blog?.hashTag} />
          {/* Descc */}
          <p className='text-lg'>{blog?.content}</p>
        </div>

        <CommentForm comments={blog?.comments} blogId={blog?._id}/>
    </div>
  )
}

export default Detail